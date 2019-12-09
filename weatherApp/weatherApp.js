/* https://api.openweathermap.org/data/2.5/weather?q=Tartu,EE&appid=341e6fe469a9d7c31e6db5dbf511e9ae 
"id": 7522434,
    "name": "Tartu linn",
    "country": "EE",
    "coord": {
      "lon": 26.732559,
      "lat": 58.374981
*/
  
   
// Fetch the Weather ------------------------------------------------------ */</script>

function weatherBalloon( cityID ) {
  var key = '341e6fe469a9d7c31e6db5dbf511e9ae';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data); // Call drawWeather
  })
  .catch(function() {
    // catch any errors
  });
}


window.onload = function() {
    weatherBalloon( 7522434 );
  }



// Display the Weather ------------------------------------------------------

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;

    if( description.indexOf('rain') > 0 ) {
  	    document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
  	    document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
  	    document.body.className = 'sunny';
    }
}