#pragma warning disable 1570

namespace SCSSdkClient.Object {

    public partial class SCSTelemetry {

        /// <summary>
        ///     Trailer Values
        /// </summary>
        public class Trailer {

            /// <summary>
            ///     Initialise a trailer object
            /// </summary>
            public Trailer() {
                Wheelvalues = new Wheels();
                AccelerationValues = new Acceleration();
                WheelsConstant = new WheelsConstants();
                Hook = new FVector();
                DamageValues = new Damage();
            }

            /// <summary>
            ///     Acceleration values of the trailer
            ///     <seealso cref="Acceleration" /> for more informaiton
            /// </summary>
            public Acceleration AccelerationValues { get; internal set; }

            /// <summary>
            ///     Is the trailer connected to the truck
            /// </summary>
            public bool Attached { get; internal set; }

            public string BodyType { get; internal set; }

            public string Brand { get; internal set; }

            public string BrandId { get; internal set; }

            /// <summary>
            ///     Name of cargo accessory for internal use by code.
            ///     Limited to C-identifier characters and dots.
            /// </summary>
            public string CargoAccessoryId { get; internal set; }

            public string ChainType { get; internal set; }

            public Damage DamageValues { get; internal set; }

            /// <summary>
            ///     Default position of the hook in vehicle space
            /// </summary>
            public FVector Hook { get; internal set; }

            /// <summary>
            ///     Id for internal use by code.
            ///     Limited to C-identifier characters and dots
            /// </summary>
            public string Id { get; internal set; }

            public string LicensePlate { get; internal set; }

            public string LicensePlateCountry { get; internal set; }

            public string LicensePlateCountryId { get; internal set; }

            public string Name { get; internal set; }

            /// <summary>
            ///     Position of the trailer
            /// </summary>
            public DPlacement Position { get; internal set; }

            /// <summary>
            ///     Constant wheel values like Count, Radius,  ...
            ///     <seealso cref="WheelsConstants" /> for more information
            /// </summary>
            public WheelsConstants WheelsConstant { get; internal set; }

            /// <summary>
            ///     Current wheel values of the trailer, like rotation , substance, ...
            ///     <seealso cref="Wheels" /> for more information
            /// </summary>
            public Wheels Wheelvalues { get; internal set; }

            public class Acceleration {

                /// <summary>
                ///     Represents vehicle space angular acceleration of the trailer measured in rotations/s^2
                /// </summary>
                public FVector AngularAcceleration { get; internal set; }

                /// <summary>
                ///     Represents vehicle space angular velocity of the trailer measured in rotation/s
                /// </summary>
                public FVector AngularVelocity { get; internal set; }

                /// <summary>
                ///     Represents vehicle space linear acceleration of the trailer measured in m/s^2
                /// </summary>
                public FVector LinearAcceleration { get; internal set; }

                /// <summary>
                ///     Represents vehicle space linear velocity of the trailer measured in m/s
                /// </summary>
                public FVector LinearVelocity { get; internal set; }
            }

            public class Damage {
                public float Body { get; internal set; }
                public float Cargo { get; internal set; }
                public float Chassis { get; internal set; }
                public float Wheels { get; internal set; }
            }

            /// <summary>
            ///     States of the Wheels
            /// </summary>
            public class Wheels {
                /// About: Velocity
                /// Positive velocity corresponds to forward movement

                /// About: Steering
                /// Value is from
                /// <0.25, 0.25>
                /// range in counterclockwise direction
                /// when looking from top (e.g. 0.25 corresponds to left and -0.25 corresponds to right)
                ///
                /// Set to zero for non-steered wheels

                /// About: Rotation
                /// Value is from
                /// <0.0, 1.0) range in which value increase corresponds to forward movement

                /// About: Lift
                /// For use with simple lifted/ non-lifted test or logical visualization of the lifting progress.
                ///
                /// - Value of 0 corresponds to non-lifted axle.
                /// - Value of 1 corresponds to fully lifted axle.
                /// Set to zero or not provided for non-liftable axles.

                /// About: LiftOffset
                /// Might have non-linear relation to lift ratio.
                /// Set to zero or not provided for non-liftable axles.

                public float[] Lift { get; internal set; }

                public float[] LiftOffset { get; internal set; }

                /// <summary>
                ///     Is true if the wheel contacts the ground
                /// </summary>
                public bool[] OnGround { get; internal set; }

                /// <summary>
                ///     Rolling rotation of the wheel in rotations
                /// </summary>
                /// <!---->
                /// **INFORMATION**
                /// <!---->
                /// Value is from &lt;0.0,1.0) range in which value increase corresponds to forward movement
                /// <!---->
                /// **INFORMATION**
                /// <!---->
                public float[] Rotation { get; internal set; }

                /// <summary>
                ///     Steering rotation of the wheel in rotations
                /// </summary>
                /// <!---->
                /// **INFORMATION**
                /// <!---->
                /// Value is from &lt;0.25,0.25&gt; range in counterclockwise direction when looking from top (e.g. 0.25 corresponds to left and -0.25 corresponds to right)
                ///
                /// Set to zero for non-steered wheels
                /// <!---->
                /// **INFORMATION**
                /// <!---->
                public float[] Steering { get; internal set; }

                /// <summary>
                ///     Substance below the wheel
                /// </summary>
                public uint[] Substance { get; internal set; }

                /// <summary>
                ///     Vertical displacement of the wheel from its axis in meters
                /// </summary>
                public float[] SuspDeflection { get; internal set; }

                /// <summary>
                ///     Angular velocity of the wheel in rotations per second
                /// </summary>
                /// <!---->
                /// **INFORMATION**
                /// <!---->
                /// Positive velocity corresponds to forward movement
                /// <!---->
                /// **INFORMATION**
                /// <!---->
                public float[] Velocity { get; internal set; }
            }
        }
    }
}
