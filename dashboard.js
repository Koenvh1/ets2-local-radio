//current version:
var version = "0.3.0";
//skinConfig global:
var g_skinConfig;
//countries near you global:
var g_countries = {};
//stations near you global:
var g_stations = [];
//current country for that radio:
var g_current_country = null;
//current url for the radio:
var g_current_url = "";
//volume for radio:
var g_volume = 1;
//nearest country:
var g_last_nearest_country = "";
//whitenoise active:
var g_whitenoise = false;
//global hls object:
var g_hls = null;
//whether scripts have loaded:
var g_loaded = false;
//last command id from desktop received:
var g_last_command = "0";

Funbit.Ets.Telemetry.Dashboard.prototype.initialize = function (skinConfig, utils) {
    //
    // skinConfig - a copy of the skin configuration from config.json
    // utils - an object containing several utility functions (see skin tutorial for more information)
    //

    // this function is called before everything else, 
    // so you may perform any DOM or resource initializations / image preloading here

    g_skinConfig = skinConfig;
    g_whitenoise = skinConfig.whitenoise;

    document.getElementById("switchStation").volume = 0;

    var ajax_requests = [];

    //Get bootstrap:
    ajax_requests.push($.getScript("/skins/" + skinConfig.name + "/bootstrap.js"));
    //Get HLS script for HLS stations playback:
    ajax_requests.push($.getScript("/skins/" + skinConfig.name + "/hls.js", function () {
        g_hls = new Hls();
    }));
    //Get city locations:
    ajax_requests.push($.getScript("/skins/" + skinConfig.name + "/cities/" + skinConfig.map));
    //Get stations per country:
    ajax_requests.push($.getScript("/skins/" + skinConfig.name + "/stations/" + skinConfig.stations));

    //Check updates:
    $.getJSON("https://koenvh1.github.io/ets2-local-radio/version.json", function (data) {
        if(data.version != version){
            $(".update").show();
        }
    });

    if(localStorage.getItem("volume") == null){
        localStorage.setItem("volume", 1);
    }
    g_volume = localStorage.getItem("volume");
    $("#volumeControl").val(g_volume * 100);

    $.when.apply($, ajax_requests).done(function(){
        g_loaded = true;

        //Refresh stations every 10 seconds:
        setInterval(function () {
            refreshStations();
        }, 10000);
    });
};

Funbit.Ets.Telemetry.Dashboard.prototype.filter = function (data, utils) {
    //
    // data - telemetry data JSON object
    // utils - an object containing several utility functions (see skin tutorial for more information)
    //

    // This filter is used to change telemetry data 
    // before it is displayed on the dashboard.
    // You may convert km/h to mph, kilograms to tons, etc.
	
    return data;
};

