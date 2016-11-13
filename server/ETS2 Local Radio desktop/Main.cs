using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Windows.Forms;
using Ets2SdkClient;
using Gma.System.MouseKeyHook;

namespace ETS2_Local_Radio_server
{
    public partial class Main : Form
    {
        public Ets2SdkTelemetry Telemetry;

        public SimpleHTTPServer myServer;

        private IKeyboardMouseEvents m_GlobalHook;

        public int amount = 0;

        public static Coordinates coordinates;

        public static object ets2data;
        public static Commands commandsData;

        public Main()
        {
            InitializeComponent();
        }

        private void Main_Load(object sender, EventArgs e)
        {
            //Global keyboard hook logic by https://github.com/gmamaladze/globalmousekeyhook/blob/vNext/Demo/Main.cs
            Subscribe();

            AddException();

            nextKeyTextBox.Text = ConfigurationManager.AppSettings["NextKey"];
            previousKeyTextBox.Text = ConfigurationManager.AppSettings["PreviousKey"];
            stopKeyTextBox.Text = ConfigurationManager.AppSettings["StopKey"];
            volumeUpKeyTextBox.Text = ConfigurationManager.AppSettings["VolumeUpKey"];
            volumeDownKeyTextBox.Text = ConfigurationManager.AppSettings["VolumeDownKey"];
            URLLabel.Text = ConfigurationManager.AppSettings["BaseURL"];

            if (ConfigurationManager.AppSettings["BaseURL"].StartsWith("http://") == false)
            {
                ConfigurationManager.AppSettings["BaseURL"] = "http://localhost:8330";
            }


            Telemetry = new Ets2SdkTelemetry();
            Telemetry.Data += Telemetry_Data;

            if (Telemetry.Error != null)
            {
                MessageBox.Show(
                    "General info:\r\nFailed to open memory map " + Telemetry.Map +
                        " - on some systems you need to run the client (this app) with elevated permissions, because e.g. you're running Steam/ETS2 with elevated permissions as well. .NET reported the following Exception:\r\n" +
                        Telemetry.Error.Message + "\r\n\r\nStacktrace:\r\n" + Telemetry.Error.StackTrace);
            }

            myServer = new SimpleHTTPServer(Directory.GetCurrentDirectory() + "\\web", Int32.Parse(ConfigurationManager.AppSettings["Port"]));
            writeFile("none", 0, "0");

            //Overlay overlay = new Overlay();
            //overlay.Show();
        }

        private void Telemetry_Data(Ets2Telemetry data, bool updated)
        {
            try
            {
                if (this.InvokeRequired)
                {
                    this.Invoke(new TelemetryData(Telemetry_Data), new object[2] { data, updated });
                    return;
                }
                ets2data = data;
                coordinates = new Coordinates(data.Physics.CoordinateX, data.Physics.CoordinateY, data.Physics.CoordinateZ);
                locationLabel.Text = coordinates.X + "; " + coordinates.Y + "; " + coordinates.Z;

                if (data.Version.Ets2Major == 0)
                {
                    statusLabel.Text = "Simulator not yet running";
                    statusLabel.ForeColor = Color.Red;
                }
                else if (data.Time == 0)
                {
                    statusLabel.Text = "Simulator running, let's get driving!";
                    statusLabel.ForeColor = Color.DarkOrange;
                }
                else
                {
                    statusLabel.Text = "Simulator running!";
                    statusLabel.ForeColor = Color.DarkGreen;
                }
            }
            catch
            {
            }
        }

        private static void DeleteException()
        {
            Process netsh = new Process();
            string arguments = "advfirewall firewall delete rule name=\"ETS2 Local Radio\" dir=in protocol=TCP localport=" + ConfigurationManager.AppSettings["Port"];
            netsh.StartInfo.FileName = "netsh";
            netsh.StartInfo.Arguments = arguments;
            netsh.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
            netsh.Start();
        }

        private static void AddException()
        {
            DeleteException();
            // to prevent duplicates

            Process netsh = new Process();
            string arguments = "advfirewall firewall add rule name=\"MyApp\" dir=in action=allow protocol=TCP localport=" + ConfigurationManager.AppSettings["Port"];
            netsh.StartInfo.FileName = "netsh";
            netsh.StartInfo.Arguments = arguments;
            netsh.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
            netsh.Start();
        }

        private void Main_FormClosing(object sender, EventArgs e)
        {
            try
            {
                //Global keyboard hook logic by https://github.com/gmamaladze/globalmousekeyhook/blob/vNext/Demo/Main.cs
                Unsubscribe();
                myServer.Stop();
                writeFile("none", 0, "0");
                DeleteException();
                Application.Exit();
            }
            catch (Exception ex)
            {

            }
        }

        public void Subscribe()
        {
            // Note: for the application hook, use the Hook.AppEvents() instead
            m_GlobalHook = Hook.GlobalEvents();

            m_GlobalHook.KeyDown += GlobalHookKeyDown;
        }

