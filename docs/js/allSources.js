(function() {
  var fullSourceList = document.getElementById('full-source-list');
  var appendString = '';

  for (var key in window.store) {    
    var item = window.store[key];

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

  fullSourceList.innerHTML = appendString;
})();