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

        private void installButton_Click(object sender, EventArgs e)
        {
            try
            {
                //if (ets2folderDialog.ShowDialog() == DialogResult.OK)
                //{
                //    File.Copy(Directory.GetCurrentDirectory() + "\\plugins\\win_x64\\ets2-telemetry.dll", ets2folderDialog.SelectedPath + "\\bin\\win_x64\\ets2-telemetry.dll");
                //    File.Copy(Directory.GetCurrentDirectory() + "\\plugins\\win_x86\\ets2-telemetry.dll", ets2folderDialog.SelectedPath + "\\bin\\win_x86\\ets2-telemetry.dll");
                //}
                ProcessStartInfo cmd = new ProcessStartInfo("cmd.exe");
                cmd.UseShellExecute = true;
                cmd.CreateNoWindow = true;
                cmd.Arguments = "netsh http add urlacl url=http://+:8330/ user=Everyone listen=yes";
                cmd.Verb = "runas";
                Process.Start(cmd);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void Setup_Load(object sender, EventArgs e)
        {
            if (Boolean.Parse(ConfigurationManager.AppSettings["Setup"]) == true)
            {
                Main main = new Main();
                main.Show();
                Hide();
            }
        }

        private void skipButton_Click(object sender, EventArgs e)
        {
            Main main = new Main();
            main.Show();
            Hide();
        }
    }
}
