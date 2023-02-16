function drawWeather(  ) {
    
  var fahrenheit = 32
  const windSpeed = 10
  
  document.getElementById('ws').innerHTML = `Wind Speed: ${windSpeed} mph`
  if (fahrenheit <= 50 && windSpeed > 3.0){
    const windChillVar = parseFloat(35.74 + (0.6215 * fahrenheit) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * fahrenheit * (windSpeed ** 0.16))).toFixed(1);
    document.getElementById("wc").innerHTML = `Wind Chill: ${windChillVar}&deg;F`
  } 
  else {
    const windChillVar = "none";
    document.getElementById("wc").innerHTML = `Wind Chill: ${windChillVar}`

    
    
  }
}

drawWeather()




//function drawWeather(  ) {
//var fahrenheit = 50
//const windSpeed = 10

//  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
// var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
      
//const windSpeed = d.wind.speed;
//const mph =  parseFloat(windSpeed * 2.236936).toFixed(1);
    //document.getElementById('ws').innerHTML = `Wind Speed: ${mph} mph`
    //if (fahrenheit <= 50 && mph > 3.0){
     // const windChillVar = parseFloat(35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16))).toFixed(1);
     // document.getElementById("wc").innerHTML = `Wind Chill: ${windChillVar}&deg;`
   // } 
   // else {
    //  const windChillVar = "none";
     // document.getElementById("wc").innerHTML = `Wind Chill: ${windChillVar}`
      
   // }
    
 // }
  