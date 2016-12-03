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
    "author": "Vladzz-G",
    "connect-other-device": "Savienot ar citu ierīci",
    "coverage-map": "Pārklajuma karte",
    "stop-playback": "Apturēt atskaņojumu",
    "stations": "Radiostacijas:",
    "update-available": "Atjaunojums ir pieejams!",
    "update-now": "Atjaunojiet tagad",
    "controlled-remotely": "Šis atskaņotajs tiks kontrolēts distancionāli",
    "submit-station": "Pievienot jaunu radiostaciju",
    "this-peerid": "Šis ierīces Peer ID:",
    "waiting-coordinates": "Meklē jūsu ieskš-spēles atrašanas vietas koordinātus",
    "closest-city": "Tuvāka pilsēta ir: <span class='nearestCity'></span>, <span class='distance'></span> metri no jums",
    "amount-static": "Balta trokšņa skaits:",
    "show-all": "Paradīt visu",
    "enter-peerid-title": "Ievādiet PeerID",
    "enter-peerid-body": "Lūdzu, ievādiet jūsu PeerID ierīcē, kurā jūs gribat savienot:",
    "connect": "Savienot",
    "make-favourite": "Izdarīt par favorītu"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
