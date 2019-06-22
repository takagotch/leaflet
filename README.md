### leaflet
---

http://leafletjs.com/

https://github.com/Leaflet/Leaflet


```js
var map L.map().setView([], 13);
L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copuright">OpenStreetMap</a> contributors'}).(map);
L.marker([51.5, -0.09]).addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles/mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contribution...',
  maxZoom: 18,
  id: 'mapox.streets',
  accessToken: 'your.mapbox.acces.token'
}
).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5;
  radius: 500
}).addTo(mymap);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Helllo world!</b><br>I am a popup.</b>").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);
```

```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/leaflet@1.5.1/dist/leaflet.css"
  integrity="sha512-xwE/xxxxxxxxxxxx"
  crossorigin="" />

<script src="http://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
  integrity="sha512-xxxx"
  crossorigin=""></script>

<div id="mapid"></div>
```

```css
#mapid { height: 180px; }
```

