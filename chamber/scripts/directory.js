const url = 'https://jwesthora.github.io/wdd230/chamber/data.json';


async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies); // reference the prophet array of data object
    displayCompanies(data.companies);
}



const displayCompanies = (companies) => {
const cards = document.querySelector('div.cards'); // select the output container element
  
companies.forEach((company) => {
 // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let bPhone = document.createElement('p');
    let bEmail = document.createElement('p');
    let bAddress = document.createElement('p');
    let memberShip = document.createElement(`p`);
    
  
// Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${company.bName}`;

// Build the p content to show phone, address, URL(email)
bPhone.textContent = `Phone: ${company.bPhone}`;
bEmail.textContent = `${company.bEmail}`;
bAddress.textContent = `Address: ${company.bAddress}`;
memberShip.textContent =`Membership Status: ${company.memberShip}`;

 // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', `Portrait of ${company.bName} ______________`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '300');
    portrait.setAttribute('height', '200');
  
// Append the section(card) with the created elements
 card.appendChild(h2);
 card.appendChild(portrait);
 card.appendChild(bPhone);
 card.appendChild(bAddress);
 card.appendChild(bEmail);
 card.appendChild(memberShip);
 
 
  
cards.appendChild(card);
    }); // end of each loop
  }; // end of function expression

  getCompaniesData();
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


