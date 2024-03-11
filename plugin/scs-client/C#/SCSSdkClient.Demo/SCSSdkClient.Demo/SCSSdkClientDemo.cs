using System;
using System.Drawing;
using System.Windows.Forms;
using Newtonsoft.Json;
using SCSSdkClient.Object;

namespace SCSSdkClient.Demo {

    /// <inheritdoc />
    public partial class SCSSdkClientDemo : Form {

        /// <summary>
        ///     The SCSSdkTelemetry object
        /// </summary>
        public SCSSdkTelemetry Telemetry;

        private float fuel;

        /// <inheritdoc />
        public SCSSdkClientDemo() {
            InitializeComponent();
            Telemetry = new SCSSdkTelemetry();
            Telemetry.Data += Telemetry_Data;
            Telemetry.JobStarted += TelemetryOnJobStarted;

            Telemetry.JobCancelled += TelemetryJobCancelled;
            Telemetry.JobDelivered += TelemetryJobDelivered;
            Telemetry.Fined += TelemetryFined;
            Telemetry.Tollgate += TelemetryTollgate;
            Telemetry.Ferry += TelemetryFerry;
            Telemetry.Train += TelemetryTrain;
            Telemetry.RefuelStart += TelemetryRefuel;
            Telemetry.RefuelEnd += TelemetryRefuelEnd;
            Telemetry.RefuelPayed += TelemetryRefuelPayed;

            if (Telemetry.Error != null) {
                lbGeneral.Text =
                    "General info:\r\nFailed to open memory map " +
                    Telemetry.Map +
                    " - on some systems you need to run the client (this app) with elevated permissions, because e.g. you're running Steam/ETS2 with elevated permissions as well. .NET reported the following Exception:\r\n" +
                    Telemetry.Error.Message +
                    "\r\n\r\nStacktrace:\r\n" +
                    Telemetry.Error.StackTrace;
            }

            l_updateRate.Text = Telemetry.UpdateInterval + "ms";
        }

        private void SCSSdkClientDemo_FormClosing(object sender, FormClosingEventArgs e) {
            Telemetry.pause(); // that line make it possible, but not every application wants to ask the user to quit, need to see if i can change that, when not use the try catch and IGNORE it (nothing changed )
            if (MessageBox.Show("Are you sure you want to quit?", "My Application", MessageBoxButtons.YesNo) ==
                DialogResult.No) {
                e.Cancel = true;
                Telemetry.resume();
                return;
            }

            Telemetry.Dispose();
        }

        private void Telemetry_Data(SCSTelemetry data, bool updated) {
            if (!updated)
                return;
            try {
                if (InvokeRequired) {
                    Invoke(new TelemetryData(Telemetry_Data), data, updated);
                    return;
                }

                l_updateRate.Text = Telemetry.UpdateInterval + "ms";

                lbGeneral.Text = "General info:\n " +
                                 "\t SDK Running:\n" +
                                 $"\t\t\t{data.SdkActive}\n" +
                                 "\tSDK Version:\n" +
                                 $"\t\t\t{data.DllVersion}\n" +
                                 "\tGame:\n " +
                                 $"\t\t\t{data.Game}\n" +
                                 "\tGame Version:\n" +
                                 $"\t\t\t{data.GameVersion}\n" +
                                 "\tTelemetry Version:\n" +
                                 $"\t\t\t{data.TelemetryVersion}\n" +
                                 "\tTimeStamp:\n" +
                                 $"\t\t\t{data.Timestamp}\n" +
                                 "\tSimulation TimeStamp:\n" +
                                 $"\t\t\t{data.SimulationTimestamp}\n" +
                                 "\tRender TimeStamp:\n" +
                                 $"\t\t\t{data.RenderTimestamp}\n" +
                                 "\tMultiplayer Time Offset:\n" +
                                 $"\t\t\t{data.MultiplayerTimeOffset}\n" +
                                 "\tGame Paused:\n" +
                                 $"\t\t\t{data.Paused}\n" +
                                 "\tOn Job:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.OnJob}\n" +
                                 "\tJob Finished:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.JobFinished}\n" +
                                 "\tJob Delivered:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.JobDelivered}\n" +
                                 "\tJob Cancelled:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.JobCancelled}\n" +
                                 "\tFined:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.Fined}\n" +
                                 "\ttollgate:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.Tollgate}\n" +
                                 "\tferry:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.Ferry}\n" +
                                 "\ttrain:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.Train}\n" +
                                 "\tRefuel Payed:\n" +
                                 $"\t\t\t{data.SpecialEventsValues.RefuelPayed}\n";

                common.Text = JsonConvert.SerializeObject(data.CommonValues, Formatting.Indented);
                truck.Text = JsonConvert.SerializeObject(data.TruckValues, Formatting.Indented);
                trailer.Text =
                    JsonConvert.SerializeObject(data.TrailerValues[0],
                                                Formatting
                                                    .Indented); //TODO: UNTIL I WORK ON A BETTER DEMO SHOW ONLY TRAILER 0
                job.Text = JsonConvert.SerializeObject(data.JobValues, Formatting.Indented);
                control.Text = JsonConvert.SerializeObject(data.ControlValues, Formatting.Indented);
                navigation.Text = JsonConvert.SerializeObject(data.NavigationValues, Formatting.Indented);
                substances.Text = JsonConvert.SerializeObject(data.Substances, Formatting.Indented);
                gameplayevent.Text = JsonConvert.SerializeObject(data.GamePlay, Formatting.Indented);
                rtb_fuel.Text = data.TruckValues.CurrentValues.DashboardValues.FuelValue.Amount + " " + data.SpecialEventsValues.Refuel;
                fuel = data.GamePlay.RefuelEvent.Amount;
            } catch (Exception ex) {
                // ignored atm i found no proper way to shut the telemetry down and down call this anymore when this or another thing is already disposed
                Console.WriteLine("Telemetry was closed: " + ex);
            }
        }

        private void TelemetryFerry(object sender, EventArgs e) =>
            MessageBox.Show("Ferry");

        private void TelemetryFined(object sender, EventArgs e) =>
            MessageBox.Show("Fined");

        private void TelemetryJobCancelled(object sender, EventArgs e) =>
            MessageBox.Show("Job Cancelled");

        private void TelemetryJobDelivered(object sender, EventArgs e) =>
            MessageBox.Show("Job Delivered");

        private void TelemetryOnJobStarted(object sender, EventArgs e) =>
                                                            MessageBox.Show("Just started job OR loaded game with active.");

        private void TelemetryRefuel(object sender, EventArgs e) => rtb_fuel.Invoke((MethodInvoker)(() => rtb_fuel.BackColor = Color.Green));

        private void TelemetryRefuelEnd(object sender, EventArgs e) => rtb_fuel.Invoke((MethodInvoker)(() => rtb_fuel.BackColor = Color.Red));

        private void TelemetryRefuelPayed(object sender, EventArgs e) {
            MessageBox.Show("Fuel Payed: " + fuel);
        }

        private void TelemetryTollgate(object sender, EventArgs e) =>
                                    MessageBox.Show("Tollgate");

        private void TelemetryTrain(object sender, EventArgs e) =>
            MessageBox.Show("Train");
    }
}
