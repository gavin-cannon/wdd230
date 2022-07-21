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
    let twoTemples = data.temples.filter(twoTemple => twoTemple.order < 2)
    twoTemples.forEach(temple => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let photo = document.createElement('img');
        let p = document.createElement('p');
        let new_p = document.createElement('p');
        let likebutton = document.createElement('img');
        let history_p = document.createElement('p');


        h2.innerHTML = `${temple.name}`;
        p.innerHTML = `<h3>Phone Number:</h3> ${temple.phone}<br><br> `;
        new_p.innerHTML = `<h3>Services:</h3> ${temple.services}<br><br> <h3>Session:</h3> ${temple.session}<br> <h3>Closures for 2022:</h3>  ${temple.closure}<br>`
        photo.setAttribute('src', `${temple.imageurl}`);
        photo.setAttribute('alt', `Photo of ${temple.alt}`);
        photo.setAttribute('loading', 'lazy');

        card.append(h2);
        card.append(photo);
        card.append(p);
        card.append(new_p);
        card.append(history_p);


        homecards.append(card);
    })
}