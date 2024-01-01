using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ETS2_Local_Radio_server
{
    public class Coordinates
    {
        private double x;
        private double y;
        private double z;

        public Coordinates(double x, double y, double z)
        {
            X = x;
            Y = y;
            Z = z;
        }

        public double X
        {
            get { return x; }
            set { x = value; }
        }
        public double Y
        {
            get { return y; }
            set { y = value; }
        }
        public double Z
        {
            get { return z; }
            set { z = value; }
        }
    }
}
