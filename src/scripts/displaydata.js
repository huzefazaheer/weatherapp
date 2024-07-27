const locHeading = document.getElementById('location');
const subHeading = document.getElementById('subheading');

export default function changeText(data) {
  changeLoc(data.resolvedAddress);
  changeHead(data.currentConditions.conditions);
}

function changeLoc(text) {
  locHeading.innerText = text;
}

function changeHead(text) {
  subHeading.innerText = text;
}
