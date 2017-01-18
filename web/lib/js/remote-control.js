var id = null;
var peer = null;
var conn = null;
var connectedPeerID = null;
var controlRemote = false;

$(document).ready(function () {
    //Get PeerJS dependencies:
    $.getScript("http://cdn.peerjs.com/0.3.14/peer.js", function () {
        //Set ID for PearJS
        id = Math.floor(Math.random()*90000) + 10000;
        peer = new Peer(id, {key: g_skinConfig.peerJSkey});
        $(".peer-id").html(id);

        //Receive message logic
        peer.on('connection', function (incomingConn) {
            conn = incomingConn;
            conn.on('data', function (data) {
                receiveCommand(data);
            });
        });
    });
});

$(window).on("unload", function() {
    localStorage.setItem("volume", g_volume);
});

function receiveCommand(data) {
    var response = JSON.parse(data);
    console.log(data);
    if(response.type == "connect"){
        //Show connected
        console.log("Someone started controlling this player remotely");
        $(".remote").show();
        conn.send(JSON.stringify({
            type: "url",
            url: g_current_url,
            country: g_current_country
        }));
        conn.send(JSON.stringify({
            type: "volume",
            volume: g_volume
        }));
    }
    if(response.type == "station"){
        setRadioStation(response.url, response.country, response.volume);
    }
    if(response.type == "favourite"){
        setFavouriteStation(response.country, response.name);
    }
    if(response.type == "volume"){
        g_volume = response.volume;
        $("#volumeControl").val(response.volume * 100);
    }
    if(response.type == "url"){
        g_current_url = response.url;
        g_current_country = response.country;
        refreshStations();
    }
    if(response.type == "togglePlay"){
        togglePlay();
    }
}

function connect(peerID) {
    if(peerID == "666"){
        $("*").css({
            'font-family': '"Comic Sans MS", fantasy, serif',
            'color': 'blue',
            'background-color': 'red'
        });
    }
    conn = peer.connect(peerID);
    conn.on('open', function () {
        conn.send(JSON.stringify({
            type: "connect"
        }));
        console.log("Successfully connected");
        controlRemote = true;
        connectedPeerID = peerID;
        conn.on('data', function (data) {
            receiveCommand(data);
        });
        g_volume = 0;

        alert("Successfully connected");
        /*
         document.getElementById("player").url = "";
         document.getElementById("player").pause();
         document.getElementById("switchStation").url = "";
         document.getElementById("whitenoise").url = "";
         */
    });
    conn.on('error', function (err) {
        alert("Something went wrong while connecting: \n" + err);
    });
}

$('#connectModal').on('shown.bs.modal', function (e) {
    $("#connectText").val("");
    $("#connectText").focus();
});

$('#connectText').keypress(function (e) {
    if (e.which == 13) {
        connect($("#connectText").val());
        $("#connectModal").modal("hide");
    }
});