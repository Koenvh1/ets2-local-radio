using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Drawing.Text;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.Remoting.Channels;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using ETS2_Local_Radio_server.Properties;

namespace ETS2_Local_Radio_server
{
    static class Station
    {
        [DllImport("gpcomms.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool GPSL_SetTextLineData(
            byte cObjectNumber,
            int wTextPosX,
            int wTextPosY,
            string pTextLine,
            int dwTextColor,
            bool bBlackBackground,
            byte cSize,
            bool bTextBold,
            byte cFontFamily
        );
        [DllImport("gpcomms.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool GPSL_ShowText(
            byte cObjectNumber,
            bool bShowIt
        );
        [DllImport("gpcomms.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool GPPIC_LoadNewPicture(
            string sPathToFile
        );
        [DllImport("gpcomms.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool GPPICI_LoadNewInternalPicture(
            byte[] pData,
            int uiDataSize
        );
        [DllImport("gpcomms.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool GPPIC_ShowPicturePos(
            bool bShowIt,
            int wPosX,
            int wPosY
        );
        [DllImport("gpcomms.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool GPPICI_ShowInternalPicturePos(
            bool bShowIt,
            int wPosX,
            int wPosY
        );
        [DllImport("gpcomms.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        public static extern bool GPSI_GetScreenSize(
            int piScreenX,
            int piScreenY
        );

        public static System.Timers.Timer timer = new System.Timers.Timer();

        public static void SetStation(string name)
        {
            try
            {
                if (Boolean.Parse(ConfigurationManager.AppSettings["Overlay"]))
                {
                    //int x = 1, y = 1;
                    //GPSI_GetScreenSize(&x, &y);
                    //MessageBox.Show(x.ToString());
                    //TODO: Make use of GetScreenSize

                    int width = Screen.PrimaryScreen.WorkingArea.Width;
                    int height = Screen.PrimaryScreen.WorkingArea.Height;

                    //GPSL_SetTextLineData(0, 10, 10, name, Color.FromArgb(255, 174, 0).ToArgb(), false, 25, true, 0);
                    //GPSL_ShowText(0, true);

                    Image bmp = new Bitmap(Resources.overlay);

                    RectangleF rectf = new RectangleF(0, 0, Resources.overlay.Width, Resources.overlay.Height);

                    Graphics g = Graphics.FromImage(bmp);

                    g.SmoothingMode = SmoothingMode.AntiAlias;
                    g.InterpolationMode = InterpolationMode.HighQualityBicubic;
                    g.PixelOffsetMode = PixelOffsetMode.HighQuality;
                    g.TextRenderingHint = TextRenderingHint.AntiAliasGridFit;
                    StringFormat format = new StringFormat()
                    {
                        Alignment = StringAlignment.Center,
                        LineAlignment = StringAlignment.Center
                    };
                    var brush = new SolidBrush(Color.FromArgb(255, 174, 0));
                    var font = new Font("Microsoft Sans Serif", 15, FontStyle.Bold);
                    g.DrawString("Now playing: " + name, font, brush, rectf, format);

                    g.Flush();

                    //TODO: Get memory picture to work.
                    //MemoryStream ms = new MemoryStream();
                    //bmp.Save(ms, ImageFormat.Png);

                    //GPPICI_LoadNewInternalPicture(ms.ToArray(), (int) ms.Length);
                    //GPPICI_ShowInternalPicturePos(true, (width/2) - (Resources.overlay.Width/2), (height/4));

                    bmp.Save(Directory.GetCurrentDirectory() + @"\overlay.png");

                    GPPIC_LoadNewPicture(Directory.GetCurrentDirectory() + @"\overlay.png");
                    GPPIC_ShowPicturePos(true, (width/2) - (Resources.overlay.Width/2), (height/4));

                    timer.Interval = 4000;
                    timer.Elapsed += (sender, args) =>
                    {
                        timer.Enabled = false;
                        timer.Stop();
                        GPPIC_ShowPicturePos(false, (width / 2) - (Resources.overlay.Width / 2), (height / 4));
                        //GPPICI_ShowInternalPicturePos(false, (width/2) - (Resources.overlay.Width/2), (height/4));
                        //Log.Write("Hide overlay");
                    };
                    timer.Enabled = true;
                    timer.Start();
                }
            }
            catch (Exception ex)
            {
                Log.Write(ex.ToString());
            }
        }
    }
}
