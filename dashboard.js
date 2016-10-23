//skinConfig global:
var g_skinConfig;
//countries near you global:
var g_countries = [];
//current country for that radio:
var g_current_country;

Funbit.Ets.Telemetry.Dashboard.prototype.initialize = function (skinConfig, utils) {
    //
    // skinConfig - a copy of the skin configuration from config.json
    // utils - an object containing several utility functions (see skin tutorial for more information)
    //

    // this function is called before everything else, 
    // so you may perform any DOM or resource initializations / image preloading here

    g_skinConfig = skinConfig;

    $.getScript("/skins/" + skinConfig.name + "/cities/" + skinConfig.map);
    $.getScript("/skins/" + skinConfig.name + "/stations/" + skinConfig.stations);
    $.getScript("/skins/" + skinConfig.name + "/bootstrap.js");

    // return to menu by a click
    $(document).add('body').on('click', function () {
        //window.history.back();
    });

    $(document).add('div[data-station]').on('click', function () {
       //setRadioStation($(this).attr("data-station"));
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
    var availableCountries = [];
    var whitenoise = {none: 0};

    var location = data.truck.placement;
    if(!(location.x == 0.0 && location.y == 0.0 && location.z == 0.0)){

        for(var i = 0; i < cities.length; i++){
            var distance = Math.sqrt(Math.pow((location["x"] - cities[i]["x"]), 2) + Math.pow((location["z"] - cities[i]["z"]), 2));
            if(distance < lowestDistance){
                lowestDistance = distance;
                countryLowestDistance = cities[i]["country"];
                cityLowestDistance = cities[i]["realName"];
                //$("#lowestDistance").html(countryLowestDistance);
            }
            if(distance < g_skinConfig.radius) {
                if(availableCountries.indexOf(cities[i]["country"]) === -1) {
                    availableCountries.push(cities[i]["country"]);
                    whitenoise[cities[i]["country"]] = distance / g_skinConfig.radius;
                } else {
                    if(whitenoise[cities[i]["country"]] > distance / g_skinConfig.radius){
                        whitenoise[cities[i]["country"]] = distance / g_skinConfig.radius;
                    }
                }
            }
        }

        availableCountries.sort();

        $(".nearestCity").html(cityLowestDistance);
        $(".distance").html(utils.formatFloat(lowestDistance, 1));

        if(availableCountries.length > 0) {
            if (availableCountries.toString() != g_countries.toString()) {
                console.log("g_countries: " + g_countries + " availableCountries: " + availableCountries);
                g_countries = availableCountries;

                if (availableCountries.indexOf(g_current_country) === -1) {
                    setRadioStation(stations[countryLowestDistance][0]["url"], countryLowestDistance, whitenoise[countryLowestDistance]);
                }

                var content = "";
                for (var country = 0; country < availableCountries.length; country++) {
                    for (var j = 0; j < stations[availableCountries[country]].length; j++) {
                        var volume = whitenoise[availableCountries[country]];
                        //$("#stationsList").append('<a class="list-group-item" onclick="setRadioStation(\'' + stations[countryLowestDistance][j]['url'] + '\')">' + stations[countryLowestDistance][j]['name'] + '</a>');
                        content +=
                            '<div class="col-lg-3 col-md-4 col-xs-6 thumb" onclick="setRadioStation(\'' + stations[availableCountries[country]][j]['url'] + '\',' +
                            ' \'' + availableCountries[country] + '\',' +
                            ' \'' + volume + '\')">' +
                            '<a class="thumbnail" href="#">' +
                            '<div class="well-sm text-center"><div style="height: 70px; width: 100%"><img style="width: auto; height: auto; max-height: 70px; max-width: 100%" src="' + stations[availableCountries[country]][j]['logo'] + '"></div><br>' +
                            '<h3>' + stations[availableCountries[country]][j]['name'] + '</h3>' +
                            availableCountries[country].toUpperCase() +
                            '</div>' +
                            '</a>' +
                            '</div>';
                    }
                }
                $("#stationsList").html(content);
            } else {
                setWhitenoise(whitenoise[g_current_country]);
            }
        } else {
            setWhitenoise(1);
        }
    }
};

function setRadioStation(url, country, volume) {
    if(controlRemote){
        conn.send(JSON.stringify({
            url: url,
            country: country,
            volume: volume
        }));
    } else {
        g_current_country = country;
        document.getElementById("player").src = url;
        //document.getElementById("player").play();
        setWhitenoise(volume);
    }
}

function setWhitenoise(volume) {
    if(g_skinConfig.whitenoise) {
        var newVolume =  Math.pow(volume, 2) - 0.1;
        if(newVolume < 0) newVolume = 0;
        if(newVolume > 0.5){
            var playerVolume = document.getElementById("player").volume + parseFloat(((Math.floor(Math.random() * 19) / 100) - 0.09) / 1.2);
            if(playerVolume > 1) playerVolume = 1;
            if(playerVolume < 0.2) playerVolume = 0.2;
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