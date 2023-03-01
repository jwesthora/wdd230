const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
//const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // reference the prophet array of data object
    displayProphets(data.prophets);
}



const displayProphets = (prophets) => {
const cards = document.querySelector('div.cards'); // select the output container element
  
prophets.forEach((prophet) => {
 // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let bDate = document.createElement('p');
    let bPlace = document.createElement('p');
    let portrait = document.createElement('img');
    
  
// Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

// Build the p content to show prophet's birth date and birth place
bDate.textContent = `Date of Birth: ${prophet.birthdate}`;
bPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

 // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ______________`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
  
// Append the section(card) with the created elements
 card.appendChild(h2);
 card.appendChild(bDate);
 card.appendChild(bPlace);
 card.appendChild(portrait);
 
  
cards.appendChild(card);
    }); // end of each loop
  }; // end of function expression

  getProphetData();