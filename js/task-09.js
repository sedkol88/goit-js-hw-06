function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector('div.widget');
const bodyEl = divEl.parentNode;
const btnEl = divEl.lastElementChild;
const paragEl = divEl.firstElementChild;
const spanEl = paragEl.firstElementChild;

// const bodyEl = document.querySelector("body");
// const spanEl = document.querySelector("span.color");
// const btnEl = document.querySelector("button.change-color");

bodyEl.setAttribute("style", "background-color: ");

btnEl.addEventListener("click", (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
});
