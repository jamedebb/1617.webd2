// global var googlemaps
var googlemaps;

google.maps.event.addDomListener(window, 'load', initMaps);

/*
*Initialiseer de Google Maps
*/
function initMaps() {

    // div met id divMap declareren in Javascript
    var divMap = document.getElementById('divMap');

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(51.01576337066268, 3.718784835443092)
        // LET GOED OP DE HOOFDLETTERS L en L
    };

    // google maps toewijzen aan de divMap
    googlemaps = new google.maps.Map(divMap, mapOptions);

    // json inladen en via de callback functie de mapstijlen aanpassen
    fetchJSONFile('https://api.myjson.com/bins/cjw0d', function(styles){

        googlemaps.setOptions({
            styles: styles
        })
    });
}