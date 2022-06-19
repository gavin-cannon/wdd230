const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

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
    let nonUtah = data.prophets.filter(p => p.birthplace !== "Utah")
    nonUtah.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');

        console.log("YOU WORKING ?")
        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Location of Birth ${prophet.birthplace}<br> <br> Date Of Birth: ${prophet.birthdate}`;
        portrait.setAttribute('src', `${prophet.imageurl}`)
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading', 'lazy')

        card.append(h2);
        card.append(p);
        card.append(portrait);

        cards.append(card);
    })
}