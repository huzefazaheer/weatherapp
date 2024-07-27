const locHeading = document.getElementById('location');
const subHeading = document.getElementById('subheading');
const background = document.body;

export default function changeText(data) {
  changeLoc(data.resolvedAddress);
  changeHead(data.currentConditions.conditions);
  setBackground(data.currentConditions.icon);
}

function changeLoc(text) {
  locHeading.innerText = text;
}

function changeHead(text) {
  subHeading.innerText = text;
}

function setBackground(data) {
  background.classList = null;

  switch (data) {
    case 'partly-cloudy-day':
      background.classList.add('partly-cloudy-day');
      break;
    case 'clear-night':
      background.classList.add('clear-night');
      break;
    case 'rain':
      background.classList.add('rain');
      break;
    case 'clear-day':
      background.classList.add('partly-cloudy-day');
      break;
    case 'cloudy':
      background.classList.add('cloudy');
      break;
    default:
      break;
  }
}
