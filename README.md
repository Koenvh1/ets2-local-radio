![Logo](https://i.imgur.com/1CToXfs.png)  
ETS2/ATS Local Radio plays radio from where you are, in ETS2. Feel the immersion when the Swedish radio plays in Sweden, and the Polish radio in Poland. It will switch automatically, while also allowing you to switch stations while driving. You can switch using the web interface, your keyboard, your controller and your mobile phone.

ATS/ETS2 Local Radio contains over 9000 radio stations that you could realistically listen to if you were driving in that actual area. Most national radio stations are included for ETS2; see the full list at the bottom of this page. It does not include radio stations that you would not be able to receive over FM or DAB in that country, like TruckersFM. However, you can add those yourself if you so desire.

**Supported maps:**  
ETS2: Default with all DLC, ProMods, ProMods Middle-East, RusMap.  
ATS: Default with all DLC, Viva Mexico, Coast to Coast, Canadream.  
Other maps that cover roughly the same area are likely to be supported as well.

**It's available in over 30 languages!**  
Not available in yours? [Translate it](https://koenvh.nl/translate). I will add it in the next release. 

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KAX2AA9B85BAE)

## How to install it:

1. Download ATS/ETS2 Local Radio from the [releases page](https://github.com/Koenvh1/ets2-local-radio/releases)
2. Extract it wherever you like
3. Execute ETS2 Local Radio server.exe
4. Click the "Install plugin for Euro Truck Simulator/American Truck Simulator" button.
5. Click Open ATS/ETS2 Local Radio and have fun.

Please make sure that the keys and buttons you assign in ETS2 Local Radio are not assigned in game, otherwise you might start switching stations every time you hit the horn. Additionally, you may want to look at the `web\custom.js` file and set some additional settings to make the make your experience even better.

Make a station favourite to always switch to that station when entering the country it's located in.

## Reporting an issue:
Found a station that does not work, a wrong (or incomplete) translation or something else? Please open [an issue](https://github.com/Koenvh1/ets2-local-radio/issues) (preferred) or post it on the ProMods/SCS forum.

Make sure to read the troubleshooting section below beforehand, as well as the other issues!

## General information:

### How the system works:
Every city acts as a transmission tower with a certain range, and every city is bound to a country. The program check the distance to every city, and when it is within reach, the stations for that country are displayed. When a city from a different country is closer than the one currently connected to (with a threshold), and the reception is better, the radio automatically switches to that country.

### What does that coverage map show?
It shows all the transmission towers (the cities), with a range circle. The black inner ring is the clear audio border (~20% static). Each country has its own (random) colour, to make it easier to see the difference between them.

### What is the PeerID and what does it do? / Can I use my phone/tablet to control the radio?
The PeerID is an ID that identifies that instance of ATS/ETS2 Local Radio. It allows you to control Local Radio from another device, like a phone or tablet. Simply go to the URL shown in the server on your phone or tablet (e.g. http://xxx.xxx.xxx.xxx:xxxx), click "Connect to another device", enter your computer's PeerID, and you're ready to go. All input on your second device will be redirected to your computer.

You can also use the app: https://play.google.com/store/apps/details?id=nl.koenvh.localradio

### What is a favourite?
Once you enter a different country, the radio will automatically switch to a station from that country. Normally this is the first available station, but if you set a station as your favourite, that station will be played instead. You can also quickly switch to that station if you assign a key/button to the "Switch to favourite" option.

### Can I add my own stations?
Yes you can! Just head over to the [submit station](https://koenvh.nl/submit-station) page. If it is accepted, it will be added in the next update. However, maybe your station does not meet the criteria (web only, does not broadcast in the majority of a country, which generally leads to a rejection), but you still want to add it. That's possible too. See the `custom.js` file for more info.

##### Why does it have to broadcast in a majority of the country?
Let us take a local radio station from France as an example:

Imagine a radio station that has a range of 50km in real life (which is quite a lot), so a diameter of 100km. Now, ETS2 has a scale of 1:19, so that would be 5.26km in ETS2. If you drive at 80km/h, you'll be able to listen to it for 0.066 hours or about four minutes, which is less than the time of one song. And that's when you go right through the middle of the coverage circle, it will be even shorter if you don't. You can already see (or actually hear) this problem by driving through Luxembourg, as Luxembourg is quite a small country.

The problem you create then is that the radio constantly switches stations, which is not really desirable. I worked around this in ATS, where radio stations are licensed per city instead of per state, by making the range unrealistically large and making it switch later than in ETS2, but the problem still exists there too.

### Can you support map x?
Maybe, maybe not. You can always send in a request.
* ATS maps will not be added unless you provide at least one station per new **city**.
* ETS2 maps will not be added unless you provide at least one station per new **country**. 

If you provide the cities and stations, then I will add them. For getting the cities, see https://github.com/Koenvh1/ETS2-City-Coordinate-Retriever/blob/master/README.md, for the stations, see the custom stations example file for the format.

Nowadays, [Marcus](https://github.com/04Marcus) maintains most of the stations for ATS and ETS2. I (Koen) occasionally do so too.
The map mods for ATS are nowadays maintained mostly by Marcus and me (Koen). Previously they were maintained by:
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
It was called ETS2 Local Radio initially, with Local Radio being the short form. Then support for ATS came. To make clear that it also supports ATS, I started using the name ATS/ETS2 Local Radio, ETS2/ATS Local Radio, Local Radio for ATS/ETS2 etc. Generally speaking, I use ETS2 Local Radio, but I'm not really consistent when it comes to naming.

### Can I still run this program locally like v2?
Yes you can. Click the "Clone or download" button above, and then click "Download ZIP". Then copy the contents of the web folder to the web folder of your Local Radio installation. Edit the config.js file (overwritten on update), or set the config in the custom.js file (permanent).

## Troubleshooting:
### Can't access it from another device
Try restarting ATS/ETS2 Local Radio server. Please make sure your firewall is not blocking the connection. If you use a different firewall that Windows Firewall, then please allow incoming connections on port 8330. You can test whether the firewall is the issue by going to [http://localhost:8330](http://localhost:8330), 
if that works, it is most likely a firewall issue. Add ATS/ETS2 Local Radio server and/or incoming port 8330 (TCP) to the exceptions list (consult your firewall's manual how to do that), or just use [http://localhost:8330](http://localhost:8330).

If it does not work on localhost either, then please try changing the default port in the `settings.json` file.

### Can't connect to my computer's PeerID
Try refreshing the webpage. Make sure you're using a modern web browser (preferably Firefox, Chrome or Opera) and your firewall does not block the connection.

### It says the simulator is not running even though it is!
This might be due to the fact that a dependency was not loaded properly. Please try the following:
* Restart the game
* Open the `My Documents\{American Truck Simulator/Euro Truck Simulator 2}\game.log.txt` file,
check whether it contains the following lines:
```
00:00:18.261 : loading 'local-radio' '/Euro Truck Simulator 2/bin/win_x64/plugins/local-radio.dll'
00:00:18.262 : unable to load: 0000007E
```
* If that is the case, then please try installing the following:  
https://aka.ms/vs/17/release/vc_redist.x64.exe
and **restart your computer**
* Make sure you run the 64-bit version of the game
* Please check whether your volume slider is above 0%
* Check whether a different browser (Firefox/Edge) does work
* Try playing another station
* If it does not contain `loading 'local-radio'`, 
then please try to reinstall the plugin by pressing the "Install plugin" button, or manually copy the content of `\ETS2 Local Radio\plugins\bin` to
`\Steam\SteamApps\common\Euro Truck Simulator 2\bin`

### The overlay does not show up
* Make sure you run the game in DirectX mode
* Make sure you have not disabled the overlay in the settings

### The overlay is stuck in the top left corner
This usually occurs after changing the graphics settings. It should be gone after ATS/ETS2 is restarted.

### I cannot hear any sound
Click the sound icon in your address bar, and set automatic playback to "allow".

### The overlay is upside down in VR
Close the server, open the `settings.json` file, and change `vr` to `true`.

### I get some SlimDX.dll error
You might need to install the [Microsoft Visual C++ 2010 Service Pack 1 Redistributable Package](https://www.microsoft.com/en-us/download/details.aspx?id=26999).

### The page keeps showing "Waiting for your in-game coordinates...", even though the server does know the coordinates
Make sure you use a modern browser, and have no add-ons that conflict with Local Radio. Also make sure your firewall does not block access to the Local Radio server, and that your browser settings are not so restrictive that they block access to Local Radio (e.g. by forcing HTTPS usage).

### Something else does not work!
Try restarting ETS2/ATS, rebooting your PC, and reloading the ETS2 Local Radio web page (as your browser may still have an invalid cached version of the page). If that does not work, then please open [an issue](https://github.com/Koenvh1/ets2-local-radio/issues) (preferred) or post it on the ProMods/SCS forum. Include the `Error log.txt` file if possible.

### Why is the code such a mess?
Call it "organically grown". Initially, this project was a skin for ETS2 Telemetry Server. Later it got its own server. That, combined with the fact that I never intended this project to become this large, is why the code is shoddy in some places. I have started refactoring the code, but I honestly can't really be bothered to finish that. Maybe some other time.

If you are interested to help, there is an open issue [here](https://github.com/Koenvh1/ets2-local-radio/issues/154).

## How to uninstall it:
Just remove the ETS2 Local Radio folder or, if you used the installer, remove it using the Control Panel. You will need to manually remove the following files from the ETS2/ATS installation directory as well:
* `\bin\win_x64\plugins\local-radio.dll`

You might find some residual files left in your installation folder that you need to manually remove.

## Thanks to:

I could not have possibly done this alone, so thanks to the following people:
* SCS Software for creating ETS2
* nlhans for creating the [ETS2 SDK plugin](https://github.com/nlhans/ets2-sdk-plugin)
* Michael Koch for creating [GPP](http://www.mikoweb.eu/?page_id=54) (no longer used)
* All the translators
* Everyone who submitted a new station or reported a broken station
* You, the user

## Screenshots:
![Screenshot](https://i.imgur.com/J3ycEJB.png)

_The server window_

![Screenshot](https://i.imgur.com/5naBcXw.jpg)

_The in-game view when switching stations (if the overlay is installed)_

![Screenshot](https://i.imgur.com/B4OBEPV.png)

_Another in-game view when switching stations (if the overlay is installed)_

![Screenshot](https://user-images.githubusercontent.com/5168825/130339936-79c77cd8-312e-4e08-ba58-4bbe76b3ea60.png)

_An example of the web interface_

![Screenshot](https://user-images.githubusercontent.com/5168825/130339941-d3f20613-871a-4b1c-a774-01d9358c8ad8.png)

_Another example of the web interface (dark theme)_

![Screenshot](https://i.imgur.com/R8SjMna.png)

_The interface on the mobile app/website_
