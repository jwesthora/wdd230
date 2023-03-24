// load the JSON file
fetch('fruit.json')
  .then(response => response.json())
  .then(data => {
    const dropdown = document.getElementById('fruit-dropdown');
    data.fruits.forEach(fruit => {
      const option = document.createElement('option');
      option.text = fruit.name;
      option.value = fruit.id;
      dropdown.appendChild(option);
    });
  })
  // fresh page drink ***************
// Define the URL of the JSON data source
var url = "https://gist.githubusercontent.com/narenaryan/a67e992db40ebfd5f5b5e5458b3df172/raw/9b9cfd56e2da8d49da0a95d0b05234c7e8eb8f1b/fruits.json";

// Fetch the JSON data from the URL using jQuery's getJSON method
$.getJSON(url, function(data) {

  // Loop through the fruit objects in the JSON data
  $.each(data.fruits, function(index, fruit) {

    // Add each fruit option to all three select elements
    $("#fruit1, #fruit2, #fruit3").append("<option value='" + fruit.name + "'>" + fruit.name + "</option>");

  });

});