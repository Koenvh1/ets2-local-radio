#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Represent a Double Vector simular to the one in the SDK with X,Y and Z Coordinated
        /// </summary>
        public class DVector {
            /// <summary>
            ///     X Coordinate of the Vector
            ///     In local space point right
            ///     In local space points east
            /// </summary>
            public double X { get; internal set; }

            /// <summary>
            ///     Y Coordinate of the Vector
            ///     In local space points up
            ///     In world space points ip
            /// </summary>
            public double Y { get; internal set; }

            /// <summary>
            ///     Z Coordinate of the Vector
            ///     In local space points backwards
            ///     In world space points south
            /// </summary>
            public double Z { get; internal set; }
        }
    }
}