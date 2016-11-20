using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ETS2_Local_Radio_server
{
    public partial class Setup : Form
    {
        public Setup()
        {
            InitializeComponent();
        }

        private void Setup_Load(object sender, EventArgs e)
        {
            //MessageBox.Show("Please select the Euro Truck Simulator 2 installation folder");
            if (ets2Dialog.ShowDialog() == DialogResult.OK)
            {
                try
                {
                    string folder = ets2Dialog.SelectedPath;
                    Directory.CreateDirectory(folder + @"\bin\win_x86\plugins");
                    Directory.CreateDirectory(folder + @"\bin\win_x64\plugins");

                    File.Copy(Directory.GetCurrentDirectory() + @"\plugins\bin\win_x86\plugins\ets2-telemetry.dll",
                        folder + @"\bin\win_x86\plugins\ets2-telemetry.dll", true);
                    File.Copy(Directory.GetCurrentDirectory() + @"\plugins\bin\win_x64\plugins\ets2-telemetry.dll",
                        folder + @"\bin\win_x64\plugins\ets2-telemetry.dll", true);

                    Main.SaveAppSettings("Ets2Folder", folder);

                    Close();
                }
                catch (Exception ex)
                {
                    logLabel.Text = ex.Message;
                    Activate();
                }
            }
            else
            {
                Close();
            }
        }
    }
}
