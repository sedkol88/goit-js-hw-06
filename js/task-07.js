const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

span.setAttribute("style", "font-size: 56px");

input.addEventListener("input", (event) => {
  const row = parseFloat(input.value);
  span.style.fontSize = `${row}px`;
});
