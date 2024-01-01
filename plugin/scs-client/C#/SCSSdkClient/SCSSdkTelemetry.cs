using System;
using System.Threading;
using SCSSdkClient.Object;

namespace SCSSdkClient {

    /// <summary>
    ///     Data Event
    ///
    ///     The parameter **newTimeStamp** is deprecated and will be removed in a future release.
    ///
    /// </summary>
    ///
    ///
    /// <param name="data">All data of the telemetry</param>
    /// <param name="newTimestamp">Flag if the data changed</param>
    public delegate void TelemetryData(SCSTelemetry data, bool newTimestamp);

    /// <summary>
    ///     Handle the SCSSdkTelemetry.
    ///     Currently IDisposable. Was implemented because of an error
    /// </summary>
    public class SCSSdkTelemetry: IDisposable {
        private const string DefaultSharedMemoryMap = "Local\\ETS2LocalRadio";
        private const int DefaultUpdateInterval = 100;
        private const int DefaultPausedUpdateInterval = 1000;

        private int updateInterval;

        // todo: enhancement:  some way to set this value
        private readonly int pausedUpdateInterval = DefaultPausedUpdateInterval;

        private Timer _updateTimer;

        private ulong lastTime = 0xFFFFFFFFFFFFFFFF;

#if LOGGING
        public void Dispose() {
            _updateTimer?.Dispose();
            Log.SaveShutdown();
        }
#else

        public void Dispose() => _updateTimer?.Dispose();

#endif

        private SharedMemory SharedMemory;

        private bool wasOnJob;
        private bool cancelled;
        private bool delivered;
        private bool fined;
        private bool tollgate;
        private bool ferry;
        private bool train;
        private bool paused;
        private bool refuel;
        private bool refuelPayed;
        private bool wasPaused;

        public SCSSdkTelemetry() => Setup(DefaultSharedMemoryMap, DefaultUpdateInterval);

        public SCSSdkTelemetry(string map) => Setup(map, DefaultUpdateInterval);

        public SCSSdkTelemetry(int interval) => Setup(DefaultSharedMemoryMap, interval);

        public SCSSdkTelemetry(string map, int interval) => Setup(map, interval);

        public string Map { get; private set; }
        public int UpdateInterval => paused ? pausedUpdateInterval : updateInterval;

        public Exception Error { get; private set; }

        public event TelemetryData Data;

        public event EventHandler JobStarted;

        public event EventHandler JobCancelled;

        public event EventHandler JobDelivered;

        public event EventHandler Fined;

        public event EventHandler Tollgate;

        public event EventHandler Ferry;

        public event EventHandler Train;

        public event EventHandler RefuelStart;

        public event EventHandler RefuelEnd;

        public event EventHandler RefuelPayed;

        public void pause() => _updateTimer.Change(Timeout.Infinite, Timeout.Infinite);

        public void resume() {
            var tsInterval = new TimeSpan(0, 0, 0, 0, UpdateInterval);
            _updateTimer.Change(tsInterval, tsInterval);
        }

        /// <summary>
        ///     Set up SCS telemetry provider.
        ///     Connects to shared memory map, sets up timebase.
        /// </summary>
        /// <param name="map">Memory Map location</param>
        /// <param name="interval">Timebase interval</param>
        private void Setup(string map, int interval) {
#if LOGGING
            AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
            Log.Write("Start of the Telemetry");
            Log.Write("Set up everything and start the updatetimer");
#endif

            Map = map;
            updateInterval = interval;

            SharedMemory = new SharedMemory();
            SharedMemory.Connect(map);

            if (!SharedMemory.Hooked) {
                Error = SharedMemory.HookException;
                return;
            }

            var tsInterval = new TimeSpan(0, 0, 0, 0, interval);

            _updateTimer = new Timer(_updateTimer_Elapsed, null, tsInterval.Add(tsInterval), tsInterval);
#if LOGGING
            Log.Write("Every thing is set up correctly and the timer was started");
#endif
        }

