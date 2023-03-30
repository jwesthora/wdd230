// Weather *******************************************************************************
var apikey = "a929e5b741f9630fa68e0f808eaefc41";
var api_url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Carlsbad,CA&appid="+ a929e5b741f9630fa68e0f808eaefc41 +"&units=imperial&cnt=4";
$.getJSON(api_url, function(data) {
  var forecast = data.list;
  var weather_html = "";
  for (var i=1; i<forecast.length; i++) {
    var date = new Date(forecast[i].dt * 1000);
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
    var temperature = Math.round(forecast[i].temp.day);
    var condition = forecast[i].weather[0].description;
    var humidity = forecast[i].humidity;
    weather_html += "<h2>" + dayOfWeek + "</h2>";
    weather_html += "<p>Temperature: " + temperature + " &#8457;</p>";
    weather_html += "<p>Condition: " + condition + "</p>";
    weather_html += "<p>Humidity: " + humidity + "%</p>";
  }
  $("#weather").html(weather_html);
});