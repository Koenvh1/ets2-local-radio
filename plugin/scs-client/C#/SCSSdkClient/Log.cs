#if LOGGING
using System;
using System.IO;
using System.Text;

namespace SCSSdkClient {
    public static class Log {
        private static string path = "logfile.log";
        private static StreamWriter sw = null;

        public static void Write(string content){
            if(sw == null){
                sw = new StreamWriter(path, true, Encoding.Unicode);
                sw.WriteLine();
                sw.WriteLine("Start new LogDay: "+DateTime.Now);
            }

            sw.WriteLine(DateTime.Now + ": " + content);
        }

        public static void SaveShutdown() {
            sw.Flush();
            sw.Close();
            sw.Dispose();
        }
    }
}


#endif