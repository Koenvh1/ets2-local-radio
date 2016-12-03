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
    "author": "Preložil ZelvaCZ",
    "connect-other-device": "Pripojiť k inému zariadeniu",
    "coverage-map": "Mapa pokrytia",
    "stop-playback": "Zastaviť playback",
    "stations": "Stanice:",
    "update-available": "Je dostupná aktualizácia!",
    "update-now": "Aktualizovať teraz",
    "controlled-remotely": "Tento prehrávač je ovládany na diaľku",
    "submit-station": "Pridať novú stanicu",
    "this-peerid": "PeerID tohto zariadenia:",
    "waiting-coordinates": "Čakanie na súradnice v hre...",
    "closest-city": "Najbližšie mesto je: <span class='nearestCity'></span>, <span class='distance'></span> metrov ďaleko",
    "amount-static": "Množstvo šumu:",
    "show-all": "Prepnúť režim zobrazenia",
    "enter-peerid-title": "Zadajte PeerID",
    "enter-peerid-body": "Prosím zadajte PeerID, ktoré môžete vidieť u zariadenia, ku ktorému sa chcete pripojiť:",
    "connect": "Pripojiť",
    "make-favourite": "Pridať k obľúbeným"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
