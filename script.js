
let temperatureDescription = document.querySelector('.temperature-description');

let temperatureDegree = document.querySelector('.temperature-degree'); 

let locationTimezone = document.querySelector('.location-timezone');

let temperatureSection = document.querySelector('.degree-secton-temperature');

let temperaturePressure = document.querySelector('.degree-secton-pressure span');

let windSpeed = document.querySelector('.degree-secton-wind span');

let temperatureHumidity = document.querySelector('.degree-secton-humidity span');

const temperatureSpan = document.querySelector('.temperature span');

const button = document.querySelector('button');

const input = document.querySelector('input');

let cityName = document.querySelector('h1');


function getCity() {

    cityName.innerText = input.value.toUpperCase();

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName.innerText}&appid=8d587df152c47059a30b7f8ac17874f4`)

    .then(response => {
        return response.json();
    })

    .then(data => {
        const { temp, pressure, humidity } = data.main;
        const { description } = data.weather[0];
        const { speed } = data.wind;

        temperatureDegree.innerHTML = temp;
        temperatureDescription.innerHTML = description;
        locationTimezone.innerHTML = data.name;
        temperaturePressure.innerHTML = pressure;
        windSpeed.innerHTML = speed;
        temperatureHumidity.innerHTML = humidity;

        //FORMULA
        let celsius = (temp - 273.15);
        let farenheit = ((temp - 273.15) * 9/5 + 32);

        temperatureSection.addEventListener('click', () => {
            if(temperatureSpan.innerHTML === 'K') {
                temperatureSpan.innerHTML = 'C';
                temperatureDegree.innerHTML = Math.floor(celsius);
            } else if(temperatureSpan.innerHTML === 'C'){
                temperatureSpan.innerHTML = 'F';
                temperatureDegree.innerHTML = Math.floor(farenheit);
            } else if(temperatureSpan.innerHTML === 'F') {
                temperatureSpan.innerHTML = 'K';
                temperatureDegree.innerHTML = temp;
            };
        });
    });
};

button.addEventListener('click', getCity);