//.css
//body{
//  padding: 0;
//  margin: 0;
//}
//html, body, #map{
//  height: 100%;
//  width: 100vw;
//}
//
//meta name="viewport" content="width=device-width", initial-scale=1.0, maximum-scale=1.0, user-scaleable=no

var map = L.map('map').fitWorld();
L.tileLayer('https://api.tiles.mapbox.com/v4/MapID/{z}/{x}/{y}.png?access_token={acessToken}',{
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery C <a href="http://mapbox.com">Mapbox</a>'
  maxZoom: 18
}).addTo(map);

map.locate({setView: true, maxZoon: 16});

function onLocationFound(e){
  var radius = e.accuracy / 2;

  L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " + radius + " meters form this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('loactionfound', onLocationFound);

function onLocationError(e){
  alert(e.message);
}
map.on('locationerror', onLocationError);




