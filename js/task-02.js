const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
let arrayOfItems = [];
ingredients.forEach((ingredient) => {
  const item = document.createElement("li"); //створюю пункт списку
  item.textContent = ingredient; //додаю текст до пункту списку
  item.classList.add("list-item"); //додаю клас до пункту списку
  arrayOfItems.push(item); //запушую кожен пункт до масиву, щоб потім всі пункти скопом додатии в ДОМ
});
ingredientsList.append(...arrayOfItems);
