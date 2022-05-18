function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

let date = new Date()
let year = date.getFullYear()
let day_number = date.getDate()

document.querySelector("#copyright").innerHTML = "&copy;" + year;

document.querySelector("#lastUpdated").innerHTML = `Last Updated: ${document.lastModified}`;

let name_of_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let full_date = name_of_days[date.getDay()] + ", " + day_number + " " + (date.getMonth() + 1) + " " + date.getFullYear()

document.querySelector("#todays_date").innerHTML = full_date;