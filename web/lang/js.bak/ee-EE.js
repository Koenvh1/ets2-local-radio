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
    "author": "martinuS",
    "connect-other-device": "Ühendu teise seadmega",
    "coverage-map": "Levialakaart",
    "stop-playback": "Lõpeta mängimine",
    "stations": "Jaamad:",
    "update-available": "Uuendus on saadaval!",
    "update-now": "Uuenda nüüd",
    "controlled-remotely": "See pleier on distantsjuhtimise all",
    "submit-station": "Esita uus jaam",
    "this-peerid": "Selle seadme PeerID:",
    "waiting-coordinates": "Ootan sinu mängusiseseid koordinaate...",
    "closest-city": "Lähim linn: <span class='nearestCity'></span>, <span class='distance'></span> meetri kaugusel",
    "amount-static": "Müra kogus",
    "show-all": "Näita kõiki",
    "enter-peerid-title": "Sisesta PeerID",
    "enter-peerid-body": "Palun sisesta seadme PeerID, kuhu soovid ühilduda:",
    "connect": "Ühenda",
    "make-favourite": "Märgi lemmikuks"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
