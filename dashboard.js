//current version:
var version = "0.0.4";
//skinConfig global:
var g_skinConfig;
//countries near you global:
var g_countries = {};
//current country for that radio:
var g_current_country = null;
//nearest country:
var g_last_nearest_country = "";
//whitenoise active:
var g_whitenoise = false;

Funbit.Ets.Telemetry.Dashboard.prototype.initialize = function (skinConfig, utils) {
    //
    // skinConfig - a copy of the skin configuration from config.json
    // utils - an object containing several utility functions (see skin tutorial for more information)
    //

    // this function is called before everything else, 
    // so you may perform any DOM or resource initializations / image preloading here

    g_skinConfig = skinConfig;

    //Get bootstrap:
    $.getScript("/skins/" + skinConfig.name + "/bootstrap.js");
    //Get city locations:
    $.getScript("/skins/" + skinConfig.name + "/cities/" + skinConfig.map);
    //Get stations per country:
    $.getScript("/skins/" + skinConfig.name + "/stations/" + skinConfig.stations);

    //Check updates:
    $.getJSON("https://koenvh1.github.io/ets2-local-radio/version.json", function (data) {
        if(data.version != version){
            $(".update").show();
        }
    });
    //Get PeerJS dependencies:
    $.getScript("http://cdn.peerjs.com/0.3.14/peer.js", function () {
        //Set ID for PearJS
        id = Math.floor(Math.random()*90000) + 10000;
        peer = new Peer(id, {key: g_skinConfig.peerJSkey});
        $(".peer-id").html(id);

        //Receive message logic
        peer.on('connection', function (conn) {
            conn.on('data', function (data) {
                var response = JSON.parse(data);
                console.log(data);
                if(response.type == "connect"){
                    //Show connected
                    console.log("Someone started controlling this player remotely");
                    $(".remote").show();
                }
                if(response.type == "station"){
                    setRadioStation(response.url, response.country, response.volume);
                }
                if(response.type == "favourite"){
                    setFavouriteStation(response.country, response.name);
                }
            });
        });
    });

    g_whitenoise = skinConfig.whitenoise;

    //Refresh stations every 10 seconds:
    setInterval(function () {
        refreshStations();
    }, 10000);

    // return to menu by a click
    //$(document).add('body').on('click', function () {
        //window.history.back();
    //});
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
    if(!(location.x == 0.0 && location.y == 0.0 && location.z == 0.0)){
        for(var i = 0; i < cities.length; i++){
            //Fix uppercase issues (*cough* SCS):
            cities[i]["country"] = cities[i]["country"].toLowerCase();
            //Calculate distance
            var distance = Math.sqrt(Math.pow((location["x"] - cities[i]["x"]), 2) + Math.pow((location["z"] - cities[i]["z"]), 2));
            if(distance < lowest_distance){
                //Write lowest distance
                lowest_distance = distance;
                country_lowest_distance = cities[i]["country"];
                city_lowest_distance = cities[i]["realName"];
                //$("#lowest_distance").html(country_lowest_distance);
            }
            if(distance < g_skinConfig.radius * country_properties[cities[i]["country"]]["relative_radius"]) {
                //Add country to available_countries
                if(!available_countries.hasOwnProperty(cities[i]["country"])) {
                    available_countries[cities[i]["country"]] = {
                        country: cities[i]["country"],
                        distance: distance,
                        whitenoise: distance / g_skinConfig.radius * country_properties[cities[i]["country"]]["relative_radius"]
                    }
                } else {
                    //Set whitenoise if there is a closer city in that country
                    if(available_countries[cities[i]["country"]]["whitenoise"] > distance / g_skinConfig.radius * country_properties[cities[i]["country"]]["relative_radius"]){
                        available_countries[cities[i]["country"]]["whitenoise"] = distance / g_skinConfig.radius * country_properties[cities[i]["country"]]["relative_radius"];
                        available_countries[cities[i]["country"]]["distance"] = distance;
                    }
                }
            }
        }

        $(".nearestCity").html(city_lowest_distance);
        $(".distance").html(utils.formatFloat(lowest_distance, 1));

        if(!available_countries.hasOwnProperty(g_current_country) ||
            (available_countries[country_lowest_distance]["distance"] + g_skinConfig.treshold < available_countries[g_current_country]["distance"] &&
            g_last_nearest_country != country_lowest_distance)) {
            //If current station country is not close enough OR (the distance + treshold is larger than the new country's distance and the last station wasn't set manually.
            g_last_nearest_country = country_lowest_distance;

            //Check if there is a favourite station:
            var index = 0;
            if(localStorage.getItem("fav-" + country_lowest_distance) !== null) {
                 index = stations[country_lowest_distance].map(function (e) {
                    return e.name;
                }).indexOf(localStorage.getItem("fav-" + country_lowest_distance));
            }
            setRadioStation(stations[country_lowest_distance][index]["url"], country_lowest_distance, available_countries[country_lowest_distance]["whitenoise"]);
        }

        if(Object.keys(available_countries).sort().toString() != Object.keys(g_countries).sort().toString()) {
            //If they don't contain the same keys (ie. a country update)
            g_countries = available_countries;

            refreshStations();
        } else {
            setWhitenoise(available_countries[g_current_country]["whitenoise"]);
            g_countries = available_countries;
        }
    }
};

