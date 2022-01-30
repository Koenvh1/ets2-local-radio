/*
 * So, you are on of those few people actually reading the config file. Great!
 * You are now able to optimise ETS2 Local Radio for you.
 * Please rename this file to config.js to actually apply it.
 * As always, have fun, and when something breaks, try reverting to the default :-)
 *
 * If you want to add your own custom radio stations, then please look at the stations\stations-custom.example.js file.
 */

var g_skinConfig = {
    "radius": 7500,                         //What the base radius (broadcasting range) for all cities is in meters.
    "threshold": {                           //How much better the reception needs to be in a different country/city to switch [0-1]
        "ets2": 0.15,
        "ats": 0.15
    },
    "whitenoise": true,                     //Whether to play static when a station is far away
    "transition-whitenoise": true,          //Whether to play static when changing stations
    "peerJSkey": "damhc79361fhto6r",        //API key for PeerJS (remote control), no reason to change this yet
    "url-prefix": "http://localradio.koenvh.nl/",
    "ets2": {
        "map": "http://localradio.koenvh.nl/cities/cities-ets2.js",                //What map you're using, this is default + ProMods + RusMap + Project Balkans + Egypt add-on by default. Pick one of the files in the cities folder.
        "stations": "http://localradio.koenvh.nl/stations/stations-europe.js",     //What stations file to use, currently only stations-europe available.
    },
    "ats": {
        "map": "http://localradio.koenvh.nl/cities/cities-ats.js",                 //What map you're using, this is default by default.
        "stations": "http://localradio.koenvh.nl/stations/stations-america.js",    //What stations file to use, currently only stations-america available.
    }
};
