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
    "connect-other-device": "Anslut till en annan enhet",
    "coverage-map": "Täckningskarta",
    "stop-playback": "Stoppa uppspelning",
    "stations": "Stationer:",
    "update-available": "Det finns en uppdatering tillgänglig!",
    "update-now": "Uppdatera nu",
    "controlled-remotely": "Denna spelare är fjärrstyrd",
    "submit-station": "Lägg till en ny station",
    "this-peerid": "Denna enhets PeerID:",
    "waiting-coordinates": "Väntar på dina koordinater i spelet...",
    "closest-city": "Närmaste staden är: <span class='nearestCity'></span>, <span class='distance'></span> meter bort",
    "amount-static": "Mängd brus:",
    "show-all": "Växla visa alla",
    "enter-peerid-title": "Skriv in PeerID",
    "enter-peerid-body": "Skriv in PeerID av enheten du vill ansluta till:",
    "connect": "Anslut",
    "make-favourite": "Lägg till som favorit"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
