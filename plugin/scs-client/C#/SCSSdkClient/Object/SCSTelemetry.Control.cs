#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     User Input value and value used by the game
        /// </summary>
        public class Control {
            /// <summary>
            ///     Initialise a Control object
            /// </summary>
            public Control() {
                InputValues = new Input();
                GameValues = new Game();
            }

            /// <summary>
            ///     Contains the values of the user input
            /// </summary>
            public Input InputValues { get; internal set; }

            /// <summary>
            ///     Cpntains the values the game use
            /// </summary>
            public Game GameValues { get; internal set; }


            /// <inheritdoc />
            public override string ToString() =>
                $"Input Values:\n\t{InputValues.ToString().StringFormater()}\nGame Values:\n\t{GameValues.ToString().StringFormater()}";

            /// <summary>
            ///     Input value
            /// </summary>
            public class Input {
                /// About: Steering
                /// Note that it is interpreted counterclockwise.
                /// 
                /// If the user presses the steer right button on digital input (e.g. keyboard) this value goes immediatelly to -1.0
                /// 
                /// About: Throttle
                /// If the user presses the forward button on digital input (e.g. keyboard) this value goes immediatelly to 1.0
                /// 
                /// About: Brake
                /// If the user presses the brake  button on digital input (e.g. keyboard) this value goes immediatelly to 1.0
                /// 
                /// About: Clutch
                /// If the user presses the clutch button on digital input (e.g. keyboard) this value goes immediatelly to 1.0

                /// <summary>
                ///     Steering received from input &lt;-1;1&gt;.
                /// </summary>
                /// <!----> **INFORMATION** <!---->
                /// Note that it is interpreted counterclockwise.
                /// 
                /// If the user presses the steer right button on digital input (e.g. keyboard) this value goes immediatelly to -1.0
                /// <!----> **INFORMATION** <!---->
                /// <seealso cref="Game.Steering" />
                public float Steering { get; internal set; }

                /// <summary>
                ///     Throttle received from input &lt;0;1&gt;.
                /// </summary>
                /// <!----> **INFORMATION** <!---->
                /// If the user presses the forward button on digital input (e.g. keyboard) this value goes immediatelly to 1.0
                /// <!----> **INFORMATION** <!---->
                /// <seealso cref="Game.Throttle" />
                public float Throttle { get; internal set; }

                /// <summary>
                ///     Brake received from input &lt;0;1&gt;.
                /// </summary>
                /// <!----> **INFORMATION** <!---->
                /// If the user presses the brake button on digital input (e.g. keyboard) this value goes immediatelly to 1.0
                /// <!----> **INFORMATION** <!---->
                /// <seealso cref="Game.Brake" />
                public float Brake { get; internal set; }

                /// <summary>
                ///     Clutch received from input &lt;0;1&gt;.
                /// </summary>
                /// <!----> **INFORMATION** <!---->
                /// If the user presses the clutch button on digital input (e.g. keyboard) this value goes immediatelly to 1.0
                /// <!----> **INFORMATION** <!---->
                /// <seealso cref="Game.Clutch" />
                public float Clutch { get; internal set; }
            }

            /// <summary>
            ///     value used by the game
            /// </summary>
            public class Game {
                /// About: Steer
                /// Note that it is interpreted counterclockwise.
                /// 
                /// Accounts for interpolation speeds and simulated counterforces for digital inputs
                /// 
                /// About: Throttle
                /// Accounts for the press attack curve for digital inputs or cruise-control input.
                /// 
                /// About: Brake
                /// Accounts for the press attack curve for digital inputs. Does not contain retarder, parking or motor brake.
                /// 
                /// About: Clutch
                /// Accounts for the automatic shifting or interpolation of player input.

                /// <summary>
                ///     Steering as used by the simulation &lt;-1;1&gt;
                /// </summary>
                /// <!----> **INFORMATION** <!---->
                /// Note that it is interpreted counterclockwise.
                /// 
                /// Accounts for interpolation speeds and simulated counterforces for digital inputs
                /// <!----> **INFORMATION** <!---->
                /// ///
                /// <seealso cref="Input.Steering" />
                public float Steering { get; internal set; }

                /// <summary>
                ///     Throttle pedal input as used by the simulation &lt;0;1&gt;.
                /// </summary>
                /// <!----> **INFORMATION** <!---->
                /// Accounts for the press attack curve for digital inputs or cruise-control input.
                /// <!----> **INFORMATION** <!---->
                /// <seealso cref="Input.Throttle" />
                public float Throttle { get; internal set; }

                /// <summary>
                ///     Brake pedal input as used by the simulation &lt;0;1&gt;.
                /// </summary>
                /// <!----> **INFORMATION** <!---->
                /// Accounts for the press attack curve for digital inputs. Does not contain retarder, parking or motor brake.
                /// <!----> **INFORMATION** <!---->
                /// <seealso cref="Input.Brake" />
                public float Brake { get; internal set; }

                /// <summary>
                ///     Clutch pedal input as used by the simulation &lt;0;1&gt;.
                /// </summary>
                /// <!----> **INFORMATION** <!---->
                /// Accounts for the automatic shifting or interpolation of player input.
                /// <!----> **INFORMATION** <!---->
                /// <seealso cref="Input.Clutch" />
                public float Clutch { get; internal set; }
            }
        }
    }
}