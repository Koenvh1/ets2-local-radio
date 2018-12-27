var id = null;
var peer = null;
var conn = null;
var connectedPeerID = null;
var controlRemote = false;

$(document).ready(function () {
    //Get PeerJS dependencies:
        id = Math.floor(Math.random()*90000) + 10000;
        initPeer();
});

function initPeer() {
    peer = new Peer("localradio" + id);
    $(".peer-id").html(id);

    //Receive message logic
    peer.on('connection', function (incomingConn) {
        conn = incomingConn;
        conn.on('data', function (data) {
            receiveCommand(data);
        });
        /*
        conn.on('error', function (err) {
            peer.disconnect();
            peer.reconnect();
            peer.connect(connectedPeerID);
        });
        conn.on('close', function () {
            peer.disconnect();
            peer.reconnect();
            peer.connect(connectedPeerID);
        });
        */
    });

    /*
    peer.on('disconnected', function (err) {
        peer.reconnect();
        peer.connect(connectedPeerID);
    });

    peer.on('error', function (err) {
        peer.disconnect();
        peer.reconnect();
        peer.connect(connectedPeerID);
    });
    */
}

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
        connectedPeerID = response.id;
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
        togglePlayVisual(true);
    }
    if(response.type == "togglePlay"){
        togglePlay(true);
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
    conn = peer.connect("localradio" + peerID);
    conn.on('open', function () {
        conn.send(JSON.stringify({
            type: "connect",
            id: id
        }));
        console.log("Successfully connected");
        controlRemote = true;
        setTimeout(function () {
            $("#player").attr("src", "about:blank");
            $("#whitenoise").attr("src", "about:blank");
            $("#switchStation").attr("src", "about:blank");
        }, 1000);
        connectedPeerID = peerID;
        conn.on('data', function (data) {
            receiveCommand(data);
        });
        g_volume = 0;

        $("#snackbar").html("<i class='fa fa-plug'></i> Successfully connected").addClass("show");
        setTimeout(function () {
            $("#snackbar").removeClass("show");
        }, 3000);
        /*
         document.getElementById("player").url = "";
         document.getElementById("player").pause();
         document.getElementById("switchStation").url = "";
         document.getElementById("whitenoise").url = "";
         */
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