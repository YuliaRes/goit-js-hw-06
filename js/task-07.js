const inputSlider = document.querySelector('#font-size-control');
const textItem = document.querySelector('#text');

inputSlider.addEventListener('input', onInput);

function onInput(event) {
    textItem.style.fontSize = event.currentTarget.value + 'px';
}