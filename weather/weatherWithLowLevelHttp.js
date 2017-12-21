const http = require('http');

const zipCode = '63130';
const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '78c2d3ab80e4660131d13324e1d0575d';

const url = `${openWeatherMapUrl}?zip=${zipCode}&appid=${apiKey}&units=imperial`;

http.get(url, (res) => {
  let body = '';

  res.on('data', (data) => {
    body += data;
  })

  res.on('end', () => {
    const json = JSON.parse(body);

    if (json.cod != 200) {
      console.log(`Error retrieving weather data: ${json.COD}`);
      return;
    }

    console.log(`${json.main.temp}F, ${json.weather[0].description}`);
  });


}).on('error', (e) => {
  console.log(`Error: ${e.message}`);
});