        private void GlobalHookKeyDown(object sender, KeyEventArgs e)
        {
            try
            {
                if (e.KeyCode == (Keys)Enum.Parse(typeof(Keys), ConfigurationManager.AppSettings["PreviousKey"], true))
                {
                    Console.WriteLine("Fired event PreviousKey");
                    keyTimeout.Stop();
                    amount--;
                    keyTimeout.Start();
                }

                if (e.KeyCode == (Keys)Enum.Parse(typeof(Keys), ConfigurationManager.AppSettings["NextKey"], true))
                {
                    Console.WriteLine("Fired event NextKey");
                    keyTimeout.Stop();
                    amount++;
                    keyTimeout.Start();
                }
                if (e.KeyCode == (Keys)Enum.Parse(typeof(Keys), ConfigurationManager.AppSettings["StopKey"], true))
                {
                    Console.WriteLine("Fired event StopKey");

                    writeFile("stop", 0);
                }
                if (e.KeyCode == (Keys)Enum.Parse(typeof(Keys), ConfigurationManager.AppSettings["VolumeUpKey"], true))
                {
                    Console.WriteLine("Fired event VolumeUpKey");

                    writeFile("volume", 5);
                }
                if (e.KeyCode == (Keys)Enum.Parse(typeof(Keys), ConfigurationManager.AppSettings["VolumeDownKey"], true))
                {
                    Console.WriteLine("Fired event VolumeDownKey");

                    writeFile("volume", -5);
                }
            }
            catch (Exception ex)
            {
                //MessageBox.Show(ex.ToString());
            }
        }

        public void Unsubscribe()
        {
            m_GlobalHook.KeyDown -= GlobalHookKeyDown;

            //It is recommened to dispose it
            m_GlobalHook.Dispose();
        }
        private void keyTimeout_Tick(object sender, EventArgs e)
        {
            keyTimeout.Stop();
            writeFile("next", amount);
            amount = 0;
            Console.WriteLine(amount);
        }

        private void writeFile(string action, int amount, string id = null)
        {
            if (id == null)
            {
                id = Guid.NewGuid().ToString("n");
            }

            Commands command = new Commands(id, action, amount);
            commandsData = command;
            //StreamWriter streamWriter = new StreamWriter(ConfigurationManager.AppSettings["Folder"] + "\\commands.json");
            //streamWriter.WriteLine(json);
            //streamWriter.Close();
        }
        private void saveButton_Click(object sender, EventArgs e)
        {
            SaveAppSettings("NextKey", nextKeyTextBox.Text);
            SaveAppSettings("PreviousKey", previousKeyTextBox.Text);
            SaveAppSettings("StopKey", stopKeyTextBox.Text);
            SaveAppSettings("VolumeUpKey", volumeUpKeyTextBox.Text);
            SaveAppSettings("VolumeDownKey", volumeDownKeyTextBox.Text);
        }

        static void SaveAppSettings(string key, string value)
        {
            try
            {
                var configFile = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
                var settings = configFile.AppSettings.Settings;
                if (settings[key] == null)
                {
                    settings.Add(key, value);
                }
                else
                {
                    settings[key].Value = value;
                }
                configFile.Save(ConfigurationSaveMode.Modified);
                ConfigurationManager.RefreshSection(configFile.AppSettings.SectionInformation.Name);
                Console.WriteLine(configFile.FilePath);
            }
            catch (ConfigurationErrorsException)
            {
                Console.WriteLine("Error writing app settings");
            }
        }

        private void nextKeyTextBox_KeyDown(object sender, KeyEventArgs e)
        {
            e.Handled = true;
            e.SuppressKeyPress = true;
            nextKeyTextBox.Text = e.KeyCode.ToString();
        }
        private void previousKeyTextBox_KeyDown(object sender, KeyEventArgs e)
        {
            e.Handled = true;
            e.SuppressKeyPress = true;
            previousKeyTextBox.Text = e.KeyCode.ToString();
        }
        private void stopKeyTextBox_KeyDown(object sender, KeyEventArgs e)
        {
            e.Handled = true;
            e.SuppressKeyPress = true;
            stopKeyTextBox.Text = e.KeyCode.ToString();
        }
        private void volumeUpKeyTextBox_KeyDown(object sender, KeyEventArgs e)
        {
            e.Handled = true;
            e.SuppressKeyPress = true;
            volumeUpKeyTextBox.Text = e.KeyCode.ToString();
        }
        private void volumeDownKeyTextBox_KeyDown(object sender, KeyEventArgs e)
        {
            e.Handled = true;
            e.SuppressKeyPress = true;
            volumeDownKeyTextBox.Text = e.KeyCode.ToString();
        }

        private void URLLabel_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Process.Start(ConfigurationManager.AppSettings["BaseURL"]);
        }

        private void Koenvh_Click(object sender, EventArgs e)
        {
            Process.Start("http://koenvh.nl");
        }
    }
}
