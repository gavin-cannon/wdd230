const requestURL = 'js/temples.json';
const homecards = document.querySelector('.temple_spotlight');

getTemples()




async function getTemples() {

    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        buildTempleCards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildTempleCards(data) {
    let twoTemples = data.temples.filter(twoTemple => twoTemple.order < 3)
    twoTemples.forEach(temple => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');
        h2.innerHTML = `${temple.name}`;
        p.innerHTML = `Phone Number: ${temple.phone}<br> Address: ${temple.address}`;
        portrait.setAttribute('src', `${temple.imageurl}`)
        portrait.setAttribute('alt', `Portrait of ${temple.name} ${temple.lastname}`)
        portrait.setAttribute('loading', 'lazy')

        card.append(h2);
        card.append(p);
        card.append(portrait);

        homecards.append(card);
    })
}