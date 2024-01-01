#pragma warning disable 1570

namespace SCSSdkClient.Object {

    public partial class SCSTelemetry {

        /// <summary>
        ///     Telemetry specific channels which might be used by more than one game.
        /// </summary>
        public class Common {

            /// <summary>
            ///     initialise a Common object
            /// </summary>
            public Common() {
                GameTime = new Time();
                NextRestStop = new Frequency();
            }

            /// About: Scale
            /// Games which use real 1:1 maps will not provide this channel

            /// <summary>
            ///     Absolute in-game time.
            /// </summary>
            /// <example>
            ///     <code>
            /// var GameTime = SCSTelemetry.Common.GameTime;
            /// </code>
            ///     To handle the in-game time in minutes
            ///     <code>
            /// var inGameMinutes = GameTime.Value; // Should be a uint
            /// </code>
            ///     Don't want to convert it yourself
            ///     <code>
            /// var inGameDate = GameTime.Date; // Should be a DateTime
            /// </code>
            /// </example>
            public Time GameTime { get; protected internal set; }

            /// <summary>
            ///     Time until next rest stop.
            /// </summary>
            public Frequency NextRestStop { get; internal set; }

            /// <summary>
            ///     In game time of next rest stop
            /// </summary>
            /// <example>
            ///     <code>
            /// GameTime == 05.01.0001 12:15  // Pseudocode
            /// </code>
            ///     Next time until rest stop (NextRestStop) 5:45
            ///     <code>
            /// NextRestStopTime == 05.01.0001 18:00 // Pseudocode
            /// </code>
            ///     Next time until rest stop (NextRestStop) -14:15
            ///     <code>
            /// NextRestStopTime == 04.01.0001 22:00 // Pseudocode
            /// </code>
            /// </example>
            public Time NextRestStopTime => new Time { Value = (uint)((int)GameTime.Value + NextRestStop.Value) };

            /// <summary>
            ///     Scale applied to distance and time to compensate for the scale of the map(e.g. 1s of real time corresponds to
            ///     local_scale minutes of simulated game time).
            /// </summary>
            /// <!---->
            /// **INFORMATION**
            /// <!---->
            /// Games which use real 1:1 maps will not provide this channel.
            /// <!---->
            /// **INFORMATION**
            /// <!---->
            public float Scale { get; internal set; }
        }
    }
}
