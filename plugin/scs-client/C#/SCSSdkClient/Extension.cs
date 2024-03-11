using System;

namespace SCSSdkClient {
    /// <summary>
    ///     Some useful extensions
    /// </summary>
    public static class Extension {
        /// <summary>
        ///     Converts an uint to an given enum type
        /// </summary>
        /// <param name="enumInt">uint to convert</param>
        /// <typeparam name="T">Type of the enum</typeparam>
        /// <returns>uint as enum</returns>
        public static T ToEnum<T>(this uint enumInt) => (T) Enum.ToObject(typeof(T), enumInt);

        /// <summary>
        ///     Converts an string to an given enum type.
        ///     If string conversion not work, give 0 as the given enum back
        /// </summary>
        /// <typeparam name="T">string to convert</typeparam>
        /// <param name="enumString">type of the enum</param>
        /// <returns>string as enum</returns>
        public static T ToEnum<T>(this string enumString) where T : struct =>
            Enum.TryParse(enumString, true, out T result) ? result : 0u.ToEnum<T>();

        /// <summary>
        ///     A string formatter for an nested datatype
        /// </summary>
        /// <param name="choob"></param>
        /// <returns></returns>
        public static string StringFormater(this string choob) {
            var result = "";
            for (var index = 0; index < choob.Length; index++) {
                var cha = choob[index];
                result += cha;
                if (cha != '\n') {
                    continue;
                }


                while (cha == '\n' || cha == '\t') {
                    index++;
                    cha = choob[index];
                    if (cha == '\n' || cha == '\t') {
                        result += cha;
                    } else {
                        result += '\t';
                        result += cha;
                    }
                }
            }

            return result;
        }
    }
}