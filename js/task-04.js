let counterValue = 0;

const valueNamber = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');



const handleDecrementClik = () => {
    counterValue -= 1;
    valueNamber.textContent = counterValue;
}

const handleIncrementClik = () => {
    counterValue += 1;
    valueNamber.textContent = counterValue;
    
    console.log(counterValue);
}

decrementBtn.addEventListener("click", handleDecrementClik);
incrementBtn.addEventListener("click", handleIncrementClik);

