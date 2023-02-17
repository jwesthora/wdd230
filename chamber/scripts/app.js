
// date for header
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

// - date for long day, month, number day, year (example) Tuesday, February 7, 2023 
//field.innerHTML = `<em>${fulldate}</em>`;

// date for long day, number day, month, year -(example: Tuesday, 7 February 2023)
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// year
document.getElementById("year").textContent=now.getFullYear();



// hamburger button
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// banner display on Mondays or Tuesday
if (now.getDay() === 1 || now.getDay() == 2){
    document.getElementById("banner").style.display = "flex";
  } else{
    document.getElementById("banner").style.display = "none";
  }
  
  const closeButton = document.getElementById("closeBanner");
  //closeButton.addEventListener("click"), () => {
    document.getElementById("banner").style.display = "none"
  //}


// java for Discover page
// get all img with data src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the intersection observer
const imgoptions= {
  threshold: 0
}


const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};
// first check to see if intersection observer is supported 
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    // Loop through each img on check status and loas if necessary
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
    // load all images if not supported
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  // java for time stamp of number of times visited on Discovery page
  // initialize display elements
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date demonstration
todayDisplay.textContent = Date.now();
//84600000 equals the number of miliseconds in one day.

// Days until Christmas
let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25);
// check if is the waing days of December, if so ... change to next year.
if (today.getMonth() == 11 && today.getDate() > 25) {
	christmas.setFullYear(christmas.getFullYear() + 1);
}

let daysleft = (christmas.getTime() - Date.now()) / 84600000;

daysLeftOutput.innerHTML = `${daysleft.toFixed(
	0
)} days<br> 🎄Christmas is ${christmas}`;
