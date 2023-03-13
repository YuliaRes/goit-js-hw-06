const inputValue = document.querySelector('input');

inputValue.addEventListener('blur', onInputFocus)

function onInputFocus(event) {
    if (event.currentTarget.value.length == inputValue.dataset.length)
        inputValue.classList.add('valid');
    else
        inputValue.classList.add('invalid');
}