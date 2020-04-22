// MIT License - Copyright (c) 2016 Can Güney Aksakalli

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Sockets;
using System.Net;
using System.IO;
using System.Threading;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Text.RegularExpressions;

namespace ETS2_Local_Radio_server
{
    public class SimpleHTTPServer
    {
        private readonly string[] _indexFiles = {
        "index.html",
        "index.htm",
        "default.html",
        "default.htm"
    };

        private static IDictionary<string, string> _mimeTypeMappings = new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase) {
        #region extension to MIME type list
        {".asf", "video/x-ms-asf"},
        {".asx", "video/x-ms-asf"},
        {".avi", "video/x-msvideo"},
        {".bin", "application/octet-stream"},
        {".cco", "application/x-cocoa"},
        {".crt", "application/x-x509-ca-cert"},
        {".css", "text/css"},
        {".deb", "application/octet-stream"},
        {".der", "application/x-x509-ca-cert"},
        {".dll", "application/octet-stream"},
        {".dmg", "application/octet-stream"},
        {".ear", "application/java-archive"},
        {".eot", "application/octet-stream"},
        {".exe", "application/octet-stream"},
        {".flv", "video/x-flv"},
        {".gif", "image/gif"},
        {".hqx", "application/mac-binhex40"},
        {".htc", "text/x-component"},
        {".htm", "text/html"},
        {".html", "text/html"},
        {".ico", "image/x-icon"},
        {".img", "application/octet-stream"},
        {".iso", "application/octet-stream"},
        {".jar", "application/java-archive"},
        {".jardiff", "application/x-java-archive-diff"},
        {".jng", "image/x-jng"},
        {".jnlp", "application/x-java-jnlp-file"},
        {".jpeg", "image/jpeg"},
        {".jpg", "image/jpeg"},
        {".js", "application/x-javascript"},
        {".json", "application/json"},
        {".mml", "text/mathml"},
        {".mng", "video/x-mng"},
        {".mov", "video/quicktime"},
        {".mp3", "audio/mpeg"},
        {".mpeg", "video/mpeg"},
        {".mpg", "video/mpeg"},
        {".msi", "application/octet-stream"},
        {".msm", "application/octet-stream"},
        {".msp", "application/octet-stream"},
        {".pdb", "application/x-pilot"},
        {".pdf", "application/pdf"},
        {".pem", "application/x-x509-ca-cert"},
        {".pl", "application/x-perl"},
        {".pm", "application/x-perl"},
        {".png", "image/png"},
        {".prc", "application/x-pilot"},
        {".ra", "audio/x-realaudio"},
        {".rar", "application/x-rar-compressed"},
        {".rpm", "application/x-redhat-package-manager"},
        {".rss", "text/xml"},
        {".run", "application/x-makeself"},
        {".sea", "application/x-sea"},
        {".shtml", "text/html"},
        {".sit", "application/x-stuffit"},
        {".svg", "image/svg+xml"},
        {".swf", "application/x-shockwave-flash"},
        {".tcl", "application/x-tcl"},
        {".tk", "application/x-tcl"},
        {".txt", "text/plain"},
        {".war", "application/java-archive"},
        {".wbmp", "image/vnd.wap.wbmp"},
        {".wmv", "video/x-ms-wmv"},
        {".xml", "text/xml"},
        {".xpi", "application/x-xpinstall"},
        {".zip", "application/zip"},
        #endregion
    };
        private Thread _serverThread;
        private string _rootDirectory;
        private HttpListener _listener;
        private int _port;

        public int Port
        {
            get { return _port; }
            private set { }
        }

        /// <summary>
        /// Construct server with given port.
        /// </summary>
        /// <param name="path">Directory path to serve.</param>
        /// <param name="port">Port of the server.</param>
        public SimpleHTTPServer(string path, int port)
        {
            this.Initialize(path, port);
        }

        /// <summary>
        /// Construct server with suitable port.
        /// </summary>
        /// <param name="path">Directory path to serve.</param>
        public SimpleHTTPServer(string path)
        {
            //get an empty port
            TcpListener l = new TcpListener(IPAddress.Loopback, 0);
            l.Start();
            int port = ((IPEndPoint)l.LocalEndpoint).Port;
            l.Stop();
            this.Initialize(path, port);
        }

        /// <summary>
        /// Stop server and dispose all functions.
        /// </summary>
        public void Stop()
        {
            _serverThread.Abort();
            _listener.Stop();
        }

