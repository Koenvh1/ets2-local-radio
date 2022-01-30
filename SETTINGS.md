# ETS2 Local Radio settings
**This document may be slightly outdated**  
This document describes all settings for ETS2 Local Radio, and their function.

## Server

Can be found as `settings.json` in the root folder.

#### port
The port that ETS2 Local Radio server should use for the built-in web server. 
By default `8330`. Edit if this port is already in use

#### PreviousKey
Keyboard key to go to the previous radio station, expressed as in the Keys enum.

#### NextKey
Keyboard key to go to the next radio station, expressed as in the Keys enum.

#### StopKey
Keyboard key to stop the radio playback, expressed as in the Keys enum.

#### VolumeUpKey
Keyboard key to increase the volume by 5% for the radio player, expressed as in the Keys enum.

#### VolumeDownKey
Keyboard key to decrease the volume by 5% for the radio player, expressed as in the Keys enum.

#### MakeFavouriteKey
Keyboard key to make a station the favourite station for that country, expressed as in the Keys enum.

#### Overlay
Display the change station overlay in ETS2

#### Language
Language for the program and web interface, from a file in the `web/lang` folder.

#### NextButton, PreviousButton, StopButton, VolumeUpButton, VolumeDownButton, MakeFavouriteButton
See the key equivalent, only with a game controller button. Displays its index.

#### ControllerIndex
Controller to use for button input, based on the index of the controller. 0 by default.

#### Ets2Folder
Folder where Euro Truck Simulator 2 is installed in, checks whether the plugin exists there.

#### AtsFolder
Folder where American Truck Simulator is installed in, checks whether the plugin exists there.

## Web
Can be found as `web/config.js`, follows JavaScript object syntax.

#### radius
What the base radius (broadcasting range) for all cities is in meters.

#### threshold
How much better the reception needs to be in a different country (ETS2)/city (ATS) to switch to that country/city. 0 switches immediately, 1 switches never.

#### whitenoise
Whether to play static when a station is far away

#### transition-whitenoise
Whether to play static when changing stations

#### url-prefix
The URL prefix for loading station images

#### map
What map you're using. Based on a file in the cities directory. Leave default if you do not know what you are doing.

#### stations
What stations to use. Based on a file in the stations directory. Leave default if you do not know what you are doing.
