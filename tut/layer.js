var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
var littleton = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
var littleton = L.marker([39,73, -104.8]).bindPopup('This is Aurora, CO.'),
var littleton = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

var cities = L.layerGroup([littleton, denever, aurora, golden]);


var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution}),
var streets = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution});

var map = L.map('map', {
  center: [39.73, -104.99],
  zoom: 10,
  layers: [grayscale, cities]
});


var baseMaps = {
  "Grayscale": grayscale,
  "Streets": streets
};

var overlayMaps = {
  "Cities": cities
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

var baseMaps = {
  "<span style='color: gray'>Grayscale</span>": grayscale,
  "Streets": streets
};