        private void Listen()
        {
            try
            {
                _listener = new HttpListener();
                _listener.Prefixes.Add("http://+:" + _port.ToString() + "/");
                TimeSpan timeOut = TimeSpan.FromSeconds(2);
                /*
                _listener.TimeoutManager.DrainEntityBody = timeOut;
                _listener.TimeoutManager.EntityBody = timeOut;
                _listener.TimeoutManager.HeaderWait = timeOut;
                _listener.TimeoutManager.IdleConnection = timeOut;
                _listener.TimeoutManager.RequestQueue = timeOut;
                */
                _listener.Start();
                while (true)
                {
                    try
                    {
                        HttpListenerContext context = _listener.GetContext();
                        new Task(() => { Process(context); }).Start();
                        //Process(context);
                    }
                    catch (Exception ex)
                    {
                        Log.Write(ex.ToString());
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Write(ex.ToString());
            }
        }

        private void Process(HttpListenerContext context)
        {
            context.Response.AddHeader("Cache-Control", "no-store, must-revalidate");
            context.Response.AddHeader("Access-Control-Allow-Origin", "http://localradio.koenvh.nl");

            string filename = context.Request.Url.AbsolutePath;
            //Console.WriteLine(filename);
            if (filename.Contains("?"))
            {
                filename = filename.Split("?".ToCharArray())[0];
            }
            //filename = filename.Replace("%20", " ");
            filename = WebUtility.UrlDecode(filename);
            filename = filename.Substring(1);
            if (filename.Contains("/"))
                filename = filename.Replace("/", @"\");
            if (string.IsNullOrEmpty(filename))
            {
                foreach (string indexFile in _indexFiles)
                {
                    if (File.Exists(Path.Combine(_rootDirectory, indexFile)))
                    {
                        filename = indexFile;
                        break;
                    }
                }
            }

            filename = Path.Combine(_rootDirectory, filename);

            if (context.Request.Url.AbsolutePath.StartsWith("/favourite/"))
            {
                string favourite = context.Request.Url.AbsoluteUri;
                favourite = WebUtility.UrlDecode(favourite);
                favourite = favourite.Split(new string[] { "/favourite/" }, StringSplitOptions.None)[1];
                Console.WriteLine(favourite);
                try
                {
                    string[] favouriteArray = favourite.Split(new string[] { "/" }, StringSplitOptions.None);
                    string text = "";
                    if (favouriteArray.Length == 1 && favourite == "")
                    {
                        text = Favourites.Get("");
                    }
                    else if (favouriteArray.Length == 1)
                    {
                        text = "{\"Name\": \"" + Favourites.Get(favourite) + "\"}";
                    }
                    else
                    {
                        Favourites.Set(favouriteArray[0], favouriteArray[1]);
                        Favourites.Save();
                        text = "{\"Success\": true}";

                    }
                    context.Response.ContentType = "application/json";
                    context.Response.ContentLength64 = Encoding.UTF8.GetBytes(text).Length;
                    context.Response.StatusCode = (int)HttpStatusCode.OK;
                    context.Response.OutputStream.Write(Encoding.UTF8.GetBytes(text), 0,
                    Encoding.UTF8.GetBytes(text).Length);
                    context.Response.OutputStream.Flush();
                }
                catch (Exception exception)
                {
                    Log.Write(exception.ToString());
                }
            }
            else if (context.Request.Url.AbsolutePath.StartsWith("/station/"))
            {
                string station = context.Request.Url.AbsoluteUri;
                station = WebUtility.UrlDecode(station);
                station = station.Split(new string[] { "/station/" }, StringSplitOptions.None)[1];
                Console.WriteLine(station);
                try
                {
                    Station.SetStation(station.Split("/".ToCharArray())[0], station.Split("/".ToCharArray())[1], station.Split("?".ToCharArray())[1]);
                }
                catch (Exception)
                {
                    Station.SetStation(station.Split("/".ToCharArray())[0], "0");
                }

                string text = "{\"Success\": true}";

                context.Response.ContentType = "application/json";
                context.Response.ContentLength64 = Encoding.UTF8.GetBytes(text).Length;
                context.Response.StatusCode = (int)HttpStatusCode.OK;
                context.Response.OutputStream.Write(Encoding.UTF8.GetBytes(text), 0, Encoding.UTF8.GetBytes(text).Length);
                context.Response.OutputStream.Flush();
            }
            else if (context.Request.Url.AbsolutePath == "/api/")
            {
                string text = Newtonsoft.Json.JsonConvert.SerializeObject(Main.ets2data);

                context.Response.ContentType = "application/json";
                context.Response.ContentLength64 = Encoding.UTF8.GetBytes(text).Length;
                context.Response.StatusCode = (int)HttpStatusCode.OK;
                context.Response.OutputStream.Write(Encoding.UTF8.GetBytes(text), 0, Encoding.UTF8.GetBytes(text).Length);
                context.Response.OutputStream.Flush();
            }
            else if (context.Request.Url.AbsolutePath == "/api/radio/")
            {
                string json = "{\"Radio\":\"" + Station.RadioStation + "\",\"Signal\":\"" + Station.RadioSignal+ "\"}";
                string text = Newtonsoft.Json.JsonConvert.SerializeObject(json);
                context.Response.ContentType = "application/json";
                context.Response.ContentLength64 = Encoding.UTF8.GetBytes(text).Length;
                context.Response.StatusCode = (int)HttpStatusCode.OK;
                context.Response.OutputStream.Write(Encoding.UTF8.GetBytes(text), 0, Encoding.UTF8.GetBytes(text).Length);
                context.Response.OutputStream.Flush();
            }
            else if (context.Request.Url.AbsolutePath == "/commands/")
            {
                string text = Newtonsoft.Json.JsonConvert.SerializeObject(Main.commandsData);

                context.Response.ContentType = "application/json";
                context.Response.ContentLength64 = Encoding.UTF8.GetBytes(text).Length;
                context.Response.StatusCode = (int)HttpStatusCode.OK;
                context.Response.OutputStream.Write(Encoding.UTF8.GetBytes(text), 0, Encoding.UTF8.GetBytes(text).Length);
                context.Response.OutputStream.Flush();
            }
            else if (context.Request.Url.AbsolutePath.StartsWith("/eskago/"))
            {
                string station = context.Request.Url.AbsoluteUri;
                station = WebUtility.UrlDecode(station);
                station = station.Split(new string[] { "/eskago/" }, StringSplitOptions.None)[1];

                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://www.eskago.pl/radio/" + station);
                request.AutomaticDecompression = DecompressionMethods.GZip;

                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                using (Stream stream = response.GetResponseStream())
                using (StreamReader reader = new StreamReader(stream))
                {
                    string data = reader.ReadToEnd();

                    Regex streamRegex = new Regex(@".*streamUrl\s=\s'(.+)';.*");
                    string baseUrl = streamRegex.Match(data).Groups[1].Value;

                    Regex icsuRegex = new Regex(".*icsu\"\\svalue=\"(.+)\"\\s.*");
                    string append = icsuRegex.Match(data).Groups[1].Value;

                    context.Response.RedirectLocation = baseUrl + append;
                    context.Response.StatusCode = 302;
                    context.Response.OutputStream.Flush();
                }
            }
            else if (File.Exists(filename))
            {
                try
                {
                    Stream input = new FileStream(filename, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);

                    //Adding permanent http response headers
                    string mime;
                    context.Response.ContentType = _mimeTypeMappings.TryGetValue(Path.GetExtension(filename), out mime)
                        ? mime
                        : "application/octet-stream";
                    context.Response.ContentLength64 = input.Length;
                    //context.Response.AddHeader("Date", DateTime.Now.ToString("r"));
                    //context.Response.AddHeader("Last-Modified", System.IO.File.GetLastWriteTime(filename).ToString("r"));
                    byte[] buffer = new byte[1024 * 16];
                    int nbytes;
                    while ((nbytes = input.Read(buffer, 0, buffer.Length)) > 0)
                        context.Response.OutputStream.Write(buffer, 0, nbytes);
                    input.Close();

                    context.Response.StatusCode = (int)HttpStatusCode.OK;
                    context.Response.OutputStream.Flush();
                }
                catch (Exception ex)
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    Log.Write(ex.ToString());
                }

            }
            else
            {
                //context.Response.AddHeader("X-Requested-File", filename);
                context.Response.StatusCode = (int)HttpStatusCode.NotFound;
                Log.Write("Not found: " + filename);
            }

            context.Response.OutputStream.Close();
        }

        private void Initialize(string path, int port)
        {
            this._rootDirectory = path;
            this._port = port;
            _serverThread = new Thread(this.Listen);
            _serverThread.Start();
        }
    }
}
