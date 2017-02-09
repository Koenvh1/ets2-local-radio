# ETS2/ATS Local Radio #

ETS2/ATS Local Radio plays radio from where you are, in ETS2. Feel the immersion when the Swedish radio plays in Sweden,
and the Polish radio in Poland. It will switch automatically, and allow you to switch stations while driving.

**Some radio stations may not work with Internet Explorer, Opera or Chrome. Please try using Edge or Firefox.**

## How to install it: ##

1. Download ETS2 Local Radio from the [releases page](https://github.com/Koenvh1/ets2-local-radio/releases)
2. Extract it wherever you like
3. Execute ETS2 Local Radio server.exe
4. Click the "Install plugin for Euro Truck Simulator/American Truck Simulator" button.
5. Open ETS2 Local Radio (or go to [http://localhost:8330](http://localhost:8330)) and have fun.

Additionally, you may want to look at the `web/config.js` file and set some additional settings to make the make your experience even better.
Please make sure that the keys and buttons you assign in ETS2 Local Radio are not assigned in game as well.

## Troubleshooting: ##
_Can't access it from another device_

Please make sure your firewall is not blocking the connection.

_It says the simulator is not running even though it is!_

This might be due to the fact that a dependency was not loaded properly.
Please try the following:
* Restart the game
* Open the `My Documents\{American Truck Simulator/Euro Truck Simulator 2}\game.log.txt` file,
check whether it contains the following lines:
```
00:00:18.261 : loading 'ets2-telemetry' '/Euro Truck Simulator 2/bin/win_x86/plugins/ets2-telemetry.dll'
00:00:18.262 : unable to load: 0000007E
```
* If that is the case, then please try installing the following:
https://www.microsoft.com/en-gb/download/details.aspx?id=48145
* If it contains something like this:
```$xslt
00:00:20.006 : loading 'ets2-telemetry' 'X:/Path/Euro Truck Simulator 2/bin/win_x86/plugins/ets2-telemetry.dll'
[...]
00:00:20.006 : <ERROR> [sdk] prism::sdk::lookup_channel: channel 'truck.adblue.consumption.average' not found
00:00:20.006 : <ERROR> [sdk] prism::sdk::lookup_channel: SCS_U32_NIL is not valid parameter for array channel 'truck.hshifter.select'
00:00:20.006 : <ERROR> [sdk] prism::sdk::telemetry_register_for_channel: channel 'truck.electric.enabled' index 4294967295 has already callback for type 1
00:00:20.006 : <ERROR> [sdk] prism::sdk::telemetry_register_for_channel: type 1 is not supported by channel 'truck.light.aux.front' index 4294967295
00:00:20.006 : <ERROR> [sdk] prism::sdk::telemetry_register_for_channel: type 1 is not supported by channel 'truck.light.aux.roof' index 4294967295
00:00:20.006 : <ERROR> [sdk] prism::sdk::lookup_channel: channel 'truck.adblue.consumption.average' not found
```
* Please check whether your volume slider is above 0%
* Check whether a different browser (Firefox/Edge) does work
* Try playing another station
* If it does not contain `loading 'ets2-telemetry'`, 
then please try to reinstall the plugin by pressing the "Install plugin" button, or manually copy the content of `\ETS2 Local Radio\plugins\bin` to
`\Steam\SteamApps\common\Euro Truck Simulator 2\bin`


_ETS2 Local Radio crashes!_

Please open an issue or [contact me](http://koenvh.nl/contact). Include the `Error log.txt` file if possible.

## How to uninstall it: ##

Just remove the ETS2 Local Radio folder or, if you used the installer, remove it using the Control Panel.
You will need to manually remove the following files from the ETS2/ATS installation directory as well:
* `\bin\win_x64\d3d9.dll` 
* `\bin\win_x64\plugins\ets2-telemetry.dll`
* `\bin\win_x86\d3d9.dll`
* `\bin\win_x86\plugins\ets2-telemetry.dll`

## General information: ##

### How the system works: ###

Every city acts as a transmission tower with a certain range, and every city is bound to a country. 
The program check the distance to every city, and when it is within reach, the stations for that country are displayed.
When a city from a different country is closer than the one currently connected to (with a treshold), the radio automatically switches to that country.

### What does that coverage map show? ###

It shows all the transmission towers (the cities), with a range circle. 
The black inner ring is the clear audio border (~20% static).
Each country has its own (random) colour, to make it easier to see the difference between them.

## Thanks to: ##
I could not have possibly done this alone, so thanks to the following people:
* SCS Software for creating ETS2
* **nlhans for creating the [ETS2 SDK plugin](https://github.com/nlhans/ets2-sdk-plugin)**
* **Michael Koch for creating [GPP](http://www.mikoweb.eu/?page_id=54)**
* All the translators
* Everyone who submitted a new station
* You, the user

## Screenshots: ##
![Screenshot](http://i.imgur.com/bBpaPy0.png)

_The server window_

![Screenshot](http://i.imgur.com/5naBcXw.jpg)

_The in-game view when switching stations (if the overlay is installed)_

![Screenshot](http://i.imgur.com/qhCsYcy.png)

_All available stations in ATS as of 1.6.0_

![Screenshot](http://i.imgur.com/NBPME4e.png)

_All available stations in ETS2 as of 1.4.0_