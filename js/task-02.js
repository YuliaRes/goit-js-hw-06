const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('ul');

const addSngradients = ingredients.map(ingrsdient => {
  
  const navIngradientsList = document.createElement('li');

  navIngradientsList.classList.add('item')
  navIngradientsList.textContent = ingrsdient;

  return navIngradientsList;
  
});

navEl.append(...addSngradients);

