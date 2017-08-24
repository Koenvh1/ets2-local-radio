/*
 * Please rename this file to "stations-custom.js" if you actually want to use it :-)
 * This file contains all your custom stations.
 *
 * How it works:
 * The stations_custom object contains several country arrays.
 * Each array contains the stations for that country.
 * Each station is an object containing a name, logo and url property.
 * It follows the basic JavaScript object notation.
 *
 * You may want to peek at the stations-america.js and stations-europe.js files as to how it works.
 * Please make sure that you use the country name that is used in-game as well,
 * and please make sure the URL is the actual radio stream.
 * You can test that by opening the URL in VLC media player, if it plays, it is probably the right URL.
 *
 * Additionally, you can also put stations under the "global" country. These stations will be available everywhere.
 * You can see simulatorONE, TruckersFM and Dagnys Jukebox added here as an example.
 */

var stations_custom = {
    "Country name": [
        {
            name: "Station name",
            logo: "Logo URL",
            url: "Stream URL"
        }
    ],
    "austria": [
        {
            name: "simulatorONE",
            logo: "https://simulator1.de/wp-content/uploads/2017/02/s1-logo.png",
            url: "http://stream1.laut.fm/simulator1"
        },
    ],
    "france": [
        {
            name: "Ouï FM",
            logo: "stations/images-europe/france/Ouï FM.png",
            url: "http://laradiodelamer.stream.ouifm.fr/radiomer-128.mp3"
        },
        {
            name: "Radio FG",
            logo: "stations/images-europe/france/Radio FG.png",
            url: "http://radiofg.impek.com/fg.mp3"
        },
        {
            name: "Radio Nova",
            logo: "stations/images-europe/france/Radio Nova.png",
            url: "http://novazz.ice.infomaniak.ch/novazz-128.mp3"
        },
        {
            name: "Sweet fm",
            logo: "stations/images-europe/france/Sweet fm.png",
            url: "http://62.210.214.169:8000/lms"
        },
    ],
    "germany": [
        {
            name: "simulatorONE",
            logo: "https://simulator1.de/wp-content/uploads/2017/02/s1-logo.png",
            url: "http://stream1.laut.fm/simulator1"
        },
    ],
    "germany-wdr": [
        {
            name: "News89.4",
            logo: "stations/images-europe/germany-wdr/News89.4.gif",
            url: "http://edge.live.mp3.mdn.newmedia.nacamar.net/ps-news894/livestream.mp3"
        },
        {
            name: "Radio RSG",
            logo: "stations/images-europe/germany-wdr/Radio RSG.svg",
            url: "http://edge.live.mp3.mdn.newmedia.nacamar.net/radiorsg/livestream.mp3"
        },
        {
            name: "Radio Siegen",
            logo: "http://static.radio.de/images/broadcasts/c3/a6/2542/c175.png",
            url: "http://mp3.radiosiegen.c.nmdn.net/radiosiegen/livestream.mp3"
        },
    ],
    "switzerland-de": [
        {
            name: "simulatorONE",
            logo: "https://simulator1.de/wp-content/uploads/2017/02/s1-logo.png",
            url: "http://stream1.laut.fm/simulator1"
        },
    ],
    "global": [
        {
            name: "TruckersFM",
            logo: "http://i.imgur.com/fKTlA58.png",
            url: "http://radio.truckers.fm/"
        },
        {
            name: "Dagnys Jukebox",
            logo: "http://static.radio.net/images/broadcasts/3f/79/32940/c175.png",
            url: "http://streaming2.nordblommedia.se:443/dagny.mp3"
        },
    ]
};