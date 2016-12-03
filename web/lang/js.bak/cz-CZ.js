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
    "connect-other-device": "Připojit k jinému zařízení",
    "coverage-map": "Mapa pokrytí",
    "stop-playback": "Zastavit playback",
    "stations": "Stanice:",
    "update-available": "Je dostupná aktualizace!",
    "update-now": "Aktualizovat nyní",
    "controlled-remotely": "Tento přehrávač je ovládán na dálku",
    "submit-station": "Přidat novou stanici",
    "this-peerid": "PeerID tohoto zařízení:",
    "waiting-coordinates": "Čekání na vaše souřadnice ve hře",
    "closest-city": "Nejbližší město je: <span class='nearestCity'></span>, <span class='distance'></span> metrů daleko",
    "amount-static": "Síla šumu:",
    "show-all": "Přepnout zobrazení",
    "enter-peerid-title": "Zadat PeerID",
    "enter-peerid-body": "Prosím, zadejte PeerID, které lze vidět na zařízení, ke kterému se chcete připojit:",
    "connect": "Připojit",
    "make-favourite": "Přidat do oblíbených"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}