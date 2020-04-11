/*
 * Here you can write whatever you want!
 * Use it to adjust Local Radio to your needs
 *
 * TO START: RENAME THIS FILE TO custom.js
 *
 * You can overwrite settings from the config.js file like this:
 * g_skinConfig["radius"] = 10000;
 * You can enable new maps like this:
 * cities = cities.concat(cities_open_spaces);
 * (see cities-ets2.js / cities-ats.js file for the maps available)
 * You can add new stations like this:
 * stations["austria"].push({
            name: "Station name",
            logo: "Logo URL",
            url: "Stream URL"
        });
 * Or you can add them to stations_custom below. stations_custom expects the
 * same format as stations, see stations-europe.js or stations-america.js for an example.
 */
var stations_custom = {};

for (var key in stations_custom) {
    if(stations_custom.hasOwnProperty(key)){
        if(stations.hasOwnProperty(key)){
            for(var i = 0; i < stations_custom[key].length; i++){
                stations[key].push(stations_custom[key][i])
            }
        } else {
            stations[key] = stations_custom[key];
        }
    }
}