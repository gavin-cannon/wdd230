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

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let full_date = name_of_days[date.getDay()] + ", " + day_number + " " + month[date.getMonth()] + " " + date.getFullYear();

document.querySelector("#todays_date").innerHTML = full_date;


if (name_of_days == "Monday" || "Tuesday") {
    invite = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
    invite = "hi";
}
document.querySelector("#come_join").innerHTML = invite;