        private void _updateTimer_Elapsed(object sender) {
            var scsTelemetry = SharedMemory.Update<SCSTelemetry>();

            if (scsTelemetry == null) {
                return;
            }

            // check if sdk is NOT running
            if (!scsTelemetry.SdkActive && !paused) {
                // if so don't check so often the data
                var tsInterval = new TimeSpan(0, 0, 0, 0, DefaultPausedUpdateInterval);
                _updateTimer.Change(tsInterval.Add(tsInterval), tsInterval);
                paused = true;

                // if sdk not active we don't need to do something
                return;
            }

            if (paused && scsTelemetry.SdkActive) {
                // ok sdk is active now
                paused = false;
                resume(); // going back to normal update rate
            }

            var time = scsTelemetry.Timestamp;
            var updated = false;

            if (time != lastTime || wasPaused != scsTelemetry.Paused) {
                // time changed or game state change -> update data
                Data?.Invoke(scsTelemetry, true);
                wasPaused = scsTelemetry.Paused;
                lastTime = time;
                updated = true;
            }

            //TODO: make it nicer thats a lot of code for such less work
            // Job start event
            if (wasOnJob != scsTelemetry.SpecialEventsValues.OnJob) {
                wasOnJob = scsTelemetry.SpecialEventsValues.OnJob;
                if (wasOnJob) {
                    if (!updated) {
                        Data?.Invoke(scsTelemetry, true);
                        updated = true;
                    }

                    JobStarted?.Invoke(this, new EventArgs());
                }
            }

            if (cancelled != scsTelemetry.SpecialEventsValues.JobCancelled) {
                cancelled = scsTelemetry.SpecialEventsValues.JobCancelled;

                if (!updated) {
                    Data?.Invoke(scsTelemetry, true);
                    updated = true;
                }

                JobCancelled?.Invoke(this, new EventArgs());
            }

            if (delivered != scsTelemetry.SpecialEventsValues.JobDelivered) {
                delivered = scsTelemetry.SpecialEventsValues.JobDelivered;

                if (!updated) {
                    Data?.Invoke(scsTelemetry, true);
                    updated = true;
                }

                JobDelivered?.Invoke(this, new EventArgs());
            }

            if (fined != scsTelemetry.SpecialEventsValues.Fined) {
                fined = scsTelemetry.SpecialEventsValues.Fined;

                Fined?.Invoke(this, new EventArgs());
            }

            if (tollgate != scsTelemetry.SpecialEventsValues.Tollgate) {
                tollgate = scsTelemetry.SpecialEventsValues.Tollgate;

                Tollgate?.Invoke(this, new EventArgs());
            }

            if (ferry != scsTelemetry.SpecialEventsValues.Ferry) {
                ferry = scsTelemetry.SpecialEventsValues.Ferry;

                if (!updated) {
                    Data?.Invoke(scsTelemetry, true);
                    updated = true;
                }

                Ferry?.Invoke(this, new EventArgs());
            }

            if (train != scsTelemetry.SpecialEventsValues.Train) {
                train = scsTelemetry.SpecialEventsValues.Train;

                if (!updated) {
                    Data?.Invoke(scsTelemetry, true);
                    updated = true;
                }

                Train?.Invoke(this, new EventArgs());
            }

            if (refuel != scsTelemetry.SpecialEventsValues.Refuel) {
                refuel = scsTelemetry.SpecialEventsValues.Refuel;

                if (scsTelemetry.SpecialEventsValues.Refuel) {
                    RefuelStart?.Invoke(this, new EventArgs());
                } else {
                    RefuelEnd?.Invoke(this, new EventArgs());
                }
            }

            if (refuelPayed != scsTelemetry.SpecialEventsValues.RefuelPayed) {
                refuelPayed = scsTelemetry.SpecialEventsValues.RefuelPayed;

                if (scsTelemetry.SpecialEventsValues.RefuelPayed) {
                    RefuelPayed?.Invoke(this, new EventArgs());
                }
            }

            // currently the design is that the event is called, doesn't matter if data changed
            // also the old demo didn't used the flag and expected to be refreshed each call
            // so without making a big change also call the event without update with false flag
            if (!updated) {
                Data?.Invoke(scsTelemetry, false);
            }
        }

#if LOGGING
        private static void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e) {
            try {
                var ex = (Exception) e.ExceptionObject;
                Console.WriteLine("Fatal unhandled Exception... pls create an issue and add the log file on github");
                Log.Write(ex.ToString());
                Log.SaveShutdown();
            } catch (Exception ex) {
                try {
                    Console.WriteLine("Can't write log / or close it after an unhandled Exception: "+ex);
                } finally {
                    Environment.Exit(142);
                }
            }
        }
#endif
    }
}
