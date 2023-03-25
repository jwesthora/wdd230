

drawWeather()

// Weather temp and icon*******************************************************************************
// select HTML elements in the document
const temp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=2c06a713eee7a2303d487735ac244c3e&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      displayResults(data);

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherdata){
  temp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`
  const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
  const desc = weatherdata.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;


}


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
