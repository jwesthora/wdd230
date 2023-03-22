const url = 'https://github.com/jwesthora/wdd230/blob/main/chamber/bountiful_foods_final/scripts/drink.json';


async function getBountifulData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies); // reference the prophet array of data object
    displayBountiful(data.bountiful);

}



const displayBountiful = (bountiful) => {
const cards = document.querySelector('div.cards'); // select the output container element
  
companies.forEach((company) => {
 // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let nutritions = document.createElement(`p`);
    
  
// Build the h2 content out to show the fruits name 
    h2.textContent = `${bountiful.name}`;

// Build the p content to show nutrition
nutritionS.textContent =`Nutrition Information: ${bountiful.nutritions}`;

  
// Append the section(card) with the created elements
 card.appendChild(h2);
 card.appendChild(nutritions);
 
 
  
cards.appendChild(card);
    }); // end of each loop
  }; // end of function expression

  getBountifulData();
const gridbutton = document.querySelector("#squareView");
const listbutton = document.querySelector("#listView");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}


