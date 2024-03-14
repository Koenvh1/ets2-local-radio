#pragma warning disable 1570
namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        public partial class Truck {
            /// <summary>
            ///     Values that are changing a lot oftener
            /// </summary>
            public class Current {
                /// <summary>
                ///     Initialise a current truck object
                /// </summary>
                public Current() {
                    MotorValues = new Motor();
                    DashboardValues = new Dashboard();
                    LightsValues = new Lights();
                    WheelsValues = new Wheels();
                    DamageValues = new Damage();
                    PositionValue = new DPlacement();
                    AccelerationValues = new Acceleration();
                }

                /// <summary>
                ///     Is the electric enabled
                /// </summary>
                public bool ElectricEnabled { get; internal set; }

                /// <summary>
                ///     Is the engine enabled?
                /// </summary>
                public bool EngineEnabled { get; internal set; }


                /// <summary>
                ///     Is the differential lock enabled?
                /// </summary>
                public bool DifferentialLock { get; internal set; }

                /// <summary>
                ///     Is the lift axle control set to lifted state?
                /// </summary>
                public bool LiftAxle { get; internal set; }

                /// <summary>
                ///     Is the lift axle indicator lit?
                /// </summary>
                public bool LiftAxleIndicator { get; internal set; }

                /// <summary>
                ///     Is the trailer lift axle controler set to lifted state?
                /// </summary>
                public bool TrailerLiftAxle { get; internal set; }

                /// <summary>
                ///     Is the trailer lift axle indicator lit?
                /// </summary>
                public bool TrailerLiftAxleIndicator { get; internal set; }

                /// <summary>
                ///     Current values of the motor
                ///     <seealso cref="Motor" /> for more information
                /// </summary>
                public Motor MotorValues { get; internal set; }

                /// <summary>
                ///     Values that are displayed at the dashboard like rpm, fuelValue, ...
                ///     <seealso cref="Dashboard" /> for more information
                /// </summary>
                public Dashboard DashboardValues { get; internal set; }

                /// <summary>
                ///     Information about the Lights of the truck
                ///     <seealso cref="Lights" /> for more information
                /// </summary>
                public Lights LightsValues { get; internal set; }

                /// <summary>
                ///     Current values of the wheels like rotation, substance, ...
                ///     <seealso cref="Wheels" />
                /// </summary>
                public Wheels WheelsValues { get; internal set; }

                /// <summary>
                ///     Wear of the Truck
                /// </summary>
                public Damage DamageValues { get; internal set; }

                /// <summary>
                ///     Acceleration of the Truck
                ///     <seealso cref="Acceleration" /> for more information
                /// </summary>
                public Acceleration AccelerationValues { get; internal set; }

                /// <summary>
                ///     Represents world space position and orientation of the truck.
                /// </summary>
                public DPlacement PositionValue { get; protected internal set; }

                /// <summary>
                ///     Gear, Retarder, etc.
                /// </summary>
                public class Motor {
                    /// <summary>
                    ///     Initialise a motor object
                    /// </summary>
                    public Motor() {
                        GearValues = new Gear();
                        BrakeValues = new Brakes();
                    }

                    /// <summary>
                    ///     Information to the current gears
                    /// </summary>
                    public Gear GearValues { get; internal set; }

                    /// <summary>
                    ///     Information around the brake state
                    /// </summary>
                    public Brakes BrakeValues { get; internal set; }

                    /// <summary>
                    ///     Slected Gear, HShifter... etc.
                    /// </summary>
                    public class Gear {
                        /// About: HShifterSlot
                        /// 0 means that no slot is selected
                        ///  
                        /// About: Gear
                        ///  
                        /// - > 0  - Forward gears
                        /// -    0  - Neutral
                        /// - < 0  - Reverse gears
                        
                        /// <summary>
                        ///     Gearbox slot the h-shifter handle is currently in.
                        /// </summary>
                        /// <!----> **INFORMATION** <!---->
                        /// 0 means that no slot is selected
                        /// <!----> **INFORMATION** <!---->
                        public uint HShifterSlot { get; internal set; }

                        /// <summary>
                        ///     Selected gear in the engine
                        /// </summary>
                        /// <!----> **INFORMATION** <!---->
                        /// &gt; 0 - Forward gears
                        /// 0 - Neutral
                        /// &lt; 0 - Reverse gears
                        /// <!----> **INFORMATION** <!---->
                        public int Selected { get; internal set; }

                        /// <summary>
                        ///     Enabled state of range/splitter selector toggles
                        /// </summary>
                        public bool[] HShifterSelector { get; internal set; }
                    }

                    /// <summary>
                    ///     Brake Values
                    /// </summary>
                    public class Brakes {
                        /// About: RetarderLevel
                        /// <0;max>
                        ///     where 0 is disabled retarder and max is maximal value found in Truck configuration
                        /// See Also:
                        ///     <Constants.Motor.RetarderStepCount>
                        /// <summary>
                        /// Current level of the retarder
                        /// </summary>
                        /// <!----> **INFORMATION** <!---->
                        /// 0;max where 0 is disabled retarder and max is maximal value found in TRUCK configuration
                        /// <!----> **INFORMATION** <!---->
                        /// <seealso cref="Constants.Motor.RetarderStepCount" />.
                        public uint RetarderLevel { get; internal set; }

                        /// <summary>
                        ///     Pressure in the brake air tank in psi
                        /// </summary>
                        public float AirPressure { get; internal set; }

                        /// <summary>
                        ///     Temperature of the brakes in degrees celsius.
                        /// </summary>
                        public float Temperature { get; internal set; }

                        /// <summary>
                        ///     Is the parking brake enabled?
                        /// </summary>
                        public bool ParkingBrake { get; internal set; }

                        /// <summary>
                        ///     Is the motor brake enabled?
                        /// </summary>
                        public bool MotorBrake { get; internal set; }
                    }
                }

                /// <summary>
                ///     Speed, RPM, Pressures, Temperatures
                /// </summary>
                public class Dashboard {
                    /// <summary>
                    ///     Initialise a dashboard object
                    /// </summary>
                    public Dashboard() {
                        FuelValue = new Fuel();
                        WarningValues = new Warnings();
                        Speed = new Movement();
                        CruiseControlSpeed = new Movement();
                    }

                    /// About: Speed
                    /// Uses negative value to represent reverse movement
                    ///  
                    /// About: CruiseControlSpeed
                    /// Is zero if the cruise control is disabled
                    ///  
                    /// About: GearDashboard
                    ///   
                    /// - > 0  - Forward gears
                    /// -    0  - Neutral
                    /// - < 0  - Reverse gears
                     
                    /// <summary>
                    ///     Information about fuel: amount, range, average consumption
                    /// </summary>
                    public Fuel FuelValue { get; internal set; }

                    /// <summary>
                    ///     Display active warnings
                    /// </summary>
                    public Warnings WarningValues { get; internal set; }


                    /// <summary>
                    ///     Selected gear displayed on dashboard
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// &gt; 0 - Forward gears
                    /// 0 - Neutral
                    /// &lt; 0 - Reverse gears
                    /// <!----> **INFORMATION** <!---->
                    public int GearDashboards { get; internal set; }

                    /// <summary>
                    ///     Speedometer speed in m/s
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// Uses negative value to represent reverse movement
                    /// <!----> **INFORMATION** <!---->
                    public Movement Speed { get; internal set; }

                    /// <summary>
                    ///     Speed selected for the cruise control in m/s
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// Is zero if cruise control is disabled.
                    /// <!----> **INFORMATION** <!---->
                    public Movement CruiseControlSpeed { get; internal set; }

                    /// <summary>
                    ///     Amount of AdBlue in liters
                    /// </summary>
                    public float AdBlue { get; internal set; }

                    /// <summary>
                    ///     Pressure of the oil in psi
                    /// </summary>
                    public float OilPressure { get; internal set; }

                    /// <summary>
                    ///     Temperature of the oil in degrees celsius
                    /// </summary>
                    public float OilTemperature { get; internal set; }

                    /// <summary>
                    ///     Temperature of the water in degrees celsius
                    /// </summary>
                    public float WaterTemperature { get; internal set; }

                    /// <summary>
                    ///     Voltage of the battery in volts
                    /// </summary>
                    public float BatteryVoltage { get; internal set; }

                    /// <summary>
                    ///     RPM of the engine
                    /// </summary>
                    public float RPM { get; internal set; }

                    /// <summary>
                    ///     The value of the odometer in km
                    /// </summary>
                    public float Odometer { get; internal set; }

                    /// <summary>
                    ///     are the wipers enabled?
                    /// </summary>
                    public bool Wipers { get; internal set; }

                    /// <summary>
                    ///     Is the CruiseControl active?
                    /// </summary>
                    public bool CruiseControl { get; internal set; }


                    /// <summary>
                    ///     Contains Fuel values
                    /// </summary>
                    public class Fuel {
                        /// <summary>
                        ///     Amount of fuel in liters
                        /// </summary>
                        public float Amount { get; internal set; }

                        /// <summary>
                        ///     Average consumption of the fuel in liters/km
                        /// </summary>
                        public float AverageConsumption { get; internal set; }

                        /// <summary>
                        ///     Estimated range of truck with current amount of fuel in km
                        /// </summary>
                        public float Range { get; internal set; }
                    }

                    /// <summary>
                    ///     Warnings
                    /// </summary>
                    public class Warnings {
                        /// <summary>
                        ///     Is the air pressure warning active?
                        /// </summary>
                        public bool AirPressure { get; internal set; }

                        /// <summary>
                        ///     Are the emergency brakes active as result of low air pressure?
                        /// </summary>
                        public bool AirPressureEmergency { get; internal set; }

                        /// <summary>
                        ///     Is the fuel warning active?
                        /// </summary>
                        public bool FuelW { get; internal set; }

                        /// <summary>
                        ///     Is the adblue warning active?
                        /// </summary>
                        public bool AdBlue { get; internal set; }

                        /// <summary>
                        ///     Is the oil pressure warning active?
                        /// </summary>
                        public bool OilPressure { get; internal set; }

                        /// <summary>
                        ///     Is the water temperature warning active?
                        /// </summary>
                        public bool WaterTemperature { get; internal set; }

                        /// <summary>
                        ///     Is the battery voltage warning active?
                        /// </summary>
                        public bool BatteryVoltage { get; internal set; }
                    }
                }

                /// <summary>
                ///     Lightlevel and state of Lights
                /// </summary>
                public class Lights {
                    /// About: Blinker Avtive
                    /// This represents the logical enable state of the blinker. It
                    /// it is true as long the blinker is enabled regardless of the
                    /// physical enabled state of the light (i.e. it does not blink
                    /// and ignores enable state of electric).
                     
                    /// <summary>
                    ///     Are the auxiliary front lights active?
                    /// </summary>
                    public AuxLevel AuxFront { get; internal set; }

                    /// <summary>
                    ///     Are the auxiliary roof lights active?
                    /// </summary>
                    public AuxLevel AuxRoof { get; internal set; }

                    /// <summary>
                    ///     Intensity of the dashboard backlight as factor &lt;0;1&gt;
                    /// </summary>
                    public float DashboardBacklight { get; internal set; }

                    /// <summary>
                    ///     Is the left blinker enabled?
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// This represents the logical enable state of the blinker. It
                    /// it is true as long the blinker is enabled regardless of the
                    /// physical enabled state of the light (i.e. it does not blink
                    /// and ignores enable state of electric).
                    /// <!----> **INFORMATION** <!---->
                    public bool BlinkerLeftActive { get; internal set; }

                    /// <summary>
                    ///     Is the light in the left blinker currently on?
                    /// </summary>
                    public bool BlinkerLeftOn { get; internal set; }

                    /// <summary>
                    ///     Is the Right blinker enabled?
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// This represents the logical enable state of the blinker. It
                    /// it is true as long the blinker is enabled regardless of the
                    /// physical enabled state of the light (i.e. it does not blink
                    /// and ignores enable state of electric).
                    /// <!----> **INFORMATION** <!---->
                    public bool BlinkerRightActive { get; internal set; }

                    /// <summary>
                    ///     Is the light in the Right blinker currently on?
                    /// </summary>
                    public bool BlinkerRightOn { get; internal set; }

                    /// <summary>
                    ///     Are the parking lights enabled?
                    /// </summary>
                    public bool Parking { get; internal set; }

                    /// <summary>
                    ///     Are the BeamLow lights enabled?
                    /// </summary>
                    public bool BeamLow { get; internal set; }

                    /// <summary>
                    ///     Are the BeamHigh lights enabled?
                    /// </summary>
                    public bool BeamHigh { get; internal set; }

                    /// <summary>
                    ///     Are the Beacon lights enabled?
                    /// </summary>
                    public bool Beacon { get; internal set; }

                    /// <summary>
                    ///     Are the Brake lights enabled?
                    /// </summary>
                    public bool Brake { get; internal set; }

                    /// <summary>
                    ///     Are the Reverse lights enabled?
                    /// </summary>
                    public bool Reverse { get; internal set; }

                    /// <summary>
                    ///     Are the hazard warning lights enabled?  
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// This represents the logical enable state of the hazard warning.
                    /// It it is true as long it is enabled regardless of the physical
                    /// enabled state of the light(i.e.it does not blink).
                    /// <!----> **INFORMATION** <!---->
                    public bool HazardWarningLights { get; internal set; }

                }

                /// <summary>
                ///     States of the Wheels
                /// </summary>
                public class Wheels {
                    /// About: Velocity
                    /// Positive velocity corresponds to forward movement
                    /// 
                    /// About: Steering
                    /// Value is from
                    /// <0.25,0.25>
                    /// range in counterclockwise
                    /// direction when looking from top (e.g. 0.25 corresponds to left and -0.25 corresponds to right)
                    /// 
                    /// Set to zero for non-steered wheels
 
                    /// About: Rotation
                    /// Value is from
                    /// <0.0,1.0) range in which value increase corresponds to forward movement
                  
                    /// About: Lift
                    /// For use with simple lifted/ non-lifted test or logical visualization of the lifting progress.
                    ///  
                    /// - Value of 0 corresponds to non-lifted axle.
                    /// - Value of 1 corresponds to fully lifted axle.
                    /// Set to zero or not provided for non-liftable axles.
                     
                    /// About: LiftOffset
                    /// Might have non-linear relation to lift ratio.
                    /// Set to zero or not provided for non-liftable axles.
                    
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
                    /// <!----> **INFORMATION** <!---->
                    /// Positive velocity corresponds to forward movement
                    /// <!----> **INFORMATION** <!---->
                    public float[] Velocity { get; internal set; }

                    /// <summary>
                    ///     Steering rotation of the wheel in rotations
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// Value is from &lt;0.25,0.25&gt; range in counterclockwise direction when looking from top (e.g. 0.25 corresponds to left and -0.25 corresponds to right)
                    /// 
                    /// Set to zero for non-steered wheels
                    /// <!----> **INFORMATION** <!---->
                    public float[] Steering { get; internal set; }

                    /// <summary>
                    ///     Rolling rotation of the wheel in rotations
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// Value is from &lt;0.0,1.0) range in which value increase corresponds to forward movement
                    /// <!----> **INFORMATION** <!---->
                    public float[] Rotation { get; internal set; }

                    /// <summary>
                    ///     Lift state of the wheel &lt;0;1&gt;
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// For use with simple lifted/non-lifted test or logical visualization of the lifting progress.
                    ///  
                    /// Value of 0 corresponds to non-lifted axle.
                    /// Value of 1 corresponds to fully lifted axle.
                    /// 
                    /// Set to zero or not provided for non-liftable axles.
                    /// <!----> **INFORMATION** <!---->
                    public float[] Lift { get; internal set; }

                    /// <summary>
                    ///     Vertical displacement of the wheel axle from its normal position in meters as result of lifting.
                    /// </summary>
                    /// <!----> **INFORMATION** <!---->
                    /// Might have non-linear relation to lift ratio.
                    /// 
                    /// Set to zero or not provided for non-liftable axles.
                    /// <!----> **INFORMATION** <!---->
                    public float[] LiftOffset { get; internal set; }

                    /// <summary>
                    ///     Is the wheel in contact with ground?
                    /// </summary>
                    public bool[] OnGround { get; internal set; }
                }

                /// <summary>
                ///     Wear of Truck parts
                /// </summary>
                public class Damage {
                    /// <summary>
                    ///     Wear of the engine accessory as &lt;0;1&gt;
                    /// </summary>
                    public float Engine { get; internal set; }

                    /// <summary>
                    ///     Wear of the transmission accessory as &lt;0;1&gt;
                    /// </summary>
                    public float Transmission { get; internal set; }

                    /// <summary>
                    ///     Wear of the cabin accessory as &lt;0;1&gt;
                    /// </summary>
                    public float Cabin { get; internal set; }

                    /// <summary>
                    ///     Wear of the chassis accessory as &lt;0;1&gt;
                    /// </summary>
                    public float Chassis { get; internal set; }

                    /// <summary>
                    ///     Average wear across the wheel accessory as &lt;0;1&gt;
                    /// </summary>
                    public float WheelsAvg { get; internal set; }
                }

                public class Acceleration {
                    /// <summary>
                    ///     Represents vehicle space linear velocity of the truck measured in m/s
                    /// </summary>
                    public FVector LinearVelocity { get; internal set; }

                    /// <summary>
                    ///     Represents vehicle space angular velocity of the truck measured in rotations/s
                    /// </summary>
                    public FVector AngularVelocity { get; internal set; }

                    /// <summary>
                    ///     Represents vehicle space linear acceleration of the truck measured in m/s^2
                    /// </summary>
                    public FVector LinearAcceleration { get; internal set; }

                    /// <summary>
                    ///     Represents vehicle space angular acceleration of the truck measured in rotations/s^2
                    /// </summary>
                    public FVector AngularAcceleration { get; internal set; }

                    /// <summary>
                    ///     Represents cabin space angular velocity of the cabin measured in rotation/s
                    /// </summary>
                    public FVector CabinAngularVelocity { get; internal set; }

                    /// <summary>
                    ///     Represents cabin space angular acceleration of the cabin measured in rotations/s^2
                    /// </summary>
                    public FVector CabinAngularAcceleration { get; internal set; }
                }
            }
        }
    }
}