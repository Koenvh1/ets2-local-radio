#!/usr/bin/env bash

rm -f -- ../server/read_util

if [ ! -d "$HOME/.local/share/Steam/steamapps/common/Euro Truck Simulator 2/bin/linux_x64/" ]; then
    echo "WARN: Could not find ETS2 installation! Please manually move ets2-telemetry-lin.so to your plugins directory."
    echo "Uninstalled with partial success"
    exit 1
else
    rm -f -- "$HOME/.local/share/Steam/steamapps/common/Euro Truck Simulator 2/bin/linux_x64/plugins/ets2-telemetry-lin.so"
    rm -f -- "$HOME/.local/share/Steam/steamapps/common/Euro Truck Simulator 2/bin/linux_x86/plugins/ets2-telemetry-lin.so"
fi

echo "Uninstalled successfully"
