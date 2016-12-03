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
    "author": "Zniwek",
    "connect-other-device": "Połącz z innym urządzeniem",
    "coverage-map": "Mapa pokrycia",
    "stop-playback": "Zatrzymaj odtwarzanie",
    "stations": "Stacje:",
    "update-available": "Aktualizacja jest dostępna!",
    "update-now": "Aktualizuj teraz",
    "controlled-remotely": "Ten odtwarzacz jest sterowany zdalnie",
    "submit-station": "Zgłoś nową stację",
    "this-peerid": "PeerID tego urządzenia:",
    "waiting-coordinates": "Oczekiwanie na współrzędne z gry...",
    "closest-city": "Najbliższe miasto to <span class='nearestCity'></span>, <span class='distance'></span> metrów stąd",
    "amount-static": "Siła zakłóceń:",
    "show-all": "Przełącz pokazywanie wszystkich",
    "enter-peerid-title": "Wpisz PeerID",
    "enter-peerid-body": "Wpisz proszę PeerID urządzenia, z którym chcesz się połączyć",
    "connect": "Połącz",
    "make-favourite": "Wybierz jako ulubioną"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
