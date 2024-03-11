using System;

#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Represent a time object with time in minutes and a DateTime object
        /// </summary>
        public class Time {
            public Time(uint i) => Value = i;

            public Time() { }

            /// <summary>
            ///     Represented in number of in-game minutes
            /// </summary>
            public uint Value { get; internal set; }

            /// <summary>
            ///     Represented in data of in-game minutes
            /// </summary>
            public DateTime Date => MinutesToDate(Value);

            public static implicit operator Time(uint i) => new Time(i);

            public static Time operator -(Time a, Time b) => new Time(a.Value - b.Value);
        }
    }
}