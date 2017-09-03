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
using System.Net.Sockets;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Forms;
using Ets2SdkClient;
using ETS2_Local_Radio_server.Properties;
using Gma.System.MouseKeyHook;
using Microsoft.Win32;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ETS2_Local_Radio_server
{
    public partial class Main : Form
    {
        public Ets2SdkTelemetry Telemetry;

        public SimpleHTTPServer myServer;

        private IKeyboardMouseEvents m_GlobalHook;
        private SimpleJoystick joystick;
        private bool[] previousState;

        public int amount = 0;

        public static Coordinates coordinates;

        public static object ets2data;
        public static Commands commandsData;

        public static string simulatorNotRunning = "Simulator not yet running";
        public static string simulatorNotDriving = "Simulator running, let's get driving!";
        public static string simulatorRunning = "Simulator running!";

        public static string installOverlay =
            "Do you want to install the in-game overlay?\n(This will overwrite an already existing d3d9.dll, and it may in rare cases cause the game to crash when exiting the game)";

        public static string removeOverlay =
            "Do you want to remove the in-game overlay?\n(This will remove any existing d3d9.dll)";

        public static string currentGame = "ets2";

        public Main()
        {
            InitializeComponent();
        }

        private void Main_Load(object sender, EventArgs e)
        {
            Log.Clear();
            Settings.Load();

            //Global keyboard hook logic by https://github.com/gmamaladze/globalmousekeyhook/blob/vNext/Demo/Main.cs
            Subscribe();

            //Add Firewall exception
            AddException();

            //Load languages to combobox:
            LoadLanguages();

            //Check plugins:
            CheckPlugins();

            //Load the keys:
            nextKeyTextBox.Text = Settings.NextKey;
            previousKeyTextBox.Text = Settings.PreviousKey;
            stopKeyTextBox.Text = Settings.StopKey;
            volumeUpKeyTextBox.Text = Settings.VolumeUpKey;
            volumeDownKeyTextBox.Text = Settings.VolumeDownKey;
            makeFavouriteKeyTextbox.Text = Settings.MakeFavouriteKey;
            goToFavouriteKeyTextbox.Text = Settings.GoToFavouriteKey;

            nextButtonTextBox.Text = Settings.NextButton;
            previousButtonTextBox.Text = Settings.PreviousButton;
            stopButtonTextBox.Text = Settings.StopButton;
            volumeUpButtonTextBox.Text = Settings.VolumeUpButton;
            volumeDownButtonTextBox.Text = Settings.VolumeDownButton;
            makeFavouriteButtonTextbox.Text = Settings.MakeFavouriteButton;
            goToFavouriteButtonTextbox.Text = Settings.GoToFavouriteButton;

            comboController.SelectedText = Settings.Controller;

            //Load favourites
            Favourites.Load();

            //Start telemetry grabbing:
            Telemetry = new Ets2SdkTelemetry(250);
            Telemetry.Data += Telemetry_Data;

            if (Telemetry.Error != null)
            {
                MessageBox.Show(
                    "General info:\r\nFailed to open memory map " + Telemetry.Map +
                        " - on some systems you need to run the client (this app) with elevated permissions, because e.g. you're running Steam/ETS2 with elevated permissions as well. .NET reported the following Exception:\r\n" +
                        Telemetry.Error.Message + "\r\n\r\nStacktrace:\r\n" + Telemetry.Error.StackTrace);
            }

            //Open server:
            myServer = new SimpleHTTPServer(Directory.GetCurrentDirectory() + "\\web", Settings.Port);
            writeFile("none", "0", "0");

            //Load IP addresses:
            LoadAddresses();

            if (AttachJoystick())
            {
                foreach (var item in joystick.AvailableDevices)
                {
                    comboController.Items.Add(item.InstanceName);
                }
            }
            AttachJoystick();

            currentGameTimer.Start();

            //Add handlers:
            nextKeyTextBox.KeyDown += keyInput;
            previousKeyTextBox.KeyDown += keyInput;
            stopKeyTextBox.KeyDown += keyInput;
            volumeUpKeyTextBox.KeyDown += keyInput;
            volumeDownKeyTextBox.KeyDown += keyInput;
            makeFavouriteKeyTextbox.KeyDown += keyInput;
            goToFavouriteKeyTextbox.KeyDown += keyInput;

            //Remove key binding:
            nextKeyTextBox.KeyDown += removeBinding;
            previousKeyTextBox.KeyDown += removeBinding;
            stopKeyTextBox.KeyDown += removeBinding;
            volumeUpKeyTextBox.KeyDown += removeBinding;
            volumeDownKeyTextBox.KeyDown += removeBinding;
            makeFavouriteKeyTextbox.KeyDown += removeBinding;
            goToFavouriteKeyTextbox.KeyDown += removeBinding;

            nextButtonTextBox.KeyDown += removeBinding;
            previousButtonTextBox.KeyDown += removeBinding;
            stopButtonTextBox.KeyDown += removeBinding;
            volumeUpButtonTextBox.KeyDown += removeBinding;
            volumeDownButtonTextBox.KeyDown += removeBinding;
            makeFavouriteButtonTextbox.KeyDown += removeBinding;
            goToFavouriteButtonTextbox.KeyDown += removeBinding;
        }

        private void LoadLanguages()
        {
            try
            {
                if (!Directory.Exists(Directory.GetCurrentDirectory() + "\\web\\lang"))
                {
                    throw new Exception("\\web\\lang directory not found");
                }
                foreach (string file in Directory.GetFiles(Directory.GetCurrentDirectory() + "\\web\\lang"))
                {
                    if (file.EndsWith(".json"))
                    {
                        comboLang.Items.Add(Path.GetFileNameWithoutExtension(file));
                    }
                }
                comboLang.Text = Settings.Language;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        private void CheckPlugins()
        {
            if (PluginExists("ats"))
            {
                installAtsButton.Image = Resources.check;
            }
            else
            {
                installAtsButton.Image = null;
            }
            if (PluginExists("ets2"))
            {
                installEts2Button.Image = Resources.check;
            }
            else
            {
                installEts2Button.Image = null;
            }
            if (!PluginExists("ats") && !PluginExists("ets2"))
            {
                groupInfo.Enabled = false;
                groupSettings.Enabled = false;
            }
            else
            {
                groupInfo.Enabled = true;
                groupSettings.Enabled = true;
            }
        }

        private bool PluginExists(string game)
        {
            string folder = "";
            if (game == "ets2")
            {
                folder = Settings.Ets2Folder;
            }
            if (game == "ats")
            {
                folder = Settings.AtsFolder;
            }
            try
            {
                if (folder != null)
                {
                    if (Directory.Exists(folder + @"\bin\win_x86\plugins") &&
                        Directory.Exists(folder + @"\bin\win_x64\plugins"))
                    {
                        if (
                            File.Exists(folder + @"\bin\win_x86\plugins\ets2-telemetry.dll") &&
                            File.Exists(folder + @"\bin\win_x64\plugins\ets2-telemetry.dll"))
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
                return false;
            }
        }

        private bool ChooseFolder(string game)
        {
            if (folderDialog.ShowDialog() == DialogResult.OK)
            {
                try
                {
                    DialogResult result = MessageBox.Show(installOverlay, "ETS2 Local Radio server",
                        MessageBoxButtons.YesNoCancel,
                        MessageBoxIcon.Question);

                    if (result != DialogResult.Cancel)
                    {
                        string folder = folderDialog.SelectedPath;
                        Directory.CreateDirectory(folder + @"\bin\win_x86\plugins");
                        Directory.CreateDirectory(folder + @"\bin\win_x64\plugins");

                        File.Copy(Directory.GetCurrentDirectory() + @"\plugins\bin\win_x86\plugins\ets2-telemetry.dll",
                            folder + @"\bin\win_x86\plugins\ets2-telemetry.dll", true);
                        File.Copy(Directory.GetCurrentDirectory() + @"\plugins\bin\win_x64\plugins\ets2-telemetry.dll",
                            folder + @"\bin\win_x64\plugins\ets2-telemetry.dll", true);
                        if (result == DialogResult.Yes)
                        {
                            File.Copy(Directory.GetCurrentDirectory() + @"\plugins\bin\win_x86\d3d9.dll",
                                folder + @"\bin\win_x86\d3d9.dll", true);
                            File.Copy(Directory.GetCurrentDirectory() + @"\plugins\bin\win_x64\d3d9.dll",
                                folder + @"\bin\win_x64\d3d9.dll", true);
                        }

                        if (game == "ets2")
                        {
                            Settings.Ets2Folder = folder;
                        }
                        if (game == "ats")
                        {
                            Settings.AtsFolder = folder;
                        }

                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message);
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        private void LoadAddresses()
        {
            IPHostEntry host;
            host = Dns.GetHostEntry(Dns.GetHostName());
            foreach (IPAddress ip in host.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    comboIP.Items.Add("http://" + ip.ToString() + ":" + Settings.Port);
                }
            }
            comboIP.SelectedIndex = 0;
        }

        private bool AttachJoystick()
        {
            try
            {
                //Initialise joystick:
                string name = null;
                if (Settings.Controller != null)
                {
                    name = Settings.Controller;
                }
                joystick = new SimpleJoystick(name);

                //Start joystick input timer:
                joystickTimer.Start();
                return true;
            }
            catch (Exception ex)
            {
                Log.Write(ex.ToString());
                return false;
            }
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
                    statusLabel.Text = simulatorNotRunning;
                    statusLabel.ForeColor = Color.Red;
                }
                else if (data.Time == 0)
                {
                    statusLabel.Text = simulatorNotDriving;
                    statusLabel.ForeColor = Color.DarkOrange;
                }
                else
                {
                    statusLabel.Text = simulatorRunning;
                    statusLabel.ForeColor = Color.DarkGreen;
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex.ToString());
            }
        }

        private static void DeleteException()
        {
            Process netsh = new Process();
            string arguments = "advfirewall firewall delete rule name=\"ETS2 Local Radio\" dir=in protocol=TCP localport=" + Settings.Port;
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
            string arguments = "advfirewall firewall add rule name=\"ETS2 Local Radio\" dir=in action=allow protocol=TCP localport=" + Settings.Port;
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
                Settings.Save();
                Unsubscribe();
                myServer.Stop();
                writeFile("none", "0", "0");
                DeleteException();
                joystickTimer.Stop();
                joystick.Release();
            }
            catch (Exception ex)
            {
                Log.Write(ex.ToString());
            }
            finally
            {
                Application.Exit();
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
                if (Settings.PreviousKey != "" && e.KeyCode == (Keys)Enum.Parse(typeof(Keys), Settings.PreviousKey, true))
                {
                    Console.WriteLine("Fired event PreviousKey");
                    keyTimeout.Stop();
                    amount--;
                    keyTimeout.Start();
                }

                if (Settings.NextKey != "" && e.KeyCode == (Keys)Enum.Parse(typeof(Keys), Settings.NextKey, true))
                {
                    Console.WriteLine("Fired event NextKey");
                    keyTimeout.Stop();
                    amount++;
                    keyTimeout.Start();
                }
                if (Settings.StopKey != "" && e.KeyCode == (Keys)Enum.Parse(typeof(Keys), Settings.StopKey, true))
                {
                    Console.WriteLine("Fired event StopKey");

                    writeFile("stop", "0");
                }
                if (Settings.VolumeUpKey != "" && e.KeyCode == (Keys)Enum.Parse(typeof(Keys), Settings.VolumeUpKey, true))
                {
                    Console.WriteLine("Fired event VolumeUpKey");

                    writeFile("volume", "5");
                }
                if (Settings.VolumeDownKey != "" && e.KeyCode == (Keys)Enum.Parse(typeof(Keys), Settings.VolumeDownKey, true))
                {
                    Console.WriteLine("Fired event VolumeDownKey");

                    writeFile("volume", "-5");
                }
                if (Settings.MakeFavouriteKey != "" && e.KeyCode == (Keys)Enum.Parse(typeof(Keys), Settings.MakeFavouriteKey, true))
                {
                    Console.WriteLine("Fired event MakeFavouriteKey");

                    writeFile("favourite", "0");
                }
                if (Settings.GoToFavouriteKey != "" && e.KeyCode == (Keys)Enum.Parse(typeof(Keys), Settings.GoToFavouriteKey, true))
                {
                    Console.WriteLine("Fired event GoToFavouriteKey");

                    writeFile("goToFavourite", "0");
                }
            }
            catch (Exception ex)
            {
                Log.Write(ex.ToString());
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
            writeFile("next", amount.ToString());
            amount = 0;
            Console.WriteLine(amount);
        }

        private void writeFile(string action, string amount, string id = null)
        {
            if (id == null)
            {
                id = Guid.NewGuid().ToString("n");
            }

            Commands command = new Commands(id, action, amount, Settings.Language);
            commandsData = command;
        }
        private void saveButton_Click(object sender, EventArgs e)
        {
            Settings.NextKey = nextKeyTextBox.Text;
            Settings.PreviousKey = previousKeyTextBox.Text;
            Settings.StopKey = stopKeyTextBox.Text;
            Settings.VolumeUpKey = volumeUpKeyTextBox.Text;
            Settings.VolumeDownKey = volumeDownKeyTextBox.Text;
            Settings.MakeFavouriteKey = makeFavouriteKeyTextbox.Text;
            Settings.GoToFavouriteKey = goToFavouriteKeyTextbox.Text;

            Settings.NextButton = nextButtonTextBox.Text;
            Settings.PreviousButton = previousButtonTextBox.Text;
            Settings.StopButton = stopButtonTextBox.Text;
            Settings.VolumeUpButton = volumeUpButtonTextBox.Text;
            Settings.VolumeDownButton = volumeDownButtonTextBox.Text;
            Settings.MakeFavouriteButton = makeFavouriteButtonTextbox.Text;
            Settings.GoToFavouriteButton = goToFavouriteButtonTextbox.Text;

            Settings.Save();
        }

        /*
        public static void SaveAppSettings(string key, string value)
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
            catch (ConfigurationErrorsException ex)
            {
                Console.WriteLine("Error writing app settings");
                Log.Write(ex.ToString());
            }
        }
        */

        private void keyInput(object sender, KeyEventArgs e)
        {
            TextBox txtBox = (TextBox)sender;
            e.Handled = true;
            e.SuppressKeyPress = true;
            txtBox.Text = e.KeyCode.ToString();
        }
        private void removeBinding(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Delete || e.KeyCode == Keys.Escape || e.KeyCode == Keys.Back)
            {
                TextBox txtBox = (TextBox)sender;
                e.Handled = true;
                e.SuppressKeyPress = true;
                txtBox.Clear();
            }
        }

        private void URLLabel_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Process.Start(comboIP.SelectedItem.ToString());
        }

        private void Koenvh_Click(object sender, EventArgs e)
        {
            Process.Start("http://koenvh.nl");
        }

        private void comboLang_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                Language language = new Language(comboLang.SelectedItem.ToString());
                dynamic server = language.GetFile();

                groupInfo.Text = (server["info"] ?? groupInfo.Text);
                gameInfo.Text = (server["game"] ?? gameInfo.Text);
                statusInfo.Text = (server["status"] ?? statusInfo.Text);
                simulatorNotRunning = (server["simulator-not-running"] ?? simulatorNotRunning);
                simulatorNotDriving = (server["simulator-not-driving"] ?? simulatorNotDriving);
                simulatorRunning = (server["simulator-running"] ?? simulatorRunning);
                coordinatesInfo.Text = (server["coordinates"] ?? coordinatesInfo.Text);
                URLInfo.Text = (server["url"] ?? URLInfo.Text);
                URLLabel.Text = (server["open-local-radio"] ?? URLLabel.Text);
                groupSettings.Text = (server["settings"] ?? groupSettings.Text);
                keyLabel.Text = (server["keyboard"] ?? keyLabel.Text);
                buttonLabel.Text = (server["controller"] ?? buttonLabel.Text);
                nextKeyLabel.Text = (server["next-station-key"] ?? nextKeyLabel.Text);
                previousKeyLabel.Text = (server["previous-station-key"] ?? previousKeyLabel.Text);
                stopKeyLabel.Text = (server["stop-playback-key"] ?? stopKeyLabel.Text);
                volumeUpKeyLabel.Text = (server["volume-up-key"] ?? volumeUpKeyLabel.Text);
                volumeDownKeyLabel.Text = (server["volume-down-key"] ?? volumeDownKeyLabel.Text);
                makeFavouriteKeyLabel.Text = (server["make-favourite-key"] ?? makeFavouriteKeyLabel.Text);
                goToFavouriteKeyLabel.Text = (server["go-to-favourite-key"] ?? goToFavouriteKeyLabel.Text);
                saveButton.Text = (server["save"] ?? saveButton.Text);
                groupController.Text = (server["controller"] ?? groupController.Text);
                groupInstall.Text = (server["install"] ?? groupInstall.Text);
                installAtsButton.Text = (server["install-plugin-ats"] ?? installAtsButton.Text);
                installEts2Button.Text = (server["install-plugin-ets2"] ?? installEts2Button.Text);
                removePluginButton.Text = (server["remove-plugin"] ?? removePluginButton.Text);
                installOverlay = (server["install-overlay"] ?? installOverlay);
                removeOverlay = (server["remove-overlay"] ?? removeOverlay);
                folderDialog.Description = (server["ets2-folder-dialog"] ?? folderDialog.Description);
                Station.NowPlaying = (server["now-playing"] ?? Station.NowPlaying);

                Settings.Language = comboLang.SelectedItem.ToString();

                if(language.GetRTL())
                {
                    this.RightToLeft = RightToLeft.Yes;
                    this.RightToLeftLayout = true;
                    Station.RTL = true;
                } else
                {
                    this.RightToLeft = RightToLeft.No;
                    this.RightToLeftLayout = false;
                    Station.RTL = false;
                }

                writeFile("language", "0");
            }
            catch (Exception ex)
            {
                Console.Write(ex.ToString());
                MessageBox.Show(ex.Message);
            }
        }

        private void joystickTimer_Tick(object sender, EventArgs e)
        {
            if (joystick == null)
            {
                AttachJoystick();
                if (joystick == null)
                {
                    return;
                }
            }
            try
            {
                bool[] controllerInput = new bool[joystick.State.GetButtons().Length + 4]; // = joystick.State.GetButtons().Concat(joystick.State.GetPointOfViewControllers()).ToArray();
                joystick.State.GetButtons().CopyTo(controllerInput, 0);
                bool[] povState = new bool[4] { false, false, false, false };

                switch (joystick.State.GetPointOfViewControllers()[0])
                {
                    case 0:
                        povState[0] = true;
                        break;
                    case 9000:
                        povState[1] = true;
                        break;
                    case 18000:
                        povState[2] = true;
                        break;
                    case 27000:
                        povState[3] = true;
                        break;
                    default:
                        break;
                }
                povState.CopyTo(controllerInput, joystick.State.GetButtons().Length);

                for (int i = 0; i < controllerInput.Length; i++)
                {

                    if (controllerInput[i] == true && controllerInput[i] != previousState[i])
                    {
                        if (Settings.NextButton == i.ToString())
                        {
                            Console.WriteLine("Fired event NextButton");
                            keyTimeout.Stop();
                            amount++;
                            keyTimeout.Start();
                        }
                        if (Settings.PreviousButton == i.ToString())
                        {
                            Console.WriteLine("Fired event PreviousButton");
                            keyTimeout.Stop();
                            amount--;
                            keyTimeout.Start();
                        }
                        if (Settings.StopButton == i.ToString())
                        {
                            Console.WriteLine("Fired event StopButton");

                            writeFile("stop", "0");
                        }
                        if (Settings.VolumeUpButton == i.ToString())
                        {
                            Console.WriteLine("Fired event VolumeUpButton");

                            writeFile("volume", "5");
                        }
                        if (Settings.VolumeDownButton == i.ToString())
                        {
                            Console.WriteLine("Fired event VolumeDownButton");

                            writeFile("volume", "-5");
                        }
                        if (Settings.MakeFavouriteButton == i.ToString())
                        {
                            Console.WriteLine("Fired event MakeFavouriteButton");

                            writeFile("favourite", "0");
                        }
                        if (Settings.GoToFavouriteButton == i.ToString())
                        {
                            Console.WriteLine("Fired event GoToFavouriteButton");

                            writeFile("goToFavourite", "0");
                        }
                        if (nextButtonTextBox.Focused)
                        {
                            nextButtonTextBox.Text = i.ToString();
                        }
                        if (previousButtonTextBox.Focused)
                        {
                            previousButtonTextBox.Text = i.ToString();
                        }
                        if (stopButtonTextBox.Focused)
                        {
                            stopButtonTextBox.Text = i.ToString();
                        }
                        if (volumeUpButtonTextBox.Focused)
                        {
                            volumeUpButtonTextBox.Text = i.ToString();
                        }
                        if (volumeDownButtonTextBox.Focused)
                        {
                            volumeDownButtonTextBox.Text = i.ToString();
                        }
                        if (makeFavouriteButtonTextbox.Focused)
                        {
                            makeFavouriteButtonTextbox.Text = i.ToString();
                        }
                        if (goToFavouriteButtonTextbox.Focused)
                        {
                            goToFavouriteButtonTextbox.Text = i.ToString();
                        }
                    }
                }
                previousState = controllerInput;
            }
            catch (Exception)
            {
                //Log.Write(ex.ToString());
            }
        }

        private void currentGameTimer_Tick(object sender, EventArgs e)
        {
            if (currentGame != "ets2")
            {
                if (Process.GetProcessesByName("eurotrucks2").Length > 0)
                {
                    currentGame = "ets2";
                    gameLabel.Text = "Euro Truck Simulator 2";
                    writeFile("game", "0", "0");
                }
            }
            if (currentGame != "ats")
            {
                if (Process.GetProcessesByName("amtrucks").Length > 0)
                {
                    currentGame = "ats";
                    gameLabel.Text = "American Truck Simulator";
                    writeFile("game", "0", "0");
                }
            }
        }

        private void installAtsButton_Click(object sender, EventArgs e)
        {
            if (ChooseFolder("ats"))
            {
                installAtsButton.Image = Resources.check;
                groupInfo.Enabled = true;
                groupSettings.Enabled = true;
            }
        }

        private void installEts2Button_Click(object sender, EventArgs e)
        {
            if (ChooseFolder("ets2"))
            {
                installEts2Button.Image = Resources.check;
                groupInfo.Enabled = true;
                groupSettings.Enabled = true;
            }
        }

        private void comboController_SelectedIndexChanged(object sender, EventArgs e)
        {
            Settings.Controller = comboController.SelectedItem.ToString();

            AttachJoystick();
        }

        private void removePluginButton_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            try
            {
                DialogResult result = MessageBox.Show(removeOverlay, "ETS2 Local Radio server",
                    MessageBoxButtons.YesNoCancel,
                    MessageBoxIcon.Question);
                if (result != DialogResult.Cancel)
                {
                    if (folderDialog.ShowDialog() == DialogResult.OK)
                    {
                        var folder = folderDialog.SelectedPath;
                        File.Delete(folder + @"\bin\win_x86\plugins\ets2-telemetry.dll");
                        File.Delete(folder + @"\bin\win_x64\plugins\ets2-telemetry.dll");

                        if (result == DialogResult.Yes)
                        {
                            File.Delete(folder + @"\bin\win_x86\d3d9.dll");
                            File.Delete(folder + @"\bin\win_x64\d3d9.dll");
                        }
                    }
                }
                CheckPlugins();
            }
            catch (Exception ex)
            {
                Log.Write(ex.ToString());
                MessageBox.Show(ex.Message);
            }
        }
    }
}
