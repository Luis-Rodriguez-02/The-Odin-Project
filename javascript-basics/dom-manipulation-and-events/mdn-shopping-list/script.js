const unorderedList = document.querySelector("#list");
const input = document.querySelector("#item");
const buttons = document.querySelectorAll("#button");

buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});

function buttonClick() {
  let currentValue = input.value;
  const listItem = document.createElement("li");
  const spanItem = document.createElement("span");
  spanItem.textContent = currentValue;
  const delButton = document.createElement("button");
  delButton.textContent = "Delete";

  delButton.addEventListener("click", () => listItem.remove());
  listItem.appendChild(spanItem);
  listItem.appendChild(delButton);
  unorderedList.appendChild(listItem);
  input.value = "";
  document.querySelector("input").focus();
}