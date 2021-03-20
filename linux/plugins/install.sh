#!/usr/bin/env bash

cp read_util "../server"

if [ ! -d "$HOME/.local/share/Steam/steamapps/common/Euro Truck Simulator 2/bin/linux_x64/" ]; then
    echo "WARN: Could not find ETS2 installation! Please manually move ets2-telemetry-lin.so to your plugins directory."
    echo "Installed with partial success"
    exit 1
else
    mkdir -p "$HOME/.local/share/Steam/steamapps/common/Euro Truck Simulator 2/bin/linux_x64/plugins"
    mkdir -p "$HOME/.local/share/Steam/steamapps/common/Euro Truck Simulator 2/bin/linux_x86/plugins"
    cp ets2-telemetry-lin.so "$HOME/.local/share/Steam/steamapps/common/Euro Truck Simulator 2/bin/linux_x64/plugins"
    cp ets2-telemetry-lin.so "$HOME/.local/share/Steam/steamapps/common/Euro Truck Simulator 2/bin/linux_x86/plugins"
fi

echo "Installed successfully"
