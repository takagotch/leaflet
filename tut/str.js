//

//

//
var circle = L.circle([], {
  color: '',
  fillColor: '',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);


var polygon = L.polygon(
  [],
  [],
  []
).addTo(mymap);

//
marker.bindPopup("<b></b><br>").openPopup();
circle.bindPopup("");
polygon.bindPopup("");

var popup = L.popup();

function onMapClick(e){
  popup
	.setLatLng(e.latlng)
	.setContent("You clicked the map at" + e.latlng.toString())
	.openOn(mymap);
}

mymap.on('click', onMapClick);


