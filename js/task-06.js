const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const num = parseInt(input.dataset.length);
  if (input.value.length === num) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
});
