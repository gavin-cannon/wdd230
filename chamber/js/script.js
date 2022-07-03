function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

let date = new Date();
let year = date.getFullYear();
let day_number = date.getDate();

document.querySelector("#copyright").innerHTML = "&copy;" + year;

document.querySelector("#lastUpdated").innerHTML = `Last Updated: ${document.lastModified}`;

let name_of_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let full_date = name_of_days[date.getDay()] + ", " + day_number + " " + month[date.getMonth()] + " " + date.getFullYear();

document.querySelector("#todays_date").innerHTML = full_date;

let invite = "";
if (name_of_days[date.getDay()] == "Monday" || name_of_days[date.getDay()] == "Tuesday") {
    invite = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
    invite = "";
}
document.querySelector("#come_join").innerHTML = invite;












const requestURL = 'js/businesses.json';
const cards = document.querySelector('#spotlight_section');

getProphets()




async function getProphets() {
    console.log("HELLO???")
    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        buildProphetCards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildProphetCards(data) {
    let count = 0
    let nonUtah = data.prophets.filter(p => p.membership_level === 3)
    nonUtah.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');

        console.log("YOU WORKING ?")
        h2.innerHTML = `${prophet.name}`;
        p.innerHTML = `Phone Number: ${prophet.phone}<br> Address: ${prophet.address}`;
        portrait.setAttribute('src', `${prophet.imageurl}`)
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading', 'lazy')

        card.append(h2);
        card.append(p);
        card.append(portrait);
        if (count === 2) {
            card.className = "third-card"
        }
        cards.append(card);
        count++
    })
}