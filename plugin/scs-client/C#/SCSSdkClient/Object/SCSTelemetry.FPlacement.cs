#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Represents a Float Placement simular to the one in the SDK with coordinate X,Y,Z and rotation X,Y,Z
        /// </summary>
        public class FPlacement {
            /// <summary>
            ///     Represents a position
            /// </summary>
            public FVector Position { get; internal set; }

            /// <summary>
            ///     Represents a orientation
            /// </summary>
            public Euler Orientation { get; internal set; }
        }
    }
}