#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Gameplay Events that can be fired from the sdk (starting for game version 1.35+)
        ///     first implementation is that the values will be set, but never deleted
        ///     another change listener for bool values that will be changed will say if there are new values
        /// </summary>
        /// <note>
        ///     Refuel event is currently not provided by the sdk. It is provided through the fuel value.
        /// </note>
        public class GamePlayEvents {
            public Transport FerryEvent;
            public Fined FinedEvent;
            public Cancelled JobCancelled;
            public Delivered JobDelivered;
            public Tollgate TollgateEvent;
            public Transport TrainEvent;
            public Refuel RefuelEvent;


            public GamePlayEvents() {
                JobCancelled = new Cancelled();
                JobDelivered = new Delivered();
                FinedEvent = new Fined();
                TollgateEvent = new Tollgate();
                TrainEvent = new Transport();
                FerryEvent = new Transport();
                RefuelEvent = new Refuel();
            }


            public class Cancelled {
                public long Penalty{ get; internal set; }
                public Time Finished{ get; internal set; }
                public Time Started{ get; internal set; }
            }

            public class Delivered {
              
                public bool AutoLoaded{ get; internal set; }
                public bool AutoParked{ get; internal set; }
                public float CargoDamage{ get; internal set; }  // Typo fixed thanks to Patrick-van-Halm https://github.com/RenCloud/scs-sdk-plugin/pull/32
                public Time DeliveryTime{ get; internal set; }  // Theoretically more a `Frequency`, because it is a timespan and not a moment, but atm i won't change it to frequency also because it is a UINT from SDK and only positive.
                public float DistanceKm{ get; internal set; }
                public int EarnedXp{ get; internal set; }
                public long Revenue{ get; internal set; }
                public Time Finished{ get; internal set; }
                public Time Started{ get; internal set; }
                public Time StartedBackup => Finished - DeliveryTime;
            }

            public class Fined {
                public long Amount{ get; internal set; }
                public Offence Offence{ get; internal set; }
            }

            public class Tollgate {
                public long PayAmount{ get; internal set; }
            }

            public class Transport {
                public long PayAmount{ get; internal set; }
                public string SourceId{ get; internal set; }
                public string SourceName{ get; internal set; }
                public string TargetId{ get; internal set; }
                public string TargetName{ get; internal set; }
            }

            public class Refuel {
                public float Amount{ get; internal set; }
            }
        }
    }
}