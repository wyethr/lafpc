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

<script src="points.js"></script>

<script>
var geojsonLayer = L.geoJSON(points);
geojsonLayer.addTo(map);</script>

<center> 
  <h2>About the Map</h2>

  This map was created using data from the <a href="https://www.cdfa.ca.gov/is/docs/CurrentMrktsCounty.pdf">California Department of Food and Agriculture's</a> list of certified farmers' markets and <a href ="https://data.lacity.org/Administration-Finance/Grocery-Stores/g986-7yf9">LA City's</a> list of all active grocery store businesses registered with the Office of Finance.

  <p> </p>

  <div id="map"></div>

</center>