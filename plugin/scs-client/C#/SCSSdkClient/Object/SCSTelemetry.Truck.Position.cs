#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Position of the Cabin, head and hook
        /// </summary>
        public class PositionData {
            /// <summary>
            ///     Initialise a positionData object
            /// </summary>
            public PositionData() {
                Cabin = new FVector();
                Head = new FVector();
                Hook = new FVector();
                HeadOffset = new FPlacement();
                CabinOffset = new FPlacement();
                TruckPosition = new DPlacement();
            }

            /// About: Cabin
            /// This is position of the joint around which the cabin rotates.
            /// This attribute might be not present if the vehicle does not
            /// have a separate cabin.
            
            /// About: HeadOffset
            /// Note that this value might change rapidly as result of
            /// the user switching between cameras or camera presets.
             
            /// <summary>
            ///     Position of the cabin in the vehicle space.
            /// </summary>
            /// <!----> **INFORMATION** <!---->
            /// This is position of the joint around which the cabin rotates.
            /// This attribute might be not present if the vehicle does not
            /// have a separate cabin.
            /// <!----> **INFORMATION** <!---->
            public FVector Cabin { get; internal set; }

            /// <summary>
            ///     Default position of the head in the cabin space
            /// </summary>
            public FVector Head { get; internal set; }

            /// <summary>
            ///     Default position of the hook in vehicle space
            /// </summary>
            public FVector Hook { get; internal set; }

            /// <summary>
            ///     Represents a cabin space position and orientation delta
            ///     of the driver head from its default position.
            /// </summary>
            public FPlacement HeadOffset { get; internal set; }

            /// <summary>
            ///     Represents a vehicle space position and orientation delta
            ///     of the cabin from its default position.
            /// </summary>
            public FPlacement CabinOffset { get; internal set; }


            internal DPlacement TruckPosition { get; set; }

            /// <summary>
            ///     Position values for the Head in Cabin Space.
            ///     More interesting for the calculation head in world space.
            ///     <seealso cref="HeadPositionInWorldSpace" />
            /// </summary>
            public FVector HeadPositionInCabinSpace => Add(Head, HeadOffset.Position);

            /// <summary>
            ///     Head position in the Vehicle Space
            ///     <seealso cref="HeadPositionInWorldSpace" />
            /// </summary>
            public FVector HeadPositionInVehicleSpace =>
                Add(Add(Cabin, CabinOffset.Position), Rotate(CabinOffset.Orientation, HeadPositionInCabinSpace));

            /// <summary>
            ///     Head position in the World Space. Head is the Player models (viewable e.g. in camera perspective 2) head.
            /// </summary>
            public DVector HeadPositionInWorldSpace => Add(TruckPosition.Position,
                                                           Rotate(TruckPosition.Orientation,
                                                                  HeadPositionInVehicleSpace));

            /// <summary>
            ///     At The MOMENT ONLY A TEST
            ///     Position values of the Cabin in world space
            /// </summary>
            public DVector CabinPositionInWorlSpace =>
                Add(TruckPosition.Position, Rotate(TruckPosition.Orientation, Cabin));

            /// <summary>
            ///     AT THE MOMENT ONLY A TEST
            ///     Hook position of the truck in world space
            /// </summary>
            public DVector HookPositionInWorldSpace =>
                Add(TruckPosition.Position, Rotate(TruckPosition.Orientation, Hook));
        }
    }
}