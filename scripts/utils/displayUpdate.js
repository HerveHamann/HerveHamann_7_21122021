import { IngredientFind, UstensilFind, recipebox } from "./subSearch.js";

// cache toutes les listes
function listResetAll() {
  const AllListItem = document.querySelectorAll(
    ".ingredient-list,.device-list,.ustensils-list"
  );

  const AllListItemArray = Array.from(AllListItem);

  AllListItemArray.forEach((element) => {
    const object = element;

    object.style.display = "none";
  });
}
// fait apparaitre les elements de list qui match avec l'input dans une combobox
function ListUpdateBySearchInput(input, type) {
  const List = document.querySelectorAll(`.${type}-list`);
  const ListArray = Array.from(List);

  ListArray.forEach((element) => {
    const object = element;
    object.style.display = "none";
    if (
      element.innerText.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    ) {
      object.style.display = "block";
    }
  });
}
// fait apparaitre les elements de list qui match avec l'ensemble des recettes selectionnées
function ListUpdateAll(recipe) {
  const ingredientList = document.querySelectorAll(".ingredient-list");
  const deviceList = document.querySelectorAll(".device-list");
  const ustensilsList = document.querySelectorAll(".ustensils-list");

  const ingredientListArray = Array.from(ingredientList);
  const deviceListArray = Array.from(deviceList);
  const ustensilsListArray = Array.from(ustensilsList);

  ingredientListArray.forEach((element) => {
    const listText = element.innerText;
    const object = element;

    if (IngredientFind(recipe, listText)) {
      object.style.display = "block";
    }
  });

  deviceListArray.forEach((element) => {
    const listText = element.innerText;
    const object = element;

    if (
      listText
        .toLocaleLowerCase()
        .includes(recipe.appliance.toLocaleLowerCase()) &&
      recipe.appliance.length === listText.length
    ) {
      object.style.display = "block";
    }
  });

  ustensilsListArray.forEach((element) => {
    const listText = element.innerText;
    const object = element;

    if (UstensilFind(recipe, listText)) {
      object.style.display = "block";
    }
  });
}

function DisplayTag(type, dataOnClick) {
  const existingTag = document.getElementsByClassName(`tag-bar__${type}-tag`);

  const existingTagArray = Array.from(existingTag);

  existingTagArray.forEach((element) => {
    if (
      element.innerText.replace(/\s+/g, "") === dataOnClick.replace(/\s+/g, "")
    ) {
      const object = element;
      object.style.display = "block";
    }
  });
}
function EraseTagData(element, box) {
  const object = element;
  object.parentElement.style.display = "none";
  const tagName = object.parentElement.innerText.replace(/\s+/g, "");
  box.forEach((item) => {
    if (item.replace(/\s+/g, "") === tagName) {
      let i = 0;
      while (i < box.length) {
        if (box[i] === item) {
          box.splice(i, 1);
          recipebox.length = 0;
        } else {
          i += 1;
        }
      }
    }
  });
}
export {
  listResetAll,
  ListUpdateBySearchInput,
  ListUpdateAll,
  DisplayTag,
  EraseTagData,
};
