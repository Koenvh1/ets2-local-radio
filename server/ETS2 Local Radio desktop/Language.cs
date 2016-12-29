using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace ETS2_Local_Radio_server
{
    class Language
    {
        internal string Lang = "en-GB";

        public Language(string lang)
        {
            Lang = lang;
        }

        public dynamic GetFile()
        {
            StreamReader reader = new StreamReader(Directory.GetCurrentDirectory() + "\\web\\lang\\" + Lang + ".json");
            string content = reader.ReadToEnd();
            dynamic data = JObject.Parse(content);
            dynamic server = data.server;
            return server;
        }
    }
}
