---
layout: default
title: Visualizing Food Access
permalink: /map
---

<head>
  <link rel="stylesheet" href="style.css">
  
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossorigin=""/>

  <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
     integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
     crossorigin=""></script>
</head>

<center> 
  <h2>About the Map</h2>

  This map was created using data from the <a href="https://www.cdfa.ca.gov/is/docs/CurrentMrktsCounty.pdf">California Department of Food and Agriculture's</a> list of certified farmers' markets and <a href ="https://data.lacity.org/Administration-Finance/Grocery-Stores/g986-7yf9">LA City's</a> list of all active grocery store businesses registered with the Office of Finance.

  <p> </p>

  <div id="map"></div>

</center>

<script>
  var map = L.map('map').setView([34, -118], 9);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);


  var groceryStyle = {
    "color": "#555555"
  };

  fetch("Grocery_Stores.geojson").then(res => res.json()).then(data => {
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data, {
      style: groceryStyle
    }).addTo(map);
  });

  fetch("Farmers_Markets.geojson").then(res => res.json()).then(data => {
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
</script>