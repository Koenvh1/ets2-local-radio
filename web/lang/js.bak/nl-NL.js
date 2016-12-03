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
    "connect-other-device": "Verbind met een ander apparaat",
    "coverage-map": "Dekkingskaart",
    "stop-playback": "Stop afspelen",
    "stations": "Zenders:",
    "update-available": "Er is een update beschikbaar!",
    "update-now": "Nu updaten",
    "controlled-remotely": "Deze speler wordt op afstand bestuurd",
    "submit-station": "Nieuwe radiozender toevoegen",
    "this-peerid": "PeerID van dit apparaat:",
    "waiting-coordinates": "Op zoek naar de coördinaten in het spel...",
    "closest-city": "Dichtstbijzijnde stad: <span class='nearestCity'></span>, op <span class='distance'></span> meter afstand",
    "amount-static": "Hoeveelheid ruis:",
    "show-all": "Alles bekijken in- of uitschakelen",
    "enter-peerid-title": "Voer het PeerID in",
    "enter-peerid-body": "Voer alstublieft het PeerID van het apparaat waarmee u wilt verbinden:",
    "connect": "Verbinden",
    "make-favourite": "Maak favoriet"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
