---
layout: default
---

<center>
  <form action="/search.html" method="get">
   	<!-- <label for="search-box">time</label> -->
   	<input type="text" id="search-box" name="query">
   	<input type="submit" value="search">
  </form> 
</center>

<script>
	function filterSearchURL(values) {
		currentURL = ''.concat("search.html?query=",...values);
		window.location.href = currentURL;

		/* let i = 0;

		let currentURL = "search.html?query=";

		while (i < values.length) {
			currentURL = currentURL + values[i] + "+";
			i++;
		}

		window.location.href = currentURL; */ 
	}
</script>

<fieldset>
  <legend>Filter by location</legend>
  <div>
    <input type="checkbox" id="address" name="location" value="address" />
    <label for="address">Address</label>
  </div>
  <div>
    <input type="checkbox" id="censusTract" name="location" value="censusTract" />
    <label for="censusTract">Census Tract</label>
  </div>
  <div>
    <input type="checkbox" id="city" name="location" value="city" />
    <label for="city">City</label>
  </div>
  <div>
    <input type="checkbox" id="congressionalDistrict" name="location" value="congressionalDistrict" />
    <label for="congressionalDistrict">Congressional District</label>
  </div>
  <div>
    <input type="checkbox" id="county" name="location" value="county" />
    <label for="county">County</label>
  </div>
  <div>
    <input type="checkbox" id="neighborhood" name="location" value="neighborhood" />
    <label for="neighborhood">Neighborhood</label>
  </div>
  <div>
    <input type="checkbox" id="state" name="location" value="state" />
    <label for="state">State</label>
  </div>
  <div>
    <input type="checkbox" id="servicePlanningArea" name="location" value="servicePlanningArea" />
    <label for="servicePlanningArea">Service Planning Area</label>
  </div>
  <div>
    <input type="checkbox" id="supervisorialDistrict" name="location" value="supervisorialDistrict" />
    <label for="supervisorialDistrict">Supervisorial District</label>
  </div>
  <div>
    <input type="checkbox" id="zip" name="location" value="zip" />
    <label for="zip">Zip Code</label>
  </div>
  <div>
  	<button id="locationSearch" name="locationSearch"> Search</button>
  </div>

  <script>
  	const locationCB = document.querySelector('#locationSearch');
  	locationSearch.addEventListener("click", (event) => {
  		let checkboxes = document.querySelectorAll("input[name='location']:checked");
  		let values = [];
  		checkboxes.forEach((checkbox) => {
  			values.push(checkbox.value + "+");
  		});

  		filterSearchURL(values);
  	})
  </script>
</fieldset>

<fieldset>
  <legend>Filter by format</legend>
  <div>
    <input type="checkbox" id="chart" name="format" value="chart" />
    <label for="chart">Chart</label>
  </div>
  <div>
    <input type="checkbox" id="dashboard" name="format" value="dashboard" />
    <label for="dashboard">Dashboard</label>
  </div>
  <div>
    <input type="checkbox" id="graph" name="format" value="graph" />
    <label for="graph">Graph</label>
  </div>
  <div>
    <input type="checkbox" id="map" name="format" value="map" />
    <label for="map">Map</label>
  </div>
  <div>
    <input type="checkbox" id="table" name="format" value="table" />
    <label for="table">Table</label>
  </div>
  <div>
  	<button id="formatSearch" name="formatSearch"> Search</button>
  </div>

  <script>
  	const formatCB = document.querySelector('#formatSearch');
  	formatSearch.addEventListener("click", (event) => {
  		let checkboxes = document.querySelectorAll("input[name='format']:checked");
  		let values = [];
  		checkboxes.forEach((checkbox) => {
  			values.push(checkbox.value + "+");
  		});

  		filterSearchURL(values);
  	})
  </script>
</fieldset>

<fieldset>
  <legend>Filter by data points</legend>
  <div>
    <input type="checkbox" id="age" name="dataPoints" value="age" />
    <label for="age">Age</label>
  </div>
  <div>
    <input type="checkbox" id="CalFresh Data" name="dataPoints" value="CalFresh Data" />
    <label for="CalFresh Data">CalFresh Data</label>
  </div>
  <div>
    <input type="checkbox" id="CalFresh User" name="dataPoints" value="CalFresh User" />
    <label for="CalFresh User">CalFresh User</label>
  </div>
  <div>
    <input type="checkbox" id="education" name="dataPoints" value="education" />
    <label for="education">Education</label>
  </div>
  <div>
    <input type="checkbox" id="farmers' markets" name="dataPoints" value="farmers' markets" />
    <label for="farmers' markets">Farmers' Markets</label>
  </div>
  <div>
    <input type="checkbox" id="food assistance" name="dataPoints" value="food assistance" />
    <label for="food assistance">Food Assistance</label>
  </div>
  <div>
    <input type="checkbox" id="food deserts" name="dataPoints" value="food deserts" />
    <label for="food deserts">Food Deserts</label>
  </div>
  <div>
    <input type="checkbox" id="food insecurity" name="dataPoints" value="food insecurity" />
    <label for="food insecurity">Food Insecurity</label>
  </div>
  <div>
    <input type="checkbox" id="grocery stores" name="dataPoints" value="grocery stores" />
    <label for="grocery stores">Grocery Stores</label>
  </div>
  <div>
    <input type="checkbox" id="health" name="dataPoints" value="health" />
    <label for="health">Health</label>
  </div>
  <div>
    <input type="checkbox" id="income/poverty" name="dataPoints" value="income/poverty" />
    <label for="income/poverty">Income/Poverty</label>
  </div>
  <div>
    <input type="checkbox" id="place of origin" name="dataPoints" value="place of origin" />
    <label for="place of origin">Place of Origin</label>
  </div>
  <div>
    <input type="checkbox" id="race/ethnicity" name="dataPoints" value="race/ethnicity" />
    <label for="race/ethnicity">Race/Ethnicity</label>
  </div>
  <div>
    <input type="checkbox" id="restaurants" name="dataPoints" value="restaurants" />
    <label for="restaurants">Restaurants</label>
  </div>
  <div>
    <input type="checkbox" id="sex" name="dataPoints" value="sex" />
    <label for="sex">Sex</label>
  </div>
  <div>
  	<button id="dataPointsSearch" name="dataPointsSearch"> Search</button>
  </div>

  <script>
  	const dataPointsCB = document.querySelector('#dataPointsSearch');
  	dataPointsSearch.addEventListener("click", (event) => {
  		let checkboxes = document.querySelectorAll("input[name='dataPoints']:checked");
  		let values = [];
  		checkboxes.forEach((checkbox) => {
  			values.push(checkbox.value + "+");
  		});

  		filterSearchURL(values);
  	})
  </script>
</fieldset>

<ul id="search-results"></ul>

<script src="oldSearch.js">
	/* window.store= {
		/* {% for post in site.posts %}
			"{{post.url | slugify}}": {
				"title": "{{ post.title | xml_escape}}",
				"author": "{{ post.author | xml_escape}}",
				"category": "{{ post.category | xml_escape }}",
				"content": {{ post.content | strip_html | strip_newlines | jsonify }},
				"url": "{{ post.url | xml_escape }}"
			}
			{% unless forloop.last %}, {% endunless %}
			{% endfor %} 
	}; */
</script>

<script src="js/lunr.min.js"></script>
<script src="js/search.js"></script>

