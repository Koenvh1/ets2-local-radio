#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Represents a Double Placement similar to the one in the SDK with coordinate X,Y,Z and rotation X,Y,Z
        /// </summary>
        public class DPlacement {
            /// <summary>
            ///     Represents a Position
            /// </summary>
            public DVector Position { get; internal set; }

            /// <summary>
            ///     Represents a Orientation
            /// </summary>
            public Euler Orientation { get; internal set; }
        }
    }
}