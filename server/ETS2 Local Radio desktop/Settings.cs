using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETS2_Local_Radio_server
{
    static class Settings
    {
        public static string Language = "en-GB";
        public static int Port = 8330;
        public static bool Overlay = true;
        public static string Controller = "";
        public static SettingsKeys Keys = new SettingsKeys();
        public static SettingsButtons Buttons = new SettingsButtons();
        public static SettingsFolders Folders = new SettingsFolders();
    }

    class SettingsKeys
    {
        public string Previous = "PageUp";
        public string Next = "Next";
        public string Stop = "End";
        public string VolumeUp = "Oemplus";
        public string VolumeDown = "OemMinus";
        public string MakeFavourite = "Pause";
    }

    class SettingsButtons
    {
        public string Previous = "";
        public string Next = "";
        public string Stop = "";
        public string VolumeUp = "";
        public string VolumeDown = "";
        public string MakeFavourite = "";
    }

    class SettingsFolders
    {
        public string Ets2 = "";
        public string Ats = "";
    }
}
