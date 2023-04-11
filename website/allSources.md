---
layout: default
title: View Full Directory
permalink: /fullsourcelist
---

<script>
  function getLength() {
    var length = window.store.length;
    document.getElementById("length").innerHTML = length;
  }
</script>

<body onload="getLength()"> </body>

<center> 
  <h2>About the Project</h2>

  This research directory was created in parternship with the Los Angeles Food Policy Council. Currently synthesizing <span id="length"></span> sources and datasets, it was made to help researchers and policymakers better understand food insecurity in the Los Angeles area.

  <p> </p>

  <i>Found some published research or data you think should be included? Help us improve our database by sending the link to {{ site.email }}.</i>

  <p> </p>

  <p> ---------- </p>

  <p> </p>

</center>

<ul id="full-source-list"></ul>

<script src="oldSearch.js"> </script>
<script src="js/allSources.js"></script>
