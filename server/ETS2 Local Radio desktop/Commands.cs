using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETS2_Local_Radio_server
{
    public class Commands
    {
        public string id;
        public string action;
        public string amount;
        public string language;
   
        public Commands(string _id, string _action, string _amount, string _language)
        {
            id = _id;
            action = _action;
            amount = _amount;
            language = _language;
        }
    }
}
