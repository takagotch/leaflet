//.json
var geojsonFeature = {
  "type": "Feature",
  "properties": {
    "name": "Coors Field",
    "amenity": "Baseball Stadium",
    "popupContent": "This is where the Rockies paly!"
  },
  "geometry" : {
    "type": "Point",
    "coordinates": [-104.99404, 39.75621]
  }
};


//
L.geJSON(geojsonFeature).addTo(map);
 
var myLines =[{
  "type": "LineString",
  "coordinate": [[-100, 40], [-105, 45], [-110, 55]]
},{
  "type": "LineString",
  "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojsonFeature);

//options
var myLines = [{
  "type": "LineString",
  "cordinates": [[-100, 40], [-105, 45], [-110, 55]]
},{
  "type": "LineString",
  "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.65
};

L.geoJSON(myLines, {
  style: myStyle
}).addTo(map);

var states = [{

},{

}];

L.geoJSON(state, {
  style: function(feature){
    switch(feature.properties.party){
      case 'Republican': return {color: "#ff0000"};
      case 'Democrat': return {color: "#0000ff"};
    }
  }
}).addTo(map);


//poinToLayer
var geojsonMerkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

L.geoJSON(someGeojsonFeature, {
  pointToLayer: function(feature, latlng){
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);

//onEachFeature
function onEachFeature(feature, layer){
  if(feature.properties && feature.properties.popupContent){
    layer.bindPopup(feature.properties.popupContent);
  }
}

var geojsonFeature = {

};

L.geoJSON(geojsonFeature, {
  onEachFeatue: onEachFeatue
}).addTo(map);

//filter
var someFeatures = [{

}];

L.geoJSON(someFeatures, {
  filter: function(feature, layer){
    return feature.properties.show_on_map;
  }
}).addTo(map);



