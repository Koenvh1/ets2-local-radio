#pragma warning disable 1570

namespace SCSSdkClient.Object {
    public partial class SCSTelemetry {
        /// <summary>
        ///     Represented a Version with Major and Minor
        /// </summary>
        public class Version {
            /// <summary>
            ///     Major part of the version information
            /// </summary>
            public uint Major { get; internal set; }

            /// <summary>
            ///     Minor part of the version information
            /// </summary>
            public uint Minor { get; internal set; }

            /// <summary>
            ///     Create a String with the from  "Version: X.Y"
            /// </summary>
            /// <returns>
            ///     String with Version Information
            /// </returns>
            public override string ToString() => $"Version: {Major}.{Minor}";
        }
    }
}