function setRadioStation(url, country, volume) {
    //Set current listening country for when crossing the border
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
        $("#player").animate({volume: 0}, 750, function() {
            document.getElementById("player").src = url;
            $("#player").animate({volume: 1}, 750, function () {
                g_whitenoise = g_skinConfig.whitenoise;
            });
        });

        //document.getElementById("player").play();
        setWhitenoise(volume);
    }
}

function setWhitenoise(volume) {
    if(g_whitenoise) {
        //Make new volume work exponentially:
        var newVolume =  Math.pow(volume, 2) - 0.15;
        if(newVolume < 0) newVolume = 0;
        var playerVolume = 1;
        if(newVolume > 0.5){
            //Create a distorted sound effect, with the sound sometimes dropping (no signal)
            playerVolume = document.getElementById("player").volume + parseFloat(((Math.floor(Math.random() * 19) / 100) - 0.09) / 1.2);
            if(playerVolume > 1) playerVolume = 1;
            if(playerVolume < 0.1) playerVolume = 0.1;
            document.getElementById("player").volume = playerVolume;
        } else {
            document.getElementById("player").volume = 1;
        }
        $(".whitenoise-volume").html(newVolume + "; " + playerVolume);
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
        alert("Favourite for " + country.toUpperCase() + " is now " + name);
    }
}

function refreshStations() {
    var content = "";
    for (var key in g_countries) {
        //Check whether country should be checked:
        if (!g_countries.hasOwnProperty(key)) continue;
        if (key == "none") continue;
        if ($.isEmptyObject(stations[key])) continue;
        //console.log(key);

        for (var j = 0; j < stations[key].length; j++) {
            //Determine volume:
            var volume = g_countries[key]["whitenoise"];
            //Check whether the station distance can reached here:
            if(typeof stations[key][j]["relative_radius"] === "undefined" || g_countries[key]["distance"] / stations[key][j]["relative_radius"] < g_skinConfig.radius) {
                content +=
                    '<div class="col-lg-3 col-md-4 col-xs-6 thumb">' +
                    '<a class="thumbnail" href="#" onclick="setRadioStation(\'' + stations[key][j]['url'] + '\',' +
                    ' \'' + key + '\',' +
                    ' \'' + volume + '\')">' +
                    '<div class="well-sm text-center"><div class="station-image-container"><img src="' + stations[key][j]['logo'] + '"></div><br>' +
                    '<h3 class="station-title">' + stations[key][j]['name'] + '</h3>' +
                    key.toUpperCase() +
                    '</div>' +
                    '</a>' +
                    '<button class="btn btn-success btn-xs top-right" onclick="setFavouriteStation(\'' + key + '\', \'' + stations[key][j]['name'] + '\')">Favourite</button> ' +
                    '</div>';
            }
        }
    }
    $("#stationsList").html(content);
}