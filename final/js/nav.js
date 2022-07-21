function toggleMenu() {
    document.querySelector(".primaryNav").classList.toggle("open");
    document.querySelector(".hamburgerBtn").classList.toggle("open");

}
const x = document.querySelector('.hamburgerBtn');
x.onclick = toggleMenu;

let date = new Date();
let year = date.getFullYear();
let day_number = date.getDate();

document.querySelector(".copyright").innerHTML = "&copy;" + year;

document.querySelector(".lastUpdated").innerHTML = `Last Updated: ${document.lastModified}`;