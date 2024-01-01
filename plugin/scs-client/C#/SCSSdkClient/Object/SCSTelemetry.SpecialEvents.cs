#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Special Events the plugin deliver like onJob and JobFinished
        /// </summary>
        public class SpecialEvents {
            /// <summary>
            ///     Event flag that displays if a driver is doing a job
            /// </summary>
            public bool OnJob { get; internal set; }

            /// <summary>
            ///     Event flag that displays (for some ticks) that a job was finished, doesn't matter how (cancelled, delivered, ...)
            ///     Deprecated for Version 1.35 of both games. Use JobCancelled and JobDelivered Event for version starting with 1.35+
            ///     But should still work
            /// </summary>
            public bool JobFinished { get; internal set; }

            public bool JobCancelled { get; internal set; }
            public bool JobDelivered { get; internal set; }
            public bool Fined { get; internal set; }
            public bool Tollgate { get; internal set; }
            public bool Ferry { get; internal set; }
            public bool Train { get; internal set; }
            public bool Refuel {get; internal set;}
            public bool RefuelPayed {get;internal set;}
        }
    }
}