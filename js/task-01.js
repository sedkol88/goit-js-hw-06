const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  console.log(`Category: ${categoryTitle.textContent}`);

  const categoryItem = category.querySelectorAll("li");
  console.log(`Elements: ${categoryItem.length}`);
});
