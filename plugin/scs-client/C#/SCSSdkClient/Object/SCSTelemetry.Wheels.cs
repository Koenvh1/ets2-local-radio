namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Wheel information
        /// </summary>
        public class WheelsConstants {
            /// About: Count
            /// SDK limited to 14 for SDK 1_9
            /// <summary>
            ///     Number of wheels
            /// </summary>
            public uint Count { get; internal set; }

            /// <summary>
            ///     Radius of the wheel(s)
            /// </summary>
            public float[] Radius { get; internal set; }

            /// <summary>
            ///     Is the wheel Simulated?
            /// </summary>
            public bool[] Simulated { get; internal set; }

            /// <summary>
            ///     Is the wheel Powered?
            /// </summary>
            public bool[] Powered { get; internal set; }

            /// <summary>
            ///     Is the wheel Liftable?
            /// </summary>
            public bool[] Liftable { get; internal set; }

            /// <summary>
            ///     Is the wheel steerable?
            /// </summary>
            public bool[] Steerable { get; internal set; }

            /// <summary>
            ///     Position of respective wheels in the vehicle space. For trailer it is described as offset ... but it should be the
            ///     position too
            /// </summary>
            public FVector[] PositionValues { get; internal set; }
        }
    }
}