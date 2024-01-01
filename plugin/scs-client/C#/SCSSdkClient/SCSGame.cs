namespace SCSSdkClient {
    /// <summary>
    ///     Which game loaded the sdk?
    /// </summary>
    public enum SCSGame {
        /// About: Values
        /// 
        /// Unknown     - Unknown Game, most of the telemetry data won't work
        /// Ets2        - EuroTruckSimulator2 is running
        /// Ats         - AmericanTruckSimulator is running
         
        /// <summary>
        ///     Unknown Game
        /// </summary>
        Unknown,

        /// <summary>
        ///     EuroTruckSimulator2
        /// </summary>
        Ets2,

        /// <summary>
        ///     AmericanTruckSimulator
        /// </summary>
        Ats
    }
}