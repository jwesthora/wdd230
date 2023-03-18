const url = 'https://jwesthora.github.io/wdd230/chamber/data.json';

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies); // reference the prophet array of data object
    displayCompanies(data.companies, "spot1");
    displayCompanies(data.companies, "spot2");
    displayCompanies(data.companies, "spot3");
    
}
getData(url);
function displayCompanies(companies) {
    const rand = Math.random() * businesses.length;

    let name = document.querySelector(container).querySelector(".bName");
    let logo = document.querySelector(container).querySelector(".imageurl");
    let email = document.querySelector(container).querySelector(".bEmail");
    let phone = document.querySelector(container).querySelector(".bPhone");

    name.textContent = businesses[rand.toFixed(0)].name;
    logo.setAttribute('src', businesses[rand.toFixed(0)].imageurl);
    logo.setAttribute('alt', businesses[rand.toFixed(0)].name);
    email.textContent = businesses[rand.toFixed(0)].email;
    phone.textContent = businesses[rand.toFixed(0)].phonenumber;

}