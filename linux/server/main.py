import threading
from http.server import SimpleHTTPRequestHandler
import socketserver
import subprocess
import json
import signal
import time
import argparse

last_value = (0, 0, 0)
has_elec = [False, False]  # current, last read by command handler
alive = True
httpd = None

def start_read():
    global last_value, has_elec
    global alive

    timeout = 1

    while alive:
        try:
            read_util = subprocess.Popen(["./read_util"], stdout=subprocess.PIPE, bufsize=1, universal_newlines=True)
        except Exception as e:
            print("Couldn't start read util:", e)
            alive = False
            break

        while read_util.poll() is None and alive:
            txt = read_util.stdout.readline().strip()
            if not txt:
                continue

            if txt[:4] != "INFO":
                continue

            # reset timeout
            timeout = 1

            txt = txt[5:]
            parts = txt.split(";")
            last_value = tuple([float(x) for x in parts[0].split(",")])
            has_elec[0] = int(parts[1]) > 0

        if read_util.returncode == 1:
            print(f"Your game doesn't seem to be running, trying again in 5 seconds...")
            time.sleep(5)
        elif read_util.returncode > 0:
            # Generic error handling
            print(f"Read util encountered an error, trying again in {timeout} seconds...")
            time.sleep(timeout)
            timeout *= 2

        read_util.stdout.close()
        read_util.send_signal(signal.SIGKILL)

class CustomHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args):
        super().__init__(*args, directory="../../web/")

    def handle_api(self):
        global last_value
        payload = {
            "Physics": {
                "CoordinateX": last_value[0],
                "CoordinateY": last_value[1],
                "CoordinateZ": last_value[2],
            }
        }

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Encoding", "utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode("utf-8"))

    def handle_cmd(self):
        global has_elec

        payload = {
            "id": time.time(),
            "language": "en-GB",
            "game": "ets2",
        }

        if has_elec[0] != has_elec[1]:
            has_elec[1] = has_elec[0]
            payload["action"] = "engineOn" if has_elec[0] else "engineOff" 

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Encoding", "utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode("utf-8"))

    def do_GET(self):
        try:
            self.GET_handler()
        except Exception as e:
            print("Server: encountered error while responding to request:", e)
            print("Ignoring and continuing to run.")

    def GET_handler(self):
        if self.path[:4] == "/api":
            self.handle_api()
        elif self.path[:9] == "/commands":
            self.handle_cmd()
        else:
            super().do_GET()

    # Comment this out if you want to debug issues - for now this just prevents the
    # handler cluttering stdout with logs.
    def log_message(self, format, *args):
        pass

def run_server():
    global last_value
    global alive
    global httpd
    global PORT

    while alive:
        try:
            with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
                print(f"Server open on port {PORT}, visit it at: http://localhost:{PORT}/")
                httpd.serve_forever()
        except OSError as e:
            if e.errno == 98:   # Address in use
                print("That port is already in use (possibly from previous run of this script)")
                print("Waiting 5 seconds before trying again...")
                time.sleep(5)
            else:
                raise   # reraise

def shutdown(sig=None, frame=None):
    global alive
    global httpd

    if not alive:
        return

    print("Interrupted, shutting down...")
    alive = False

    if httpd is not None:
        httpd.shutdown()

    read_thread.join()
    server_thread.join()

    print("Done.")

signal.signal(signal.SIGINT, shutdown)

read_thread = threading.Thread(target=start_read)
server_thread = threading.Thread(target=run_server)

parser = argparse.ArgumentParser()
parser.add_argument("--port", type=int, default=3141)

args = parser.parse_args()
PORT = args.port

read_thread.start()
server_thread.start()

