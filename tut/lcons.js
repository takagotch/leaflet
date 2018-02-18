var greenIcon = L.icon({
  iconUrl: 'leaf-green.png',
  shadowUrl: 'leaf-shadow.png',

  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAncor: [4, 62],
  pupupAnchor: [-3, -76]
});



var LeafIcon = L.Icon.extend({
  options:{
    shadowUrl: 'leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  }
});


var greenIcon = new LeafIcon({iconUrl: 'left-green.png'}),
    redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

L.icon = function(options){
  return new L.icon(option);
};

L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("...");
L.marker([51.459, -0.083], {icoon: redIcon}).addTo(map).bindPopup("...");
L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(map).bindPopup("...");




