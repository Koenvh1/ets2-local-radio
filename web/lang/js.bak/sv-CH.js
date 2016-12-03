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
    "author": "Swedish Chef",
    "connect-other-device": "Cunnect tu ouzeer defice",
    "coverage-map": "Cuferege-a mep",
    "stop-playback": "Stup pleybeck",
    "stations": "Stetiuns:",
    "update-available": "Un updete-a is ifeeleble!",
    "update-now": "Updete-a nuo",
    "controlled-remotely": "Zees pleyer is beeng cuntrulled remutely",
    "submit-station": "Suobmeet a nuo stetiun",
    "this-peerid": "Zee-a PeerID ouff zees defice:",
    "waiting-coordinates": "Veeting fur yuour in-geme-a cuordeenetes...",
    "closest-city": "Clusest ceety is: <span class='nearestCity'></span>, <span class='distance'></span> meters ivey",
    "amount-static": "Emuount ouff stetic:",
    "show-all": "Tuggle-a shuo ill",
    "enter-peerid-title": "Enter zee-a PeerID",
    "enter-peerid-body": "Pleese-a inter zee-a PeerID yuou see-a oun zee-a defice-a yuou vuont tu cunnect tu:",
    "connect": "Cunnect",
    "make-favourite": "Meke-a fefuourite"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
