using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETS2_Local_Radio_server
{
    public class Commands
    {
        public string id;
        public string action;
        public int amount;
   
        public Commands(string _id, string _action, int _amount)
        {
            id = _id;
            action = _action;
            amount = _amount;
        }
    }
}
