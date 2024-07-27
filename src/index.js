import '../static/style/normalise.css';
import '../static/style/placement.css';
import '../static/style/style.css';
import '../static/style/weather.css';

import fetchWeatherData from './scripts/datafetcher.js';
import changeText from './scripts/displaydata.js';

function getData(place) {
  const response = fetchWeatherData(place);
  response.then((data) => {
    console.log(data);
    changeText(data);
  });
}

const searchBar = document.getElementById('searchbar');
const searchBtn = document.getElementById('btnsearch');

searchBtn.addEventListener('click', (e) => {
  console.log(searchBar.value);
  getData(searchBar.value);
});

searchBar.addEventListener('keypress', (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    searchBtn.click();
  }
});
