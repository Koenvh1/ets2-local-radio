using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace ETS2_Local_Radio_server
{
    public partial class Splash : Form
    {
        public Splash()
        {
            InitializeComponent();
        }

        private void Splash_Load(object sender, EventArgs e)
        {
            Main main = new Main();
            main.Activated += MeHide;
            main.Visible = false;
        }

        private void MeHide(object sender, EventArgs e)
        {
            Hide();
        }
    }
}
