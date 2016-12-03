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
    "connect-other-device": "Connectar a otro dispositivo",
    "coverage-map": "Mapa de cobertura",
    "stop-playback": "Parar reproducion",
    "stations": "Estaciones:",
    "update-available": "Una actualization esta disponible!",
    "update-now": "Actualizar ahora",
    "controlled-remotely": "El dispositivo esta siendo usado remotamente",
    "submit-station": "Agregar nueva estacion",
    "this-peerid": "El PeerID de este dispositivo:",
    "waiting-coordinates": "Esperando por tus coordenadas en el juego...",
    "closest-city": "La ciudad mas cerca es: <span class='nearestCity'></span>, <span class='distance'></span> metros lejos",
    "amount-static": "Cantidad de estatica:",
    "show-all": "Enseñar todo",
    "enter-peerid-title": "Entre el PeerID",
    "enter-peerid-body": "Por favor entrar el PeerID del dispositivo que quieres connectar con:",
    "connect": "Connectar",
    "make-favourite": "Hacer favorito"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
