function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputEl = document.querySelector("input");

// function createBoxes(amount) {
//   const valueInput = inputEl.value;
//   console.log(valueInput);
// }
