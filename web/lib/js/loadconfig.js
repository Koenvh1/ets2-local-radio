var g_skinConfig = {};
var default_conf = {
    "theme": "light",
    "radius": 7500,
    "threshold": {
        "ets2": 1200,
        "ats": 4300
    },
    "whitenoise": true,
    "transition-whitenoise": true,
    "peerJSkey": "damhc79361fhto6r",
    "ets2": {
        "map": "cities-ets2.js",
        "stations": "stations-europe.js",
    },
    "ats": {
        "map": "cities-ats.js",
        "stations": "stations-america.js",
    }
};

$.getScript("./../../config.js").done(function() {
    // If custom-config was disabled (either by user or by being outdated) load the default config
    console.log(g_skinConfig["custom-config"]);
    if (g_skinConfig["custom-config"] === undefined || g_skinConfig["custom-config"] == false) {
        g_skinConfig = default_conf;
    }
}).fail(function() {
    // If the config couldn't be found or any other error arose, load the default
    g_skinConfig = default_conf;
});
