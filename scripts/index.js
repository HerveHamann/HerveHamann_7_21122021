const ingredientBox = document.querySelector(".combox-ingredient");
const ingredientComboBox = document.querySelector(
  ".combox-ingredient__combobox"
);
const ingredientSearchBar = document.getElementById("ingredient");
const ingredientSearchBarLabel = document.querySelector(
  ".combox-ingredient__combobox__combobox-searchfield__label"
);
const ingredientArrow = document.querySelector(
  ".combox-ingredient__combobox__combobox-searchfield__arrowdown"
);

const ingredientList = document.querySelector(
  ".combox-ingredient__combobox__list"
);

ingredientSearchBarLabel.addEventListener("click", () => {
  ingredientBox.style.width = "667px";
  ingredientBox.style.height = "397px";
  ingredientBox.style.alignItems = "start";
  ingredientComboBox.style.marginTop = "23px";
  ingredientSearchBar.style.display = "block";
  ingredientList.style.display = "flex";
  ingredientSearchBarLabel.style.display = "none";
  ingredientArrow.style.transform = "rotate(180deg)";
});

// .addEventListener("click", () => {
//   ingredientBox.style.width = "170px";
//   ingredientBox.style.color = "red";
//   ingredientBox.style.height = "69px";
//   ingredientBox.style.alignItems = "center";
//   ingredientComboBox.style.marginTop = "0px";
//   ingredientSearchBar.style.display = "none";
//   ingredientList.style.display = "none";
//   ingredientSearchBarLabel.style.display = "block";
//   ingredientArrow.style.transform = "rotate(360deg)";
// });
