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
            ref int piScreenX,
            ref int piScreenY
        );

        public static string NowPlaying = "Now playing: ";

        public static System.Timers.Timer Timer = new System.Timers.Timer();

        public static void SetStation(string name)
        {
            try
            {
                if (Boolean.Parse(ConfigurationManager.AppSettings["Overlay"]))
                {
                    int width = 0, height = 0;
                    GPSI_GetScreenSize(ref width, ref height);
                    System.Threading.Thread.Sleep(20);
                    GPSI_GetScreenSize(ref width, ref height);

                    if (width == 0 || height == 0)
                    {
                        width = Screen.PrimaryScreen.WorkingArea.Width;
                        height = Screen.PrimaryScreen.WorkingArea.Height;
                    }

                    //GPSL_SetTextLineData(0, 10, 10, name, Color.FromArgb(255, 174, 0).ToArgb(), false, 25, true, 0);
                    //GPSL_ShowText(0, true);

                    Image bmp = new Bitmap(Resources.overlay);

                    RectangleF rectf = new RectangleF(0, 0, bmp.Width, bmp.Height);

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
                    var font = new Font("Microsoft Sans Serif", 15, FontStyle.Bold);

                    var stringSize = g.MeasureString(NowPlaying + " " + name, font);
                    var nowPlayingSize = g.MeasureString(NowPlaying + " ", font);
                    var topLeft = new PointF((bmp.Width / 2) - (stringSize.Width / 2),
                        (bmp.Height / 2) - (stringSize.Height / 2));
                    //var rectangle = new Rectangle(0, 0, (int)stringSize.Width, (int)stringSize.Height);
                    var brush = new SolidBrush(Color.FromArgb(255, 174, 0));
                    //var brush = new LinearGradientBrush(rectangle, Color.White, Color.FromArgb(255, 174, 0), 0.0f, false);
                    g.DrawString(name, font, brush, new PointF(topLeft.X + nowPlayingSize.Width, topLeft.Y));
                    g.DrawString(NowPlaying, font, Brushes.White, topLeft);

                    g.Flush();

                    //TODO: Get memory picture to work.
                    //MemoryStream ms = new MemoryStream();
                    //bmp.Save(ms, ImageFormat.Png);

                    //GPPICI_LoadNewInternalPicture(ms.ToArray(), (int) ms.Length);
                    //GPPICI_ShowInternalPicturePos(true, (width/2) - (Resources.overlay.Width/2), (height/4));

                    bmp.Save(Directory.GetCurrentDirectory() + @"\overlay.png");

                    GPPIC_LoadNewPicture(Directory.GetCurrentDirectory() + @"\overlay.png");
                    GPPIC_ShowPicturePos(true, (width / 2) - (Resources.overlay.Width / 2), (height / 4));

                    Timer.Interval = 4000;
                    Timer.Elapsed += (sender, args) =>
                    {
                        Timer.Enabled = false;
                        Timer.Stop();
                        GPPIC_ShowPicturePos(false, (width / 2) - (Resources.overlay.Width / 2), (height / 4));
                        //GPPICI_ShowInternalPicturePos(false, (width/2) - (Resources.overlay.Width/2), (height/4));
                        //Log.Write("Hide overlay");
                    };
                    Timer.Enabled = true;
                    Timer.Start();
                }
            }
            catch (Exception ex)
            {
                Log.Write(ex.ToString());
            }
        }
    }
}
