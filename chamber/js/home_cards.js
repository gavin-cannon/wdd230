const requestURL = 'js/businesses.json';
const cards = document.querySelector('#spotlight_section');

getProphets()




async function getProphets() {
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