// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "//api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=b54258e2e3d97bfdfff20ceb4b046275";

apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); //temporary
            displayResults(data);
        } else {
            throw Error(await response.text())
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);
    const preDesc = weatherData.weather[0].description.split(" ");

    for (let i = 0; i < preDesc.length; i++) {
        preDesc[i] = preDesc[i][0].toUpperCase() + preDesc[i].substr(1);
    }

    preDesc.join(" ")

    const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = preDesc
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
}