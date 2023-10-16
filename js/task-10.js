function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = inputEl.nextElementSibling;
const btnDestroy = btnCreate.nextElementSibling;
const divBox = document.querySelector("#boxes");

function createBoxes(event) {
  const amount = inputEl.value;
  // console.log(amount);

  const numbers = [];
  for (let i = 1; i <= amount; i += 1) {
    numbers.push(i);
  }
  // console.log(numbers);

  const markup = numbers
    .map(
      (number) =>
        `<div style='background-color: ${getRandomHexColor()}; 
        width: ${30 + (number - 1) * 10}px; 
        height: ${30 + (number - 1) * 10}px'></div>`
    )
    .join("");
  // console.log(markup);

  divBox.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes(event) {
  divBox.innerHTML = "";
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
