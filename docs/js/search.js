(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';
      if (results.length > 1) {
        appendString += '<p><center><em>--- ' + results.length + ' results found ---' + '</em></center></p>';
      }
      else if (results.length = 1) {
        appendString += '<p><center><em>--- ' + results.length + ' result found ---' + '</em></center></p>';
      }

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<a href="' + item.url + '"><h3>' + item.name + '</h3></a>';

        appendString += '<p>' + 'locations: <em>';
        for (var locationKey = 0; locationKey < item.locations.length - 1; locationKey++) {
          appendString += item.locations[locationKey] + ', ';
        }
        appendString += item.locations[locationKey] + '</em></p></li>';

        appendString += '<p>' + 'format: <em>';
        for (var formatKey = 0; formatKey < item.format.length - 1; formatKey++) {
          appendString += item.format[formatKey] + ', ';
        }
        appendString += item.format[formatKey] + '</em></p></li>';

        appendString += '<p>' + 'dataPoints: <em>';
        for (var dataPointsKey = 0; dataPointsKey < item.dataPoints.length - 1; dataPointsKey++) {
          appendString += item.dataPoints[dataPointsKey] + ', ';
        }
        appendString += item.dataPoints[dataPointsKey] + '</em></p></li>';

        //appendString += '<p>' + 'locations: <strong>' + item.locations + '</strong></p></li>';
        //appendString += '<p>' + 'format: <strong>' + item.format + '</strong></p></li>';
        //appendString += '<p>' + 'data points: <strong>' + item.dataPoints + '</strong></p>';
        //appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = 'No results found';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('name');
      // this.field('name', { boost: 10 });
      this.field('format');
      this.field('dataPoints');
      this.field('locations');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'name': window.store[key].name,
        'format': window.store[key].format,
        'dataPoints': window.store[key].dataPoints,
        'locations': window.store[key].locations
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();