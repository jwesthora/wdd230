
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
  closeButton.addEventListener("click"), () => {
    document.getElementById("banner").style.display = "none"
  }

