using System;

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Converts uint minutes in a DateTime object
        /// </summary>
        /// <param name="minutes">In-Game Minutes</param>
        /// <returns>
        ///     DateTime object of the in-game time
        /// </returns>
        internal static DateTime MinutesToDate(uint minutes) =>
            new DateTime((long) minutes * 10000000 * 60, DateTimeKind.Utc);

        /// <summary>
        ///     Converts int minutes in a DateTime object
        /// </summary>
        /// <param name="minutes">In-Game Minutes</param>
        /// <returns>
        ///     DateTime object of the in-game time
        /// </returns>
        internal static DateTime MinutesToDate(int minutes) =>
            new DateTime((long) Math.Abs(minutes) * 10000000 * 60, DateTimeKind.Utc);


        /// <summary>
        ///     Adds two float vectors
        /// </summary>
        /// <param name="first">
        ///     First Float Vector
        /// </param>
        /// <param name="second">
        ///     Second Float Vector
        /// </param>
        /// <returns>
        ///     Sum of both Float Vectors
        /// </returns>
        public static FVector Add(FVector first, FVector second) =>
            new FVector {X = first.X + second.X, Y = first.Y + second.Y, Z = first.Z + second.Z};

        /// <summary>
        ///     Adds float vector to double vector
        /// </summary>
        /// <param name="first">
        ///     double vector
        /// </param>
        /// <param name="second">
        ///     float vector
        /// </param>
        /// <returns>
        ///     sum as double vector
        /// </returns>
        public static DVector Add(DVector first, FVector second) =>
            new DVector {X = first.X + second.X, Y = first.Y + second.Y, Z = first.Z + second.Z};

        /// <summary>
        ///     Rotates specified vector by specified orientation
        /// </summary>
        /// <param name="orientation">
        ///     given orientation
        /// </param>
        /// <param name="vector">
        ///     given float vector
        /// </param>
        /// <returns>
        ///     rotated float vector
        /// </returns>
        public static FVector Rotate(Euler orientation, FVector vector) {
            var headingRadians = orientation.Heading * PiTimes2;
            var pitchRadians = orientation.Pitch * PiTimes2;
            var rollRadians = orientation.Roll * PiTimes2;

            var cosHeading = Math.Cos(headingRadians);
            var sinHeading = Math.Sin(headingRadians);
            var cosPitch = Math.Cos(pitchRadians);
            var sinPitch = Math.Sin(pitchRadians);
            var cosRoll = Math.Cos(rollRadians);
            var sinRoll = Math.Sin(rollRadians);

            // Roll around Z axis
            var postRollX = vector.X * cosRoll - vector.Y * sinRoll;
            var postRollY = vector.X * sinRoll + vector.Y * cosRoll;
            var postRollZ = vector.Z;

            // Pitch around X axis
            var postPitchX = postRollX;
            var postPitchY = postRollY * cosPitch - postRollZ * sinPitch;
            var postPitchZ = postRollY * sinPitch + postRollZ * cosPitch;

            // heading around y axis

            return new FVector {
                                   X = (float) (postPitchX * cosHeading + postPitchZ * sinHeading),
                                   Y = (float) postPitchY,
                                   Z = (float) (-postPitchX * sinHeading + postPitchZ * cosHeading)
                               };
        }

        internal void SetDeliveryTime(uint deliveryTime) {
            JobValues.DeliveryTime = deliveryTime;
            if (CommonValues.GameTime.Value > 0 && CommonValues.GameTime.Value< 4000000000 && deliveryTime > 0) {
                JobValues.RemainingDeliveryTime = (int) (deliveryTime- CommonValues.GameTime.Value);
            } else {
                JobValues.RemainingDeliveryTime = 0;
            }
        }

        internal void SetTruckPosition(DPlacement position) {
            TruckValues.CurrentValues.PositionValue = position;
            TruckValues.Positioning.TruckPosition = position;
        }
    }
}