![Logo](https://i.imgur.com/1CToXfs.png)  
ETS2/ATS Local Radio plays radio from where you are, in ETS2. Feel the immersion when the Swedish radio plays in Sweden,
and the Polish radio in Poland. It will switch automatically, while also allowing you to switch stations while driving.
You can switch using the web interface, your keyboard, your controller and your mobile phone.

ATS/ETS2 Local Radio contains over 5000 radio stations that you could realistically listen to if you were driving in that actual area.
Most national radio stations are included for ETS2; see the full list at the bottom of this page. 
It does not include radio stations that you would not be able to receive over FM or DAB in that country, like TruckersFM.
However, you can add those yourself if you so desire.

**Supported maps:**  
ETS2: Default, Going East, Scandinavia, France, Italy, Baltics, Road to the Black Sea, ProMods, ProMods Middle-East, RusMap, Southern Region, TruckSim Map, Project Balkans*, Egypt Add-on, YKS Turkey*, Russian Open Spaces*, YKSRSK*, Romania Extended*, The Great Steppe, AfroMap and Italy Map.  
ATS: California, Nevada, Arizona, New Mexico, Oregon, Washington, Utah, Viva Mexico, Coast to Coast, Canadream.  
\*Disabled by default  

**It's available in over 20 languages!**  
Not available in yours? [Translate it](https://koenvh.nl/translate). I will add it in the next release.
(If your language is not in the list, message me, the system does not allow me to dynamically add languages)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KAX2AA9B85BAE)

## How to install it:

1. Download ATS/ETS2 Local Radio from the [releases page](https://github.com/Koenvh1/ets2-local-radio/releases)
2. Extract it wherever you like
3. Execute ETS2 Local Radio server.exe
4. Click the "Install plugin for Euro Truck Simulator/American Truck Simulator" button.
5. Click Open ATS/ETS2 Local Radio and have fun.

Please make sure that the keys and buttons you assign in ETS2 Local Radio are not assigned in game.
Additionally, you may want to look at the `web\custom.js` file and set some additional settings to make the make your experience even better.

Make a station favourite to always switch to that station when entering the country it's located in.

## Reporting an issue:
Found a station that does not work, a wrong (or incomplete) translation or something else? 
Please open [an issue](https://github.com/Koenvh1/ets2-local-radio/issues) or post it on the ProMods/SCS forum.

Make sure to read the troubleshoot section beforehand!

## General information:

### How the system works:
Every city acts as a transmission tower with a certain range, and every city is bound to a country. 
The program check the distance to every city, and when it is within reach, the stations for that country are displayed.
When a city from a different country is closer than the one currently connected to (with a threshold), the radio automatically switches to that country.

### What does that coverage map show?
It shows all the transmission towers (the cities), with a range circle. 
The black inner ring is the clear audio border (~20% static).
Each country has its own (random) colour, to make it easier to see the difference between them.

### What is the PeerID and what does it do? / Can I use my phone/tablet to control the radio?
The PeerID is an ID that identifies that instance of ATS/ETS2 Local Radio. 
It allows you to control Local Radio from another device, like a phone or tablet.
Simply go to the URL shown in the server on your phone or tablet (e.g. http://localradio.koenvh.nl/?api=http://xxx.xxx.xxx.xxx:xxxx), click "Connect to another device", 
enter your computer's PeerID and you're ready to go.
All input on your second device will be redirected to your computer.

You can also use the app: https://play.google.com/store/apps/details?id=nl.koenvh.localradio

### What is a favourite?
Once you enter a different country, the radio will automatically switch to a station from that country.
Normally this is the first available station, but if you set a station as your favourite, that station will be played instead.
You can also quickly switch to that station if you assign a key/button to the "Switch to favourite" option.

### Can I add my own stations?
Yes you can! Just head over to the [submit station](https://koenvh.nl/submit-station) page. 
If it is accepted, it will be added in the next update.
However, maybe your station does not meet the criteria (web only, does not broadcast in the majority of a country),
but you still want to add it. That's possible too. See the `custom.js` file for more info.

##### Why does it have to broadcast in a majority of the country?
Let us take a local radio station from France as an example:

Imagine a radio station that has a range of 50km in real life (which is quite a lot), so a diameter of 100km. 
Now, ETS2 has a scale of 1:19, so that would be 5.26km in ETS2. If you drive at 80km/h, 
you'll be able to listen to it for 0.066 hours or about four minutes, which is less than the time of one song. 
And that's when you go right through the middle of the coverage circle, it will be even shorter if you don't. 
You can already see (or actually hear) this problem by driving through Luxembourg, as Luxembourg is quite a small country.

The problem you create then is that the radio constantly switches stations, which is not really desirable. 
I worked around this in ATS, where radio stations are licensed per city instead of per state, 
by making the range unrealistically large and making it switch later than in ETS2, but the problem still exists there too.

### Can you support map x?
Maybe, maybe not. You can always send in a request.
* ATS maps will not be added unless you provide at least one station per new **city**.
* ETS2 maps will not be added unless you provide at least one station per new **country**. 

If you provide the cities and stations, then I will add them. For getting the cities, 
see https://github.com/Koenvh1/ETS2-City-Coordinate-Retriever/blob/master/README.md, for the stations, 
see the custom stations example file for the format.

Generally speaking, I (Koen) will maintain the stations for ETS2. [Marcus](https://github.com/04Marcus) maintains the stations for ATS.
The map mods for ATS are maintained by:
* Viva la Mexico - [rafa.martínez](https://promods.net/memberlist.php?mode=viewprofile&u=183806) (not updated at the moment)
* Coast to Coast - [Avondale Trucking](https://forum.scssoft.com/memberlist.php?mode=viewprofile&u=167308)
* Canadream - veso266 and Marcus

Want to participate? Great! Just open an issue.

##### How about Project Balkans, Open Spaces, or YKS Turkey?
A persisting problem is that some maps are incompatible with each other.
For that reason, some custom maps are not enabled by default. 
Please use the custom.js file to enable those stations.

This will reset when you update ETS2 Local Radio.  

### What is this program called?
Sorry for not being very consistent. Let me tell a short story to explain:  
It was called ETS2 Local Radio initially, with Local Radio being the short form. Then support for ATS came. 
To make clear that it also supports ATS, I started using the name ATS/ETS2 Local Radio, ETS2/ATS Local Radio, Local Radio for ATS/ETS2 etc etc.
Generally speaking, I use ETS2 Local Radio, but I'm not really consistent when it comes to naming.

### Can I still run this program locally like v2?
Yes you can. Just click the "Clone or download" button above, and then click "Download ZIP".
Then just copy the contents of the web folder to the web folder of your Local Radio installation.
You can then visit http://localhost:8330 to use your local files instead.

## Troubleshooting:
### Can't access it from another device
Try restarting ATS/ETS2 Local Radio server.
Please make sure your firewall is not blocking the connection. 
If you use a different firewall that Windows Firewall, then please allow incoming connections on port 8330.
You can test whether the firewall is the issue by going to [http://localhost:8330](http://localhost:8330), 
if that works, it is most likely a firewall issue. 
Add ATS/ETS2 Local Radio server and/or incoming port 8330 (TCP) to the exceptions list (consult your firewall's manual how to do that),
or just use [http://localhost:8330](http://localhost:8330).

If it does not work on localhost either, then please try changing the default port in the `settings.json` file.

### Can't connect to my computer's PeerID
Try refreshing the webpage. Make sure you're using a modern web browser (preferably Firefox, Chrome or Opera) and your firewall does not block the connection.

### It says the simulator is not running even though it is!
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
https://www.microsoft.com/en-gb/download/details.aspx?id=48145 (or from https://github.com/Koenvh1/ets2-local-radio/tree/master/plugins/visual_c%2B%2B_redistributable)
and **restart your computer**
* If it contains something like this:
```
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

If that doesn't work, then please try the [alternative dll](https://github.com/Koenvh1/ets2-local-radio/raw/master/plugins/alternative_ets2-telemetry.dll/ets2-telemetry.dll)
and copy it to the `\Steam\SteamApps\common\Euro Truck Simulator 2\bin\win_x64\plugins` folder. (The alternative only works on 64-bit)

### The overlay is stuck in the top left corner
This usually occurs after changing the graphics settings. It should be gone after ATS/ETS2 is restarted.

### I cannot hear any sound
Click the sound icon in your address bar, and set automatic playback to "allow".

### The overlay is upside down in VR
Close the server, open the `settings.json` file, and change `vr` to `true`.

### The server won't start due to some SlimDX.dll problem
Make sure that [Microsoft Visual C++ 2010 Redistributable Package (x86)](https://www.microsoft.com/en-us/download/confirmation.aspx?id=5555) is installed.

### Something else does not work!
Try restarting ETS2/ATS, rebooting your PC, and reloading the ETS2 Local Radio web page (as your browser may still have an invalid cached version of the page). 
If that does not work, then please open [an issue](https://github.com/Koenvh1/ets2-local-radio/issues) or post it on the ProMods/SCS forum. Include the `Error log.txt` file if possible.

### Why is the code such a mess?
Call it "organically grown". Initially, this project was a skin for ETS2 Telemetry Server. Later it got its own server. That, combined with the fact that I never intended this project to become this large, is why the code is shoddy in some places. I have started refactoring the code, but I honestly can't really be bothered to finish that. Maybe some other time.

## How to uninstall it:
Just remove the ETS2 Local Radio folder or, if you used the installer, remove it using the Control Panel.
You will need to manually remove the following files from the ETS2/ATS installation directory as well:
* `\bin\win_x64\plugins\ets2-telemetry.dll`
* `\bin\win_x86\plugins\ets2-telemetry.dll`

## Thanks to:

I could not have possibly done this alone, so thanks to the following people:
* SCS Software for creating ETS2
* **nlhans for creating the [ETS2 SDK plugin](https://github.com/nlhans/ets2-sdk-plugin)**
* **Michael Koch for creating [GPP](http://www.mikoweb.eu/?page_id=54)**
* All the translators
* Everyone who submitted a new station
* You, the user

## Screenshots:
![Screenshot](https://i.imgur.com/J3ycEJB.png)

_The server window_

![Screenshot](https://i.imgur.com/5naBcXw.jpg)

_The in-game view when switching stations (if the overlay is installed)_

![Screenshot](https://i.imgur.com/B4OBEPV.png)

_Another in-game view when switching stations (if the overlay is installed)_

![Screenshot](https://i.imgur.com/lrGysB7.png)

_An example of the web interface near Dresden_

![Screenshot](https://i.imgur.com/E9h001F.jpg)

_The interface on the mobile app/website_
