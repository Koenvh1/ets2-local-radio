/*
* So, you are on of those few people actually reading the config file. Great!
* You are now able to optimise ETS2 Local Radio for you.
* As always, have fun, and when something breaks, try reverting to the default :-)
 */

var g_skinConfig = {
    "radius": 7500,                         //What the base radius (broadcasting range) for all cities is in meters.
    "treshold": {                           //How much closer you need to be to a different country to switch to that country (in meters)
        "ets2": 300,
        "ats": 3500
    },
    "whitenoise": true,                     //Whether to play static when a station is far away
    "transition-whitenoise": true,          //Whether to play static when changing stations
    "peerJSkey": "w710twrvcnfdpldi",        //API key for PeerJS (remote control), no reason to change this yet
    "ets2": {
        "map": "cities-ets2.js",  //What map you're using, this is default + ProMods + RusMap + Project Balkans + Egypt add-on by default. Pick one of the files in the cities folder.
        "stations": "stations-europe.js",   //What stations file to use, currently only stations-europe available.
    },
    "ats": {
        "map": "cities-ats.js",             //What map you're using, this is default by default.
        "stations": "stations-america.js",  //What stations file to use, currently only stations-america available.
    }
};