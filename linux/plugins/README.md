# ETS2 Local Radio Linux port

## Installation instructions

To build and install the plugin and utility script, you will need GCC and Make (these come standard with a lot of distributions).

In this directory, run the command:

```bash
make all && ./install.sh
```

If you get errors, you probably need to install a dependency.

You will need to copy the plugin `ets2-telemetry-lin.so` manually to your plugins directory if ETS is not installed via Steam on your main partition, or if you are using ATS.

## Running

Go to the `server` directory and run:

```bash
python3 main.py
```

This will by default run at `localhost:3141`, but feel free to change the port by adding the `--port` flag.

Then just visit `localhost:3141` (or your specified) port to view the web interface!
