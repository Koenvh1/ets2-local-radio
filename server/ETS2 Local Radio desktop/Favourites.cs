using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ETS2_Local_Radio_server
{
    public static class Favourites
    {
        public static Dictionary<string, string> storage = new Dictionary<string, string>();

        public static void Set(string key, string value)
        {
            if (storage.ContainsKey(key))
            {
                storage[key] = value;
            }
            else
            {
                storage.Add(key, value);
            }
        }

        public static string Get(string key)
        {
            if (key == "")
            {
                return JsonConvert.SerializeObject(storage, Formatting.Indented);
            }
            if (storage.ContainsKey(key))
            {
                return storage[key];
            }
            else
            {
                return null;
            }
        }

        public static void Load()
        {
            if (File.Exists(Directory.GetCurrentDirectory() + "\\favourites.json"))
            {
                System.IO.StreamReader reader = new StreamReader(Directory.GetCurrentDirectory() + "\\favourites.json");
                storage = JsonConvert.DeserializeObject<Dictionary<string, string>>(reader.ReadToEnd());
                reader.Close();
            }
            if(storage == null)
            {
                storage = new Dictionary<string, string>();
                storage.Add("_info", "File to store favourite station on country - station name basis");
            }
        }

        public static void Save()
        {
            System.IO.StreamWriter writer = new StreamWriter(Directory.GetCurrentDirectory() + "\\favourites.json");
            writer.Write(JsonConvert.SerializeObject(storage, Formatting.Indented));
            writer.Close();
        }
    }
}
