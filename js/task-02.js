const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
// console.log(ingredientsList);
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = [ingredient];
  ingredientsList.append(item);
  console.log(item);
});
