#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Advisor Values
        /// </summary>
        public class Navigation {
            /// <summary>
            ///     Initialise a navigation object
            /// </summary>
            public Navigation() => SpeedLimit = new Movement();

            /// About: SpeedLimit
            /// Respects the current state of the "Route Advisor speed limit" option
          
            /// <summary>
            ///     The value of truck's navigation distance (in meters)
            /// </summary>
            public float NavigationDistance { get; internal set; }

            /// <summary>
            ///     The value of truck's navigation eta (in second)
            /// </summary>
            public float NavigationTime { get; internal set; }

            /// <summary>
            ///     The value of truck's navigation speed limit (in m/s)
            /// </summary>
            /// <!---->
            /// **INFORMATION**
            /// <!---->
            /// Respects the current state of the "Route Advisor speed limit" option
            /// <!---->
            /// **INFORMATION**
            /// <!---->
            public Movement SpeedLimit { get; internal set; }
        }
    }
}