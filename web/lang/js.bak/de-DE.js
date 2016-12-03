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
    "connect-other-device": "Mit anderem Gerät verbinden",
    "coverage-map": "Abdeckungs-Karte", // need to think about this a bit more...
    "stop-playback": "Abspielen beenden",
    "stations": "Stationen:",
    "update-available": "Ein Update ist verfügbar!",
    "update-now": "Jetzt updaten",
    "controlled-remotely": "Dieser Player wird ferngesteuert",
    "submit-station": "Neue Station übermitteln",
    "this-peerid": "Die PeerID dieses Gerätes:",
    "waiting-coordinates": "Warten auf Deine Spiel-Koordinaten...",
    "closest-city": "Nächste Stadt: <span class='nearestCity'></span>, <span class='distance'></span> Meter entfernt",
    "amount-static": "Stärke des Rauschens:",
    "show-all": "Alle anzeigen an/aus",
    "enter-peerid-title": "PeerID eingeben",
    "enter-peerid-body": "Bitte gib die PeerID ein, die Du auf dem zu verbindenden Gerät siehst:",
    "connect": "Verbinden",
    "make-favourite": "Zum Favoriten machen"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
