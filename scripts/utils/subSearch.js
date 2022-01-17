// recherche l'ingrédient exact dans la recette (pour choix par tag)

function IngredientFind(recipe, listText) {
  if (
    recipe.ingredients.find(
      (ingre) =>
        ingre.ingredient
          .toLocaleLowerCase()
          .includes(listText.toLocaleLowerCase()) &&
        ingre.ingredient.length === listText.length
    )
  )
    return true;
  return false;
}

// recherche l'ingrédient ou partie dans la recette (pour choix par input recherche principale)
function IngredientFindOpened(recipe, listText) {
  if (
    recipe.ingredients.find((ingre) =>
      ingre.ingredient
        .toLocaleLowerCase()
        .includes(listText.toLocaleLowerCase())
    )
  )
    return true;
  return false;
}

// recherche l'ustensil exact dans la recette (pour choix par tag)
function UstensilFind(recipe, input) {
  if (
    recipe.ustensils.find(
      (usten) =>
        usten.toLocaleLowerCase().includes(input.toLocaleLowerCase()) &&
        usten.length === input.length
    )
  )
    return true;
  return false;
}
// création  des containers de données
const inputbox = [];
const ingrebox = [];
const appliancebox = [];
const ustensilbox = [];
const recipebox = [];

export {
  inputbox,
  ingrebox,
  appliancebox,
  ustensilbox,
  recipebox,
  IngredientFind,
  IngredientFindOpened,
  UstensilFind,
};
