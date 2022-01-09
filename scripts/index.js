import DisplayMenu from "./utils/displayMenu.js";

import recipes from "../data/recipes.js";
import ListAndTagsFactory from "./factories/listandtags.js";
import RecipecardFactory from "./factories/recipecard.js";

// Display des menus

DisplayMenu();

ListAndTagsFactory(recipes);

// display des 50 recettes
recipes.forEach((recipe) => RecipecardFactory(recipe));

// RESERARCH FONCTION//

// Fonction de recherche principale//
const mainSearch = document.getElementById("research");

function IngredientFind(recipe, input) {
  if (
    recipe.ingredients.find((object) =>
      object.ingredient.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    )
  )
    return true;
  return false;
}

function MainResearch() {
  const input = mainSearch.value;
  // étape de vérification du nombre de caractères
  if (input.length >= 3) {
    // étape de recherche des noms des recettes correspondantes

    const resultName = recipes.filter((recipe) =>
      recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    // étape de recherche des ingrédients des recettes correspondantes
    const resultIngredient = recipes.filter((recipe) =>
      IngredientFind(recipe, input)
    );
    // étape de recherche des descriptions des recettes correspondantes
    const resultDescription = recipes.filter((recipe) =>
      recipe.description.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    // création du tableau contentant tous les résultats
    const totalResult = [
      ...resultName,
      ...resultIngredient,
      ...resultDescription,
    ];
    // tableau des résultats uniques
    const uniqueResult = [...new Set(totalResult)];

    console.log(uniqueResult);

    // reset des recettes listes et tags à chaque usage de la recherche principale
    const recipeSection = document.querySelector(".displayrecipe");
    const ingredientListContainer = document.querySelector(
      `.combox-ingredient__combobox__list`
    );
    const deviceListContainer = document.querySelector(
      `.combox-device__combobox__list`
    );
    const ustensilsListContainer = document.querySelector(
      `.combox-ustensils__combobox__list`
    );
    const tagBar = document.querySelector(".tag-bar");

    recipeSection.innerHTML = " ";
    ingredientListContainer.innerHTML = " ";
    deviceListContainer.innerHTML = " ";
    ustensilsListContainer.innerHTML = " ";
    tagBar.innerHTML = " ";

    // Affichage des résultats de la recherche

    uniqueResult.forEach((recipe) => RecipecardFactory(recipe));
    ListAndTagsFactory(uniqueResult);
  }
}
mainSearch.addEventListener("keyup", () => {
  MainResearch();
});
