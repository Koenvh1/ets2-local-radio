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
    "author": "Eryman",
    "connect-other-device": "Conectar a outro dispositivo",
    "coverage-map": "Mapa de cobertura",
    "stop-playback": "Parar reprodução",
    "stations": "Estações:",
    "update-available": "Nova atualização disponível!",
    "update-now": "Atualizar agora",
    "controlled-remotely": "Este rádio está sendo controlado remotamente",
    "submit-station": "Enviar uma nova estação",
    "this-peerid": "PeerID deste dispositivo:",
    "waiting-coordinates": "Esperando por sua localização...",
    "closest-city": "A cidade mais próxima é: <span class='nearestCity'></span>, <span class='distance'></span> metros distante",
    "amount-static": "Intensidade do chiado:",
    "show-all": "Mostrar todas",
    "enter-peerid-title": "Digite a ID do dispositivo",
    "enter-peerid-body": "Por favor digite a PeerID que você vê no dispositivo ao qual quer conectar:",
    "connect": "Conectar",
    "make-favourite": "Usar como favorito"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
