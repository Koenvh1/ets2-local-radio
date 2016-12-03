/*
 * LANGUAGE FILE
 *
 * This is a language file, it contains all text for a specific language.
 * The text here applies to all elements that have the "lang-NAME" class.
 *
 * Please also include your name in the author section. This could simply be "Translated by John Doe", but you may also
 * include a link to your website/profile (as long as it is child friendly of course :-) )
 */

var translation = {
    "author": "",
    "connect-other-device": "Connect to another device",
    "coverage-map": "Coverage map",
    "stop-playback": "Stop playback",
    "stations": "Stations:",
    "update-available": "An update is available!",
    "update-now": "Update now",
    "controlled-remotely": "This player is being controlled remotely",
    "submit-station": "Submit a new station",
    "this-peerid": "The PeerID of this device:",
    "waiting-coordinates": "Waiting for your in-game coordinates...",
    "closest-city": "Closest city is: <span class='nearestCity'></span>, <span class='distance'></span> meters away",
    "amount-static": "Amount of static:",
    "show-all": "Toggle show all",
    "enter-peerid-title": "Enter the PeerID",
    "enter-peerid-body": "Please enter the PeerID you see on the device you want to connect to:",
    "connect": "Connect",
    "make-favourite": "Make favourite"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
