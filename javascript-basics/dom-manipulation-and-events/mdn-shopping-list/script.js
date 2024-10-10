const unorderedList = document.querySelector("ul");
const input = document.querySelector("item");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});

function buttonClick() {
  let currentValue = input.value;
}