const mapboxToken = 'pk.eyJ1IjoiZXJpa2F5YWxhIiwiYSI6ImNrcHIzMDJ0czAwY3kycG8xZThoeWxmeG0ifQ.xyavcdZVV_k7nE89S0TNqA';
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4936, 29.4241],
    zoom: 12
})
// call function to create method and give initial point
let marker;
// call addMapEvent AFTER the marker has been initially set
addMapEvent();
// create new geocoder and assign to variable
let geocoder = setGeocoder();
addGeocoderToMap(geocoder);

// creates and returns a new GeoCoder (search box)
function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

// adds event listener to geocoder and sets new marker location
function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
    geocoder.on('result', function (event) {
        console.log(event);
        if (marker) {
            marker.remove()
        }
        getMarker(event.result.geometry.coordinates).setPopup(getPopup(event.result.place_name)
        ).togglePopup()
    })
}

// creates the marker
function getMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

// adds event to map that changes location of marker based
// on where the user clicks
function addMapEvent() {
    map.on('click', function (event) {
        console.log(event.lngLat);
        if (!marker) {
            marker = getMarker(event.lngLat);
        } else {
            marker.setLngLat(event.lngLat);
        }
    })
}

function getPopup(textDetails) {
    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}