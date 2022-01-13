function ResetAllList() {
  const ingredientListContainer = document.querySelector(
    `.combox-ingredient__combobox__list`
  );
  const deviceListContainer = document.querySelector(
    `.combox-device__combobox__list`
  );
  const ustensilsListContainer = document.querySelector(
    `.combox-ustensils__combobox__list`
  );

  ingredientListContainer.innerHTML = " ";
  deviceListContainer.innerHTML = " ";
  ustensilsListContainer.innerHTML = " ";
}
function ResetRecipe() {
  const recipeSection = document.querySelector(".displayrecipe");
  recipeSection.innerHTML = " ";
}

function ListReset(type) {
  const ListContainer = document.querySelector(
    `.combox-${type}__combobox__list`
  );
  ListContainer.innerHTML = " ";
}
export { ResetAllList, ResetRecipe, ListReset };
