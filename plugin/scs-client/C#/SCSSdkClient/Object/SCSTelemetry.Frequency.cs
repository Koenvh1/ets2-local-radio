using System;

#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Like Time object represent minutes and DateTime object, but represent more a timespan positive or negative
        /// </summary>
        public class Frequency {
            public Frequency(int i) => Value = i;

            public Frequency() { }

            /// <summary>
            ///     Represented in number of in-game minutes
            /// </summary>
            public int Value { get; internal set; }

            /// <summary>
            ///     Represented in data of in-game minutes
            /// </summary>
            public DateTime Date => MinutesToDate(Value);

            public static implicit operator Frequency(int i) => new Frequency(i);
        }
    }
}