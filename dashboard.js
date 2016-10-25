//current version:
var version = "0.0.3";
//skinConfig global:
var g_skinConfig;
//countries near you global:
var g_countries = {};
//current country for that radio:
var g_current_country;
//nearest country:
var g_last_nearest_country = "";

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
                console.log(data);
                if(data == "CONNECT"){
                    //Show connected
                    console.log("Someone started controlling this player remotely");
                    $(".remote").show();
                }
                if (data.substring(0, 1) == "{") {
                    //If an object, set radio
                    var obj = JSON.parse(data);
                    setRadioStation(obj.url, obj.country, obj.volume);
                }
            });
        });
    });


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

    // round truck speed
    data.truck.speedRounded = Math.abs(data.truck.speed > 0
        ? Math.floor(data.truck.speed)
        : Math.round(data.truck.speed));

    // other examples:

    // convert kilometers per hour to miles per hour
    data.truck.speedMph = data.truck.speed * 0.621371;
    // convert kg to t
    data.trailer.mass = (data.trailer.mass / 1000.0) + 't';
    // format odometer data as: 00000.0
    data.truck.odometer = utils.formatFloat(data.truck.odometer, 1);
    // convert gear to readable format
    data.truck.gear = data.truck.gear > 0 ? 'D' + data.truck.gear : (data.truck.gear < 0 ? 'R' : 'N');
    // convert rpm to rpm * 100
    data.truck.engineRpm = data.truck.engineRpm / 100;
    // return changed data to the core for rendering
	
    return data;
};

Funbit.Ets.Telemetry.Dashboard.prototype.render = function (data, utils) {
    //
    // data - same data object as in the filter function
    // utils - an object containing several utility functions (see skin tutorial for more information)
    //

    var countryLowestDistance = "nothing";
    var cityLowestDistance = "nothing";
    var lowestDistance = 999999999999999999;
    var availableCountries = {
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
            //Calculate distance
            var distance = Math.sqrt(Math.pow((location["x"] - cities[i]["x"]), 2) + Math.pow((location["z"] - cities[i]["z"]), 2));
            if(distance < lowestDistance){
                //Write lowest distance
                lowestDistance = distance;
                countryLowestDistance = cities[i]["country"];
                cityLowestDistance = cities[i]["realName"];
                //$("#lowestDistance").html(countryLowestDistance);
            }
            if(distance < g_skinConfig.radius) {
                //Add country to availableCountries
                if(!availableCountries.hasOwnProperty(cities[i]["country"])) {
                    availableCountries[cities[i]["country"]] = {
                        country: cities[i]["country"],
                        distance: distance,
                        whitenoise: distance / g_skinConfig.radius
                    }
                } else {
                    //Set whitenoise if there is a closer city in that country
                    if(availableCountries[cities[i]["country"]]["whitenoise"] > distance / g_skinConfig.radius){
                        availableCountries[cities[i]["country"]]["whitenoise"] = distance / g_skinConfig.radius;
                        availableCountries[cities[i]["country"]]["distance"] = distance;
                    }
                }
            }
        }

        $(".nearestCity").html(cityLowestDistance);
        $(".distance").html(utils.formatFloat(lowestDistance, 1));

        if(!availableCountries.hasOwnProperty(g_current_country) ||
            (availableCountries[countryLowestDistance]["distance"] + g_skinConfig.treshold < availableCountries[g_current_country]["distance"] &&
            g_last_nearest_country != countryLowestDistance)) {
            //If current station country is not close enough OR (the distance + treshold is larger than the new country's distance and the last station wasn't set manually.
            g_last_nearest_country = countryLowestDistance;
            setRadioStation(stations[countryLowestDistance][0]["url"], countryLowestDistance, availableCountries[countryLowestDistance]["whitenoise"]);
        }

        if(Object.keys(availableCountries).sort().toString() != Object.keys(g_countries).sort().toString()) {
            //If they don't contain the same keys (ie. a country update)
            g_countries = availableCountries;

            var content = "";
            for (var key in availableCountries) {
                if (!availableCountries.hasOwnProperty(key)) continue;
                if (key == "none") continue;
                if ($.isEmptyObject(stations[key])) continue;
                //console.log(key);
                for (var j = 0; j < stations[key].length; j++) {
                    var volume = availableCountries[key]["whitenoise"];
                    //$("#stationsList").append('<a class="list-group-item" onclick="setRadioStation(\'' + stations[countryLowestDistance][j]['url'] + '\')">' + stations[countryLowestDistance][j]['name'] + '</a>');
                    content +=
                        '<div class="col-lg-3 col-md-4 col-xs-6 thumb" onclick="setRadioStation(\'' + stations[key][j]['url'] + '\',' +
                        ' \'' + key + '\',' +
                        ' \'' + volume + '\')">' +
                        '<a class="thumbnail" href="#">' +
                        '<div class="well-sm text-center"><div class="station-image-container"><img src="' + stations[key][j]['logo'] + '"></div><br>' +
                        '<h3 class="station-title">' + stations[key][j]['name'] + '</h3>' +
                        key.toUpperCase() +
                        '</div>' +
                        '</a>' +
                        '</div>';
                }
            }
            $("#stationsList").html(content);

        } else {
            setWhitenoise(availableCountries[g_current_country]["whitenoise"]);
        }
    }
};

function setRadioStation(url, country, volume) {
    if(controlRemote){
        if(!conn.open){
            //If connection closed, reconnect
            conn = peer.connect(connectedPeerID);
        }
        conn.send(JSON.stringify({
            url: url,
            country: country,
            volume: volume
        }));
    } else {
        //Set current listening country for when crossing the border
        g_current_country = country;
        document.getElementById("player").src = url;
        //document.getElementById("player").play();
        setWhitenoise(volume);
    }
}

function setWhitenoise(volume) {
    if(g_skinConfig.whitenoise) {
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
