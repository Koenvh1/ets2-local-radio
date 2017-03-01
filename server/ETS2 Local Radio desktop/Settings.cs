using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ETS2_Local_Radio_server
{
    static class Settings
    {
        public static string Language = "en-GB";
        public static int Port = 8330;
        public static bool Overlay = true;
        public static string Controller = null;

        public static string PreviousKey = "PageUp";
        public static string NextKey = "Next";
        public static string StopKey = "End";
        public static string VolumeUpKey = "Oemplus";
        public static string VolumeDownKey = "OemMinus";
        public static string MakeFavouriteKey = "Pause";
        public static string GoToFavouriteKey = "";

        public static string PreviousButton = "";
        public static string NextButton = "";
        public static string StopButton = "";
        public static string VolumeUpButton = "";
        public static string VolumeDownButton = "";
        public static string MakeFavouriteButton = "";
        public static string GoToFavouriteButton = "";

        public static string Ets2Folder = null;
        public static string AtsFolder = null;

        public static void Load()
        {
            if (File.Exists(Directory.GetCurrentDirectory() + "\\settings.json"))
            {
                System.IO.StreamReader reader = new StreamReader(Directory.GetCurrentDirectory() + "\\settings.json");
                dynamic s = JObject.Parse(reader.ReadToEnd());
                reader.Close();

                Language = s.language ?? Language;
                Port = s.port ?? Port;
                Overlay = s.overlay ?? Overlay;
                Controller = s.controller ?? Controller;

                PreviousKey = s.keys.previous ?? PreviousKey;
                NextKey = s.keys.next ?? NextKey;
                StopKey = s.keys.stop ?? StopKey;
                VolumeUpKey = s.keys.volumeUp ?? VolumeUpKey;
                VolumeDownKey = s.keys.volumeDown ?? VolumeDownKey;
                MakeFavouriteKey = s.keys.makeFavourite ?? MakeFavouriteKey;

                PreviousButton = s.buttons.previous ?? PreviousButton;
                NextButton = s.buttons.next ?? NextButton;
                StopButton = s.buttons.stop ?? StopButton;
                VolumeUpButton = s.buttons.volumeUp ?? VolumeUpButton;
                VolumeDownButton = s.buttons.volumeDown ?? VolumeDownButton;
                MakeFavouriteButton = s.buttons.makeFavourite ?? MakeFavouriteButton;

                Ets2Folder = s.folders.ets2 ?? Ets2Folder;
                AtsFolder = s.folders.ats ?? AtsFolder;
            }
        }

        public static void Save()
        {
            System.IO.StreamWriter writer = new StreamWriter(Directory.GetCurrentDirectory() + "\\settings.json");
            writer.Write(JObject.FromObject(new
            {
                language = Language,
                port = Port,
                overlay = Overlay,
                controller = Controller,
                keys = new
                {
                    previous = PreviousKey,
                    next = NextKey,
                    stop = StopKey,
                    volumeUp = VolumeUpKey,
                    volumeDown = VolumeDownKey,
                    makeFavourite = MakeFavouriteKey
                },
                buttons = new
                {
                    previous = PreviousButton,
                    next = NextButton,
                    stop = StopButton,
                    volumeUp = VolumeUpButton,
                    volumeDown = VolumeDownButton,
                    makeFavourite = MakeFavouriteButton
                },
                folders = new
                {
                    ets2 = Ets2Folder,
                    ats = AtsFolder
                }
            }));
            writer.Close();
        }
    }
}
