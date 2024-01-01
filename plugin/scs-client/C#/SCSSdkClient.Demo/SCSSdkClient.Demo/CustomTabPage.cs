// 
// Ets2SdkClient.Demo
// CustomTabControl.cs
// 10:52
using System.Windows.Forms;

namespace SCSSdkClient.Demo {
    /// <summary>
    /// Custom TabPage Settings to reduce flicker
    /// </summary>
    public class CustomTabPage : TabPage
    {
        /// <inheritdoc />
        public CustomTabPage()
        {
            SetStyle(ControlStyles.OptimizedDoubleBuffer, true);
            SetStyle(ControlStyles.AllPaintingInWmPaint, true);
        }
    }
}