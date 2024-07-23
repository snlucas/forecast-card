import reactiveHandler from './reactive';
import { fetchWeatherApi } from 'openmeteo'; // TODO: Maybe remove this package

// TODO: Fetch shutterstock API

const cities = require('all-the-cities');

// TODO: Refat to use as url without params or to concatenate params
const url = "https://api.open-meteo.com/v1/forecast";
const params = {
	"latitude": 52.52,
	"longitude": 13.41,
	"hourly": "temperature_2m"
};

let val;
const reactiveVal = new Proxy({ val }, reactiveHandler);

const userInputCity = document.querySelector('input.main-input');
userInputCity.addEventListener(
    'input',
    event => {
        let city = hasCity(event.target.value);
        // const coordinates = city[0].loc.coordinates;

        // TODO: Refat to use a valid city as condition
        if (city) {
            //params.latitude = coordinates[0];
            //params.longitude = coordinates[1];

            // TODO: When data, set this to a reactive variable to show forecast
            fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
            .then(response => response.json())
            .then(data => console.log('>>> ', data));
        }
        // hasCity(event.target.value) ? console.log('>>> ', hasCity(event.target.value)[0].loc.coordinates) : undefined
    }
);

const hasCity = city => cities.some(realCity => city === realCity.name);