const currentTemp = document.querySelector('#current_temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const wind_chill = document.querySelector('#wind_chill');
const wind_speed = document.querySelector('#wind_speed');
const humidity = document.querySelector('.humid');
const day1date = document.querySelector('.day1_date');
const day2date = document.querySelector('.day2_date');
const day3date = document.querySelector('.day3_date');
const day1tempMax = document.querySelector('.day1_tempMax');
const day1tempMin = document.querySelector('.day1_tempMin');
const day2tempMax = document.querySelector('.day2_tempMax');
const day2tempMin = document.querySelector('.day2_tempMin');
const day3tempMax = document.querySelector('.day3_tempMax');
const day3tempMin = document.querySelector('.day3_tempMin');


const url = "//api.openweathermap.org/data/2.5/onecall?lat=41.73549&lon=-111.83439&exclude=hourly&appid=d56761c27fa0949de266aca0d26ac7d8";

apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);


        } else {
            throw Error(await response.text())
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    kelvin = weatherData.current.temp.toFixed(1);
    kel_to_fahr = (kelvin - 273.15) * (9 / 5) + 32;
    console.log(kel_to_fahr);
    currentTemp.innerHTML = kel_to_fahr.toFixed(2);
    humidity_number = weatherData.current.humidity;
    humidity.innerHTML = `${humidity_number}%`;

    const preDesc = weatherData.current.weather[0].description.split(" ");
    for (let i = 0; i < preDesc.length; i++) {
        preDesc[i] = preDesc[i][0].toUpperCase() + preDesc[i].substr(1);
        if (preDesc[i].substr(1) === ",") {
            preDesc[i].substr(1) = preDesc[i].substr(1) + " "
        }
    }
    preDesc.join(" ")

    const imagesrc = `https://openweathermap.org/img/w/${ weatherData.current.weather[0].icon}.png`;
    const desc = preDesc
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;




    // wind_chill_calculation = "hi";
    // document.getElementById("wind_speed").innerHTML = weatherData.list[0].wind.speed + " mph"


    // let t = weatherData.main.temp.toFixed(1);
    // let s = weatherData.wind.speed;
    // if (t <= 50 && s >= 3) {
    //     chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + ((0.4275 * t) * (Math.pow(s, .16)));

    //     chillFinal = Math.round(chillFactor * 10) / 10;

    //     document.querySelector("#wind_chill").innerHTML = " " + chillFinal + " F"


    // } else {
    //     document.querySelector("#wind_chill").innerHTML = " " + "N/A";
    // }


    let weather_date = new Date();
    day1_date = weather_date
    let day_two_weather_date = weather_date + 1;
    // let
    // let day_two_weather_date.setDate(weather_date.getDate() + 1)
    // day_three_weather_date.setDate(day_two_weather_date.getDate() + 1)


    day1_kelvin_min = weatherData.daily[0].temp.min;
    day1_kelvin_max = weatherData.daily[0].temp.max;
    day1_temp_min = (day1_kelvin_min - 273.15) * (9 / 5) + 32;
    day1_temp_max = (day1_kelvin_max - 273.15) * (9 / 5) + 32;

    day2_kelvin_min = weatherData.daily[1].temp.min;
    day2_kelvin_max = weatherData.daily[1].temp.max;
    day2_temp_min = (day2_kelvin_min - 273.15) * (9 / 5) + 32;
    day2_temp_max = (day2_kelvin_max - 273.15) * (9 / 5) + 32;

    day3_kelvin_min = weatherData.daily[2].temp.min;
    day3_kelvin_max = weatherData.daily[2].temp.max;
    day3_temp_min = (day3_kelvin_min - 273.15) * (9 / 5) + 32;
    day3_temp_max = (day3_kelvin_max - 273.15) * (9 / 5) + 32;


    day1tempMax.innerHTML = ` ${day1_temp_max.toFixed(2)}`
    day1tempMin.innerHTML = " " + day1_temp_min.toFixed(2)
    day2tempMax.innerHTML = " " + day2_temp_max.toFixed(2)
    day2tempMin.innerHTML = " " + day2_temp_min.toFixed(2)
    day3tempMax.innerHTML = " " + day3_temp_max.toFixed(2)
    day3tempMin.innerHTML = " " + day3_temp_min.toFixed(2)

    day1date.innerHTML = weather_date
    day2date.innerHTML = weather_date + 1
    day3date.innerHTML = weather_date + 2
}