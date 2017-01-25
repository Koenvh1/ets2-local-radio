//current game (ats or ets2)
var g_game = "ets2";
//current language set in ETS2 Local Radio server:
var g_language = "en-GB";
//language data:
var g_translation;
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
//last command id from desktop received:
var g_last_command = "0";
//show all radio stations:
var g_show_all = false;

function initialise() {
    console.log("Start init");
    $(document).ready(function () {
        document.getElementById("switchStation").volume = 0;
        document.getElementById("whitenoise").volume = 0;
        document.getElementById("whitenoise").play();
        if(g_skinConfig["transition-whitenoise"] == false) {
            document.getElementById("switchStation").src = "about:blank";
        }
    });

    //Check updates:
    $.getJSON("https://koenvh1.github.io/ets2-local-radio/version.json", function (dataRemote) {
        $.getJSON("/version.json", function (dataLocal) {
            if (dataLocal.version != dataRemote.version) {
                $(".update").show();
            }
        });
    });

    if(!(getBrowser().firefox || getBrowser().edge)){
        $(".unsupported-browser").show();
    }

    if (localStorage.getItem("volume") == null) {
        localStorage.setItem("volume", 1);
    }
    g_volume = localStorage.getItem("volume");
    g_whitenoise = g_skinConfig.whitenoise;
    $("#volumeControl").val(g_volume * 100);

    refreshLanguage();

    setInterval(function () {
        $.getJSON("api/", function (data) {
            refresh(data);
        });
        $.getJSON("commands/").done(function (data) {
            if(data.language != g_language){
                console.log(data.language);
                g_language = data.language;
                refreshLanguage();
            }
            if(data.game != g_game){
                g_game = data.game;
                $(".game").html(g_game);
                loadScripts();
            }
            if(g_last_command != data.id){
                console.log(data);
                g_last_command = data.id;
                if(!controlRemote) {
                    if (data.action == "stop") {
                        togglePlay();
                    }
                    if (data.action == "next") {
                        nextStation(parseInt(data.amount));
                    }
                    if (data.action == "volume") {
                        $("#volumeControl").val(parseInt($("#volumeControl").val()) + parseInt(data.amount));
                        g_volume = parseInt($("#volumeControl").val()) / 100;
                    }
                    if (data.action == "favourite") {
                        if(g_current_country != null) {
                            var index = stations[g_current_country].map(function (e) {
                                return e.url;
                            }).indexOf(g_current_url);
                            if(index != -1) {
                                setFavouriteStation(g_current_country, stations[g_current_country][index].name);
                            }
                        }
                    }
                }
            }
        });
    }, 250);

    $('#volumeControl').on("change mousemove", function () {
        if (controlRemote) {
            if (!conn.open) {
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
    
    $("#player").on("error", function (e) {
        if($("#player").attr("src") != "about:blank") {
            $("#player").attr("src", "lib/audio/station_error.mp3");
            console.log(e);
        }
    });
}

function refresh(data) {

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

    //Test whether location is real and not disconnected
    if (!(data.Physics.CoordinateX == 0.0 && data.Physics.CoordinateY == 0.0 && data.Physics.CoordinateZ == 0.0) || g_show_all) {
        for (var i = 0; i < cities.length; i++) {
            //Fix uppercase issues (*cough* SCS):
            cities[i]["country"] = cities[i]["country"].toLowerCase();
            //Calculate distance
            var distance = Math.sqrt(Math.pow((data.Physics.CoordinateX - cities[i]["x"]), 2) + Math.pow((data.Physics.CoordinateZ - cities[i]["z"]), 2));
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
            if (distance < g_skinConfig.radius * country_properties[cities[i]["country"]]["relative_radius"] * relative_city_radius || g_show_all) {
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
        if (!available_countries.hasOwnProperty(country_lowest_distance)) {
            //console.log("Lowest distance country unavailable");
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
        }

        available_countries = sortObject(available_countries);

        $(".nearestCity").html(city_lowest_distance + "; " + country_lowest_distance);
        $(".distance").html(parseFloat(lowest_distance).toFixed(2));

        if (!available_countries.hasOwnProperty(g_current_country) ||
            (available_countries[country_lowest_distance]["distance"] + g_skinConfig.treshold[g_game] < available_countries[g_current_country]["distance"] &&
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
            refreshStations();
        }

        if (Object.keys(available_countries).sort().toString() != Object.keys(g_countries).sort().toString()) {
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
    g_current_url = url;

    if(conn != null && conn.open && !controlRemote){
        conn.send(JSON.stringify({
            type: "url",
            url: url,
            country: country
        }));
    }
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
        $("#player").stop();
        $("#switchStation").stop();
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
                //document.getElementById("player").play();
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
    var index = stations[country].map(function (e) {
        return e.url;
    }).indexOf(url);

    $(".current-station").html(stations[country][index].name);
    $(".current-station-image").attr("src", stations[country][index].logo);

    document.getElementById('player').play();
    document.getElementById('whitenoise').play();
    $("#stopPlayback").attr("src", "lib/img/stop-button.png");

    $.get("station/" + stations[country][index].name);
}

function setWhitenoise(volume) {
    if(g_whitenoise) {
        //Make new volume work exponentially:
        var newVolume =  Math.pow(volume, 2) - 0.15;
        if(newVolume < 0) newVolume = 0;
        newVolume = newVolume * g_volume;
        if(newVolume > g_volume) newVolume = g_volume;
        var playerVolume = g_volume;
        if(newVolume > 0.5 * g_volume){
            //Create a distorted sound effect, with the sound sometimes dropping (no signal)
            playerVolume = document.getElementById("player").volume + parseFloat((((Math.floor(Math.random() * 19) / 100) - 0.09) / 0.8) * g_volume);
            if(playerVolume > g_volume) playerVolume = g_volume;
            if(playerVolume < 0) playerVolume = 0;
            document.getElementById("player").volume = playerVolume;
        } else {
            document.getElementById("player").volume = g_volume;
        }
        $(".whitenoise-volume").html(parseFloat(newVolume).toFixed(2) + "; " + parseFloat(playerVolume).toFixed(2));
        document.getElementById("whitenoise").volume = parseFloat(newVolume);
        //document.getElementById("whitenoise").play();
    } else {
        document.getElementById("whitenoise").volume = 0;
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
        //alert("Favourite for " + country.toUpperCase() + " is now " + name);
    }
}

function togglePlay() {
    if(controlRemote){
        if(!conn.open){
            //If connection closed, reconnect
            conn = peer.connect(connectedPeerID);
        }
        conn.send(JSON.stringify({
            type: "togglePlay"
        }));

        if($("#stopPlayback").attr("src") == "lib/img/stop-button.png"){
            $("#stopPlayback").attr("src", "lib/img/play-button2.png");
        } else {
            $("#stopPlayback").attr("src", "lib/img/stop-button.png");
        }
    } else {
        if (document.getElementById('player').paused) {
            document.getElementById('player').play();
            document.getElementById('whitenoise').play();
            $("#stopPlayback").attr("src", "lib/img/stop-button.png");
        } else {
            document.getElementById('player').pause();
            document.getElementById('whitenoise').pause();
            $("#stopPlayback").attr("src", "lib/img/play-button2.png");
        }
    }
}

function nextStation(amount) {
    try {
        if(!g_stations.length == 0) {
            var index = -1;
            for (var i = 0; i < g_stations.length; i++) {
                if (g_stations[i]["url"] == g_current_url && g_stations[i]["country"] == g_current_country) {
                    index = i;
                    break;
                }
            }
            index = index + amount;
            if (index < 0) {
                index = g_stations.length + index;
            }
            while (index >= g_stations.length) {
                index = index - g_stations.length;
            }
            setRadioStation(g_stations[index]["url"], g_stations[index]["country"], g_stations[index]["volume"]);
        }
    } catch (ex) {
        console.log(ex);
    }
}

function refreshStations() {
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

                /*
                var relative_whitenoise = 1;
                if (typeof city_properties[key]["relative_whitenoise"] !== "undefined") {
                    relative_whitenoise = city_properties[key]["relative_whitenoise"];
                }
                */

                var reception = Math.pow(parseFloat(g_countries[key]["whitenoise"]), 2) - 0.15;
                if(reception  < 0.05){
                    reception = "5";
                } else if(reception < 0.20){
                    reception = "4";
                } else if(reception < 0.35){
                    reception = "3";
                } else if(reception < 0.50){
                    reception = "2";
                } else if(reception < 0.75){
                    reception = "1";
                } else {
                    reception = "0";
                }

                content +=
                    '<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 thumb">' +
                    '<div class="thumbnail ' + ((g_current_url == stations[key][j]['url'] && g_current_country == key) ? "thumbnail-selected" : "") + '" href="#" onclick="setRadioStation(\'' + stations[key][j]['url'] + '\',' +
                    ' \'' + key + '\',' +
                    ' \'' + volume + '\'); document.getElementById(\'player\').play(); event.preventDefault();">' +
                    '<div class="well-sm text-center"><div class="station-image-container"><img src="' + stations[key][j]['logo'] + '"></div><br>' +
                    '<h3 class="station-title overflow">' + stations[key][j]['name'] + '</h3>' +
                    '<span class="overflow">' + (typeof country_properties[key].name !== "undefined" ? country_properties[key].name : key.toUpperCase()) + ' ' +
                    (typeof country_properties[key].code !== "undefined" ? "<img src='lib/flags/" + country_properties[key].code + ".svg' class='flag' alt='Flag'>" : "") +
                    '<img src="lib/img/signal/' + reception + '.png" class="signal"></span>' +
                    '</div>' +
                    '<div class="play-button"></div>' +
                    '</div>' +
                    ((localStorage.getItem("fav-" + key) == stations[key][j]['name']) ? '' : '<button class="btn btn-default btn-xs top-right lang-make-favourite" onclick="setFavouriteStation(\'' + key + '\', \'' + stations[key][j]['name'] + '\')">' + ((typeof g_translation !== 'undefined' && typeof g_translation['web']['make-favourite'] !== 'undefined') ? g_translation['web']['make-favourite'] : 'Make favourite') + '</button> ') +
                    '</div>';
            }
        }
    }
    $("#stationsList").html(content);
    g_stations = available_stations;
}

function refreshLanguage() {
    $.getJSON("lang/" + g_language + ".json", function (data) {
        g_translation = data;
        for(var key in data.web){
            $(".lang-" + key).html(data.web[key]);
        }
    });
}

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

function getBrowser() {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    return {
        opera: isOpera,
        firefox: isFirefox,
        safari: isSafari,
        ie: isIE,
        edge: isEdge,
        chrome: isChrome
    };
}