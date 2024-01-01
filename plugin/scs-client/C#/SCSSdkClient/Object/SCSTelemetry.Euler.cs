#pragma warning disable 1570

namespace SCSSdkClient.Object{
    public partial class SCSTelemetry {
        /// <summary>
        ///  Orientation of object.
        /// </summary>
        public class Euler{
            /// About: Heading
            /// Stored in unit range where <0,1) corresponds to <0,360).
            /// The angle is measured counterclockwise in horizontal plane when looking
            /// from top where 0 corresponds to forward(north), 0.25 to left(west),
            /// 0.5 to backward(south) and 0.75 to right(east).
            ///
            /// About: Pitch
            /// Stored in unit range where <-0.25,0.25> corresponds to <-90,90>.
            /// The pitch angle is zero when in horizontal direction,
            /// with positive values pointing up(0.25 directly to zenith),
            /// and negative values pointing down(-0.25 directly to nadir).
            ///
            /// About: Roll
            /// Stored in unit range where <-0.5,0.5> corresponds to <-180,180>.
            /// The angle is measured in counterclockwise when looking in direction of
            /// the roll axis.

            /// <summary>
            /// Heading
            /// </summary>
            ///
            /// <!----> **INFORMATION** <!---->
            /// Stored in unit range where <0,1) corresponds to <0,360).
            /// The angle is measured counterclockwise in horizontal plane when looking
            /// from top where 0 corresponds to forward(north), 0.25 to left(west),
            /// 0.5 to backward(south) and 0.75 to right(east).
            /// <!----> **INFORMATION** <!---->
            public float Heading { get; internal set; }

            /// <summary>
            /// Pitch
            /// </summary>
            ///
            /// <!----> **INFORMATION** <!---->
            /// Stored in unit range where <-0.25,0.25> corresponds to <-90,90>.
            /// The pitch angle is zero when in horizontal direction,
            /// with positive values pointing up(0.25 directly to zenith),
            /// and negative values pointing down(-0.25 directly to nadir).
            /// <!----> **INFORMATION** <!---->
            public float Pitch { get; internal set; }

            /// <summary>
            /// Roll
            /// </summary>
            ///
            /// <!----> **INFORMATION** <!---->
            /// Stored in unit range where <-0.5,0.5> corresponds to <-180,180>.
            /// The angle is measured in counterclockwise when looking in direction of
            /// the roll axis.
            /// <!----> **INFORMATION** <!---->
            public float Roll { get; internal set; }
        }
    }
}