

// //Last Modified*********************************
// document.getElementById("webInfo").innerHTML = `&copy; ${year} | Jill Westhora | WDD 230 Project | Last Modified on: ${document.lastModified}`

// var date = document.lastModified;
// document.getElementById("result").innerHTML = "Last modification: " + date;

// discover page last visit between days*********************************


// Get the current date
const nowDate = new Date();
//const earlyDate = new Date();
// Get the date of the last visit from local storage
const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit) {
  // Calculate the difference in time between the last visit and the current visit
  const diffTime = nowDate.getTime() - new Date(lastVisit).getTime();
  //earlyDate.setDate(earlyDate.getDate() -5);
  //const diffTime = nowDate.getTime()- earlyDate.getTime();



  // Convert the time difference to days and round to the nearest whole number
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  // Display the number of days since the last visit
  if (diffDays < 1){
  document.getElementById("LastVisit").innerText =  `0 days ago`;

  } else{
    document.getElementById("LastVisit").innerText = `${diffDays} days ago`;
    
  }
} else{
    document.getElementById("LastVisit").innerText = "This is your first visit";
}

// Store the current visit date in local storage
localStorage.setItem('lastVisit', nowDate);

// localStorage.setItem("visits-ls", numVisits);
// let lastDate = window.localStorage.getItem("between");
// let element = document.querySelector("#lastVisit");
// localStorage.setItem("between", Date.now());