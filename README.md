# ETS2 Local Radio #

ETS2 Local Radio plays radio from where you are, in ETS2. Feel the immersion when the Swedish radio plays in Sweden,
and the Polish radio in Poland. It will switch automatically, and allow you to switch stations while driving.

**Some radio stations may not work with Internet Explorer, Edge or Chrome. Please try using Firefox while I try to fix the issue**

## How to install it: ##

1. Download ETS2 Local Radio from the [releases page](https://github.com/Koenvh1/ets2-local-radio/releases)
2. Extract it wherever you like
3. Execute ETS2 Local Radio server.exe
4. Click the "Install plugin for Euro Truck Simulator/American Truck Simulator" button.
5. Open ETS2 Local Radio (or go to [http://localhost:8330](http://localhost:8330)) and have fun.

Additionally, you may want to look at `config.js` and set some additional settings to make the make your experience even better.
Please make sure that the keys and buttons you assign in ETS2 Local Radio are not assigned in game as well.

## General information: ##

### How the system works: ###

Every city acts as a transmission tower with a certain range, and every city is bound to a country. 
The program check the distance to every city, and when it is within reach, the stations for that country are displayed.
When a city from a different country is closer than the one currently connected to (with a treshold), the radio automatically switches to that country.

### What does that coverage map show? ###

It shows all the transmission towers (the cities), with a range circle. 
The black inner ring is the clear audio border (~20% static).
Each country has its own (random) colour, to make it easier to see the difference between them.

## Troubleshooting: ##
_Can't access it from another device_

Please make sure your firewall is not blocking the connection

_It says the simulator is not running even though it is!_

Please make sure the plugin is installed and working. Also try installing the following:
https://www.microsoft.com/en-gb/download/details.aspx?id=48145

_ETS2 Local Radio crashes!_

Please open an issue or [contact me](http://koenvh.nl/contact)

## Thanks to: ##
I could not have possibly done this alone, so thanks to the following people:
* SCS Software for creating ETS2
* **nlhans for creating the [ETS2 SDK plugin](https://github.com/nlhans/ets2-sdk-plugin)**
* **Michael Koch for creating [GPP](http://www.mikoweb.eu/?page_id=54)**
* All the translators
* Everyone who submitted a new station
* You, the user

## Screenshots: ##
![Screenshot](http://i.imgur.com/U00YLw7.png)
_All available stations as of 1.4.0_