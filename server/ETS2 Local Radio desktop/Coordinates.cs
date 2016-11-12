using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ETS2_Local_Radio_server
{
    public class Coordinates
    {
        private float x;
        private float y;
        private float z;

        public Coordinates(float x, float y, float z)
        {
            X = x;
            Y = y;
            Z = z;
        }

        public float X
        {
            get { return x; }
            set { x = value; }
        }
        public float Y
        {
            get { return y; }
            set { y = value; }
        }
        public float Z
        {
            get { return z; }
            set { z = value; }
        }
    }
}
