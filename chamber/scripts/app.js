const h1 = document.querySelector('h1');
// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");

// Try to complete the method with options
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
		
	};
	date1.innerHTML = `Last modified: <span class="highlight"> ${new Date().toLocaleDateString("en-UK", options)}'</span>!`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

// Long hand method ... the building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date(document.lastModified);
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const time_hours = d.getHours();
const time_minutes= d.getMinutes();
const time_seconds = d.getSeconds();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year} `;
document.querySelector("#date1").textContent = fulldate;
document.getElementById("year").innerHTML = `${year}`;
`Current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`;


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 