Funbit.Ets.Telemetry.Dashboard.prototype.render = function (data, utils) {
    //
    // data - same data object as in the filter function
    // utils - an object containing several utility functions (see skin tutorial for more information)
    //
    if(g_loaded) {

        var country_lowest_distance = "nothing";
        var city_lowest_distance = "nothing";
        var lowest_distance = 999999999999999999;
        var available_countries = {
            none: {
                country: "none",
                distance: 999999999999999999,
                whitenoise: 0
            }
        };

        var location = data.truck.placement;
        //Test whether location is real and not disconnected
        if (!(location.x == 0.0 && location.y == 0.0 && location.z == 0.0)) {
            for (var i = 0; i < cities.length; i++) {
                //Fix uppercase issues (*cough* SCS):
                cities[i]["country"] = cities[i]["country"].toLowerCase();
                //Calculate distance
                var distance = Math.sqrt(Math.pow((location["x"] - cities[i]["x"]), 2) + Math.pow((location["z"] - cities[i]["z"]), 2));
                if (distance < lowest_distance) {
                    //Write lowest distance
                    lowest_distance = distance;
                    country_lowest_distance = cities[i]["country"];
                    city_lowest_distance = cities[i]["gameName"];
                    //$("#lowest_distance").html(country_lowest_distance);
                }

                var relative_city_radius = 1;
                if (typeof city_properties[cities[i]["gameName"]] !== "undefined" && typeof city_properties[cities[i]["gameName"]]["relative_radius"] !== "undefined") {
                    relative_city_radius = city_properties[cities[i]["gameName"]]["relative_radius"];
                }
                if (distance < g_skinConfig.radius * country_properties[cities[i]["country"]]["relative_radius"] * relative_city_radius) {
                    //Calculate distance within radius ( = global radius * country radius * city radius (if exists))

                    //Calculate whitenoise
                    var whitenoise = distance / g_skinConfig.radius / country_properties[cities[i]["country"]]["relative_radius"];
                    if (typeof city_properties[cities[i]["gameName"]] !== "undefined") {
                        if (typeof city_properties[cities[i]["gameName"]]["relative_radius"] !== "undefined") {
                            whitenoise = whitenoise / city_properties[cities[i]["gameName"]]["relative_radius"];
                        }
                        if (typeof city_properties[cities[i]["gameName"]]["relative_whitenoise"] !== "undefined") {
                            whitenoise = whitenoise * city_properties[cities[i]["gameName"]]["relative_whitenoise"];
                        }
                    }

                    //Add country to available_countries
                    if (!available_countries.hasOwnProperty(cities[i]["country"])) {
                        available_countries[cities[i]["country"]] = {
                            country: cities[i]["country"],
                            distance: distance,
                            whitenoise: whitenoise
                        }
                    } else {
                        //Set whitenoise if there is a closer city in that country
                        if (available_countries[cities[i]["country"]]["whitenoise"] > whitenoise) {
                            available_countries[cities[i]["country"]]["whitenoise"] = whitenoise;
                            available_countries[cities[i]["country"]]["distance"] = distance;
                        }
                    }
                }
            }

            //Calculate whitenoise
            var whitenoise_lowest_distance = lowest_distance / g_skinConfig.radius / country_properties[country_lowest_distance]["relative_radius"];
            if (typeof city_properties[city_lowest_distance] !== "undefined") {
                if (typeof city_properties[city_lowest_distance]["relative_radius"] !== "undefined") {
                    whitenoise_lowest_distance = whitenoise_lowest_distance / city_properties[city_lowest_distance]["relative_radius"];
                }
                if (typeof city_properties[city_lowest_distance]["relative_whitenoise"] !== "undefined") {
                    whitenoise_lowest_distance = whitenoise_lowest_distance * city_properties[city_lowest_distance]["relative_whitenoise"];
                }
            }
            available_countries[country_lowest_distance] = {
                country: country_lowest_distance,
                distance: lowest_distance,
                whitenoise: whitenoise_lowest_distance
            };

            available_countries = sortObject(available_countries);

            $(".nearestCity").html(city_lowest_distance + "; " + country_lowest_distance);
            $(".distance").html(utils.formatFloat(lowest_distance, 1));

            if (!available_countries.hasOwnProperty(g_current_country) ||
                (available_countries[country_lowest_distance]["distance"] + g_skinConfig.treshold < available_countries[g_current_country]["distance"] &&
                g_last_nearest_country != country_lowest_distance)) {
                //If current station country is not close enough OR (the distance + treshold is larger than the new country's distance and the last station wasn't set manually.
                g_last_nearest_country = country_lowest_distance;


                //Check if there is a favourite station:
                var index = 0;
                if (localStorage.getItem("fav-" + country_lowest_distance) !== null) {
                    index = stations[country_lowest_distance].map(function (e) {
                        return e.name;
                    }).indexOf(localStorage.getItem("fav-" + country_lowest_distance));
                }
                if(!controlRemote) {
                    //If remote player, don't set radio station
                    setRadioStation(stations[country_lowest_distance][index]["url"], country_lowest_distance, available_countries[country_lowest_distance]["whitenoise"]);
                } else {
                    g_current_url = stations[country_lowest_distance][index]["url"];
                }
            }

            if (Object.keys(available_countries).sort().toString() != Object.keys(g_countries).sort().toString()) {
                //If they don't contain the same keys (ie. a country update)
                g_countries = available_countries;

                refreshStations();
            } else {
                setWhitenoise(available_countries[g_current_country]["whitenoise"]);
                g_countries = available_countries;
            }
            
            $.getJSON("/skins/" + g_skinConfig.name + "/commands.json").done(function (data) {
                if(g_last_command != data.id){
                    g_last_command = data.id;
                    if(data.action == "stop"){
                        setRadioStation('', 'none', 0);
                    }
                    if(data.action == "next"){
                        nextStation(data.amount);
                    }
                }
            });
        }
    }
};

function setRadioStation(url, country, volume) {
    //Set current listening country for when crossing the border
    g_current_url = url;
    g_current_country = country;
    if(controlRemote){
        if(!conn.open){
            //If connection closed, reconnect
            conn = peer.connect(connectedPeerID);
        }
        conn.send(JSON.stringify({
            type: "station",
            url: url,
            country: country,
            volume: volume
        }));
    } else {
        g_whitenoise = false;
        $("#switchStation").animate({volume: (url == "" ? 0 : g_volume)}, 2500, "linear");
        $("#player").animate({volume: 0}, 2000, function () {
            //Detach previous HLS if it is there
            if (g_hls != null) {
                g_hls.detachMedia();
            }
            if (url.endsWith("m3u8")) {
                //If HLS, continue here
                g_hls.attachMedia(document.getElementById("player"));
                g_hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                    g_hls.loadSource(url);
                });
            } else {
                document.getElementById("player").src = url;
                document.getElementById("player").play();
            }
            setTimeout(function () {
                $("#switchStation").animate({volume: 0}, 200);
                $("#player").animate({volume: 1}, 50, function () {
                    g_whitenoise = g_skinConfig.whitenoise;
                });
            }, 2200);
        });

        //document.getElementById("player").play();
        setWhitenoise(volume);
    }
    refreshStations();
}

function setWhitenoise(volume) {
    if(g_whitenoise) {
        //Make new volume work exponentially:
        var newVolume =  Math.pow(volume, 2) - 0.15;
        if(newVolume < 0) newVolume = 0;
        if(newVolume > g_volume) newVolume = g_volume;
        var playerVolume = g_volume;
        if(newVolume > 0.5){
            //Create a distorted sound effect, with the sound sometimes dropping (no signal)
            playerVolume = document.getElementById("player").volume + parseFloat(((Math.floor(Math.random() * 19) / 100) - 0.09) / 1.2);
            if(playerVolume > g_volume) playerVolume = g_volume;
            if(playerVolume < 0) playerVolume = 0;
            document.getElementById("player").volume = playerVolume;
        } else {
            document.getElementById("player").volume = g_volume;
        }
        $(".whitenoise-volume").html(parseFloat(newVolume).toFixed(2) + "; " + parseFloat(playerVolume).toFixed(2));
        document.getElementById("whitenoise").volume = parseFloat(newVolume);
        document.getElementById("whitenoise").play();
    } else {
        document.getElementById("whitenoise").pause();
    }
}

function setFavouriteStation(country, name) {
    if(controlRemote){
        if(!conn.open){
            //If connection closed, reconnect
            conn = peer.connect(connectedPeerID);
        }
        conn.send(JSON.stringify({
            type: "favourite",
            country: country,
            name: name
        }));
    } else {
        localStorage.setItem("fav-" + country, name);
        refreshStations();
        alert("Favourite for " + country.toUpperCase() + " is now " + name);
    }
}

function nextStation(amount) {
    var index = -1;
    for(var i = 0; i < g_stations.length; i++){
        if(g_stations[i]["url"] == g_current_url){
            index = i;
            break;
        }
    }
    index = index + amount;
    if(index < 0){
        index = g_stations.length + index;
    }
    while(index >= g_stations.length){
        index = index - g_stations.length;
    }
    setRadioStation(g_stations[index]["url"], g_stations[index]["country"], g_stations[index]["volume"]);
}

function refreshStations() {
    if(g_loaded) {
        var content = "";
        var available_stations = [];
        for (var key in g_countries) {
            //Check whether country should be checked:
            if (!g_countries.hasOwnProperty(key)) continue;
            if (key == "none") continue;
            if ($.isEmptyObject(stations[key])) continue;
            //console.log(key);

            //content += "<h1 class='col-xs-12'>" + key.toUpperCase() + "</h1>";

            for (var j = 0; j < stations[key].length; j++) {
                //Determine volume:
                var volume = g_countries[key]["whitenoise"];

                //Push station to available_stations for use with application
                available_stations.push({
                    url: stations[key][j]['url'],
                    country: key,
                    volume: volume
                });

                //Check whether the station distance can reached here:
                if (typeof stations[key][j]["relative_radius"] === "undefined" || g_countries[key]["distance"] / stations[key][j]["relative_radius"] < g_skinConfig.radius) {
                    //TODO: Stop playback when station is out of reach
                    content +=
                        '<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 thumb">' +
                        '<a class="thumbnail ' + ((g_current_url == stations[key][j]['url']) ? "thumbnail-orange" : "") + '" href="#/" onclick="setRadioStation(\'' + stations[key][j]['url'] + '\',' +
                        ' \'' + key + '\',' +
                        ' \'' + volume + '\'); document.getElementById(\'player\').play();">' +
                        '<div class="well-sm text-center"><div class="station-image-container"><img src="' + stations[key][j]['logo'] + '"></div><br>' +
                        '<h3 class="station-title">' + stations[key][j]['name'] + '</h3>' +
                        key.toUpperCase() +
                        '</div>' +
                        '</a>' +
                        ((localStorage.getItem("fav-" + key) == stations[key][j]['name']) ? '' : '<button class="btn btn-success btn-xs top-right" onclick="setFavouriteStation(\'' + key + '\', \'' + stations[key][j]['name'] + '\')">Make favourite</button> ') +
                        '</div>';
                }
            }
        }
        $("#stationsList").html(content);
        g_stations = available_stations;
    }
}

$('#volumeControl').on("change mousemove", function() {
    if(controlRemote){
        if(!conn.open){
            //If connection closed, reconnect
            conn = peer.connect(connectedPeerID);
        }
        conn.send(JSON.stringify({
            type: "volume",
            volume: parseInt($("#volumeControl").val()) / 100
        }));
    } else {
        g_volume = parseInt($("#volumeControl").val()) / 100;
        localStorage.setItem("volume", g_volume);
    }
});

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

function sortObject(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}