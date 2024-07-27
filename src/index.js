import '../static/style/normalise.css';
import '../static/style/style.css';

import fetchWeatherData from './scripts/datafetcher.js';
import changeLoc from './scripts/displaydata.js';

function getData(place) {
  const response = fetchWeatherData(place);
  response.then((data) => {
    console.log(data);
    changeLoc(data);
  });
}

const searchBar = document.getElementById('searchbar');
const searchBtn = document.getElementById('btnsearch');

searchBtn.addEventListener('click', (e) => {
  console.log(searchBar.value);
  getData(searchBar.value);
});
