
// load the JSON file
fetch('fruit.json')
  .then(response => response.json())
  .then(data => {
    // use the JSON data here
  })
  .catch(error => console.error(error));
// Get a reference to the select elements
const select1 = document.getElementById('fruit1');
const select2 = document.getElementById('fruit2');
const select3 = document.getElementById('fruit3');

// Load the fruit data from the JSON file
fetch('fruit.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the fruit data and create options for each fruit
    data.bountiful.forEach(fruit => {
      // Create a new option element
      const option = document.createElement('option');

      // Set the text and value of the option
      option.text = `${ fruit.name } (${ fruit.nutritions.calories } calories)`;
      option.value = fruit.id;

      // Append the option to each select element
      select1.appendChild(option);
      select2.appendChild(option.cloneNode(true));
      select3.appendChild(option.cloneNode(true));
    });
  })
  .catch(error => {
    console.error('Error loading fruit data:', error);
  });
  // Retrieve the number of drinks submitted by the current user from localStorage
let numDrinks = localStorage.getItem('numDrinks');

// If this is the first time the user is submitting a drink, initialize numDrinks to 0
if (!numDrinks) {
  numDrinks = 0;
}

// Increment the number of drinks submitted by the current user
numDrinks++;

// Store the updated numDrinks value in localStorage
localStorage.setItem('numDrinks', numDrinks);

// Display the numDrinks value in an information card
const infoCard = document.createElement('div');
infoCard.innerText = `You have submitted ${ numDrinks } specialty drinks!`;
document.body.appendChild(infoCard);

//output order on Home page, from order page on fresh
// Get the form element and attach a submit event listener
const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', handleFormSubmit);

// Define the event handler for the form submit event
function handleFormSubmit(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the form input values
  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const specialInstructions = document.getElementById('special-instructions').value;

  // Get the current date
  const currentDate = new Date();

  // Calculate the total nutritional values for the selected fruits
  const totalNutrition = calculateTotalNutrition(fruit1, fruit2, fruit3);

  // Construct the output HTML
  const outputHtml = `
    <h2>Order Summary</h2>
    <p><strong>Name:</strong> ${firstName}</p>
