const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const url = 'https://jwesthora.github.io/wdd230/chamber/data.json';


async function getCompaniesData() {
    const response = await fetch(url);
    const data = await data.json();
    //console.table(data.prophets); // reference the prophet array of data object
    displayCompanies(data.companies);
}



const displayCompanies = (companies) => {
const cards = document.querySelector('div.cards'); // select the output container element
  
companies.forEach((companies) => {
 // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let bPhone = document.createElement('p');
    let bEmail = document.createElement('p');
    let bAddress = document.createElement('p');
    
  
// Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${companies.bName}`;

// Build the p content to show prophet's birth date and birth place
bPhone.textContent = `Phone: ${companies.bPhone}`;
bEmail.textContent = `Contact: ${companies.bEmail}`;
bAddress.textContent = `Address: ${companies.bAddress}`;

 // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', companies.imageurl);
    portrait.setAttribute('alt', `Portrait of ${companies.bName} ______________`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
  
// Append the section(card) with the created elements
 card.appendChild(h2);
 card.appendChild(portrait);
 card.appendChild(bPhone);
 card.appendChild(bAddress);
 card.appendChild(bEmail);
 
 
  
cards.appendChild(card);
    }); // end of each loop
  }; // end of function expression

  getCompaniesData();
