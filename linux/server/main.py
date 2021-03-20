import threading
from http.server import SimpleHTTPRequestHandler
import socketserver
import subprocess
import json
import signal
import time

PORT = 3142

last_value = (0, 0, 0)
has_elec = [False, False]  # current, last read by command handler
alive = True
httpd = None

def start_read():
    global last_value, has_elec
    global alive

    read_util = subprocess.Popen(["./read_util"], stdout=subprocess.PIPE, bufsize=1, universal_newlines=True)
    while read_util.poll() is None and alive:
        txt = read_util.stdout.readline().strip()
        if not txt:
            continue

        parts = txt.split(";")
        last_value = tuple([float(x) for x in parts[0].split(",")])
        has_elec[0] = int(parts[1]) > 0

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
        if self.path[:4] == "/api":
            self.handle_api()
        elif self.path[:9] == "/commands":
            self.handle_cmd()
        else:
            super().do_GET()

def run_server():
    global last_value
    global alive
    global httpd
    global PORT

    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print("Server open on port", PORT)
        httpd.serve_forever()

def signal_handler(sig, frame):
    global alive
    global httpd

    if not alive:
        return

    print("Interrupted, shutting down")
    alive = False

    if httpd is not None:
        httpd.shutdown()

    read_thread.join()
    server_thread.join()

    print("Done.")

signal.signal(signal.SIGINT, signal_handler)

read_thread = threading.Thread(target=start_read)
server_thread = threading.Thread(target=run_server)

read_thread.start()
server_thread.start()

