using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETS2_Local_Radio_server
{
    static class Log
    {
        public static void Write(String lines)
        {

            // Write the string to a file.append mode is enabled so that the log
            // lines get appended to Error log.txt than wiping content and writing the log

            System.IO.StreamWriter file = new System.IO.StreamWriter(Directory.GetCurrentDirectory() + "\\Error log.txt", true);
            file.WriteLine(lines);
            file.Close();
        }
    }
}
