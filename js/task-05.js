const titleEl = document.querySelector('h1')
const input = titleEl.previousElementSibling
const span = titleEl.firstElementChild

// const input = document.querySelector("#name-input");
// const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
  if (input.value.length === 0) {
    span.textContent = "Anonymus";
  }
});
