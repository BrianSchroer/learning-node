const req = require('request');

const zipCode = '63130';
const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '78c2d3ab80e4660131d13324e1d0575d';

const uri = `${openWeatherMapUrl}?zip=${zipCode}&appid=${apiKey}&units=imperial`;

req.get({ uri, json: true }, (error, response, body) => {
  if (response.statusCode != 200) {
    console.log(`Error retrieving weather data: ${response.statusCode}`);
    return;
  }

  console.log(`${body.main.temp}F, ${body.weather[0].description}`);
});