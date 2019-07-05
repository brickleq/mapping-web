var accessToken = "pk.eyJ1IjoiYnJpY2tsZXEiLCJhIjoiY2p3cjE2YXUzMDFkYTQzbHlocmF3bzk3cyJ9.hPe4Fr88LAeI-XaTK-gT_A";
var dataURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
var mymap = L.map('mapid').setView([0, 0], 1.75);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(mymap);

  // load GeoJSON from an external file
  jQuery.getJSON(dataURL,function(data){
      console.log(data);
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(mymap);
  });