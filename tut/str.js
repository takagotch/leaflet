//link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/leaflet.css"
//  itegrity="sha512-xxxxxxxxxxxxxxxx"
//  crossorigin=""/
//
//script src="https://uupkg.com/leaflet@1.3.1/dist/leaflet.js"
//  integrity="sha512-/xxxxxxxxxxxxxxx"
//  crossorigin=""
//
//div id="mapid"
//
//#mapid { height: 180px; }
//
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//
L,tileLayer(''
  attribution: '',
  maxZoon: 18,
  id: '',
  accessToken: ''
).addTo(mymap);
//
var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.09], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);


var polygon = L.polygon(
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
).addTo(mymap);

//
marker.bindPopup("<b></b><br>").openPopup();
circle.bindPopup("...");
polygon.bindPopup("...");

//function onMap(e){
//  alert("..." + e.latlng);
//}
//mymap.on('click', onMapClick);


var popup = L.popup();

function onMapClick(e){
  popup
	.setLatLng(e.latlng)
	.setContent("You clicked the map at" + e.latlng.toString())
	.openOn(mymap);
}

mymap.on('click', onMapClick);


