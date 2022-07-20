const requestURL = 'js/temples.json';
const cards = document.querySelector('.cards');

let class_number = 0

getTemples()

let red_or_nothing = Number(window.localStorage.getItem("red_or_nothing"));

// let class_list = [like_btn0, like_btn1, like_btn2, like_btn3]

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
    let nonUtah = data.temples
    nonUtah.forEach(temple => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');
        let new_p = document.createElement('p');
        let likebutton = document.createElement('img');
        let history_p = document.createElement('p');

        h2.innerHTML = `${temple.name}`;
        p.innerHTML = `<h3>Phone Number:</h3> ${temple.phone}<br><br> <h3>Address:</h3> ${temple.address}<br><br> <h3>Email:</h3> ${temple.email}<br> <br><h3>Website:</h3> ${temple.website}`;
        new_p.innerHTML = `<h3>Services:</h3> ${temple.services}<br><br> <h3>Session:</h3> ${temple.session}<br> <h3>Ordinances:</h3> ${temple.ordinances}<br> <br> <h3>Closures for 2022:</h3>  ${temple.closure}<br>`
        history_p.innerHTML = `<h3>History:</h3>${temple.history}`;
        portrait.setAttribute('src', `${temple.imageurl}`);
        portrait.setAttribute('alt', `Portrait of ${temple.name} ${temple.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        likebutton.setAttribute('src', `${temple.likebutton}`);
        likebutton.setAttribute('onclick', 'like_button(this)');
        likebutton.setAttribute('class', `like_btn${class_number}`);

        if (Number(localStorage.getItem(`like_btn${class_number}`)) === 0) {
            likebutton.setAttribute('src', 'images/heartred.png');
            console.log("hi");
        } else {
            likebutton.setAttribute('src', 'images/heart.png');
        }


        card.append(h2);
        card.append(p);
        card.append(new_p);
        card.append(history_p);
        card.append(portrait);


        card.append(likebutton);

        cards.append(card);
        class_number++
    })
}

function like_button(x) {

    let like_class = x.getAttribute("class");
    console.log(like_class);
    let like_attribute = x.getAttribute("src");

    if (like_attribute === 'images/heart.png') {
        x.setAttribute('src', 'images/heartred.png');
        localStorage.setItem(like_class, 0)

    } else if (like_attribute === 'images/heartred.png') {
        x.setAttribute('src', 'images/heart.png');

        localStorage.setItem(like_class, 1)
    }
    likeBtn = document.querySelector(".like_btn");





}