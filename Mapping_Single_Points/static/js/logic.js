// Add console.log to check to see if our code is working.
console.log("working");

//create the map object with a center and zoom level.
 let map = L.map('mapid').setView([36.1733, -120.1794],5);

 //Coordinate for each point to be used in the line.
 let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088],
    [39.053276, -84.6630],
    [29.9990, -95.3368]


];
//create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);


// Create the map object with a center and zoom level.
//**let map = L.map('mapid').setView([34.0522, -118.2437], 10);
                                                                  
//Adding a marker to the map. The lat & Long used is for LA, California
//****The below code is replaced by a circle function */
//var marker = L.marker([34.0522, -118.2437]).addTo(map);
var marker = L.circle([34.0522, -118.2437], {
    radius: 900
    }).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



