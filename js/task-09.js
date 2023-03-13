const bodyEl = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const spanChangeColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChangeColor.addEventListener('click', addEventColour);

function addEventColour() {
  let colorChoose = getRandomHexColor();
  bodyEl.style.backgroundColor = colorChoose;
  spanChangeColor.textContent = colorChoose;

}



