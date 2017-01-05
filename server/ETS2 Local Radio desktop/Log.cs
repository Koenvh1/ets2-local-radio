using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ETS2_Local_Radio_server
{
    static class Log
    {
        public static void Write(String lines)
        {

            // Write the string to a file.append mode is enabled so that the log
            // lines get appended to Error log.txt rather than wiping content and writing the log
            try
            {
                System.IO.StreamWriter file =
                    new System.IO.StreamWriter(Directory.GetCurrentDirectory() + "\\Error log.txt", true);
                file.WriteLine(lines);
                file.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Something went wrong when writing to the log file: \n" + ex.Message);
            }
        }

        public static void Clear()
        {
            try
            {
                System.IO.StreamWriter file = new System.IO.StreamWriter(Directory.GetCurrentDirectory() + "\\Error log.txt");
                file.Write("");
                file.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Something went wrong when writing to the log file: \n" + ex.Message);
            }
        }
    }
}
