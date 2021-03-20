# ETS2 Local Radio unofficial Linux port

## Installation instructions

In this directory, run the command:

```bash
make all && ./install.sh
```

You will need to copy the plugin `telemetry.so` manually to your plugins directory if ETS is not installed via Steam on your main partition, or if you are using ATS.

## Running

Go to the `server` directory and run:

```bash
python3 main.py
```
