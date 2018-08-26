var map = L.map('map', {
  crs: L.CRS.Simple
});


var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('uqm_map_full.png', bounds).addTo(map);

map.fitBounds(bounds);

var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -5
});

var bounds = [[-26.5,-25],[1021.5,1023]];
var image = L.imageOverlay('uqm_map_full.png', bounds).addTo(map);

var sol = L.latLng([ 145, 175.2 ]);
L.marker(sol).addTo(map);
map.setView( [70, 120], 1);


var yx = L.latLng;
var xy = function(x,y){
  if (L.Util.isArray(x)){
    return yx(x[1], x[0]);
  }
  return yx(y, x);
}

var sol = xy( 175.2, 145.0);
var mizar = xy( 41.6, 130.1);
var kruegerZ = xy( 13.4, 56.5);
var deneb = xy( 218.7, 8.3);

L.marker(     sol).addTo(map).bindPopup(     'Sol');
L.marker(   mizar).addTo(map).bindPopup(   'Mizar');
L.marker(kruegerZ).addTo(map).bindPopup('Krueger-Z');
L.marker(   deneb).addTo(map).bindPopup(    'Deneb');

var trabel = L.polyline([sol, deneb]).addTo(map);

