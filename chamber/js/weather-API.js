const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const wind_chill = document.querySelector('#wind_chill');
const wind_speed = document.querySelector('#wind_speed');

const url = "//api.openweathermap.org/data/2.5/weather?q=Logan&units=Imperial&appid=b54258e2e3d97bfdfff20ceb4b046275";

apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data)
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
    wind_chill_calculation = "hi";
    document.getElementById("wind_speed").innerHTML = weatherData.wind.speed + " mph"


    let t = document.querySelector("#current-temp").innerHTML;
    let s = document.querySelector("#wind_speed").innerHTML;
    if (t <= 50 && s >= 3) {
        chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + ((0.4275 * t) * (Math.pow(s, .16)));

        chillFinal = Math.round(chillFactor * 10) / 10;

        document.querySelector("#wind_chill").innerHTML = " " + chillFinal + " F"

        console.log("Eureka!")
    } else {
        document.querySelector("#wind_chill").innerHTML = " " + "N/A";
    }
}