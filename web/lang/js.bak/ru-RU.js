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
    "connect-other-device": "Подключить другое устройство",
    "coverage-map": "Покрытие карты",
    "stop-playback": "Остановить проигрывание",
    "stations": "Радиостанции:",
    "update-available": "Обновление доступно!",
    "update-now": "Обновить сейчас",
    "controlled-remotely": "Этот проигрыватель будет управляться дистанционно",
    "submit-station": "Добавить новую радиостанцию",
    "this-peerid": "Номер пира этого устройства:",
    "waiting-coordinates": "Определение ваших координатов местоположения в игре...",
    "closest-city": "Ближайщий город: <span class='nearestCity'></span>, <span class='distance'></span> метров от вас",
    "amount-static": "Количество белого шума:",
    "show-all": "Показать все",
    "enter-peerid-title": "Ввести помер пира",
    "enter-peerid-body": "Пожалуйста, введите номер вашего пира в устройстве, в котором хотите подключиться:",
    "connect": "Соединиться",
    "make-favourite": "Сделать избранным"
};

//The following loop applies the translations in the translation object to the web page.
for(var key in translation){
    $(".lang-" + key).html(translation[key]);
}
