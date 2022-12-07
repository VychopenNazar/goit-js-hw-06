"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('#ingredients');

const ingredientsList = ingredients.reduce((el, item) => el + `<li>${item}</li>`, '');

console.log(ulElement.innerHTML = ingredientsList);