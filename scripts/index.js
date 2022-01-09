import DisplayMenu from "./utils/displayMenu.js";

import recipes from "../data/recipes.js";
import ListAndTagsFactory from "./factories/listandtags.js";
import RecipecardFactory from "./factories/recipecard.js";

// Display des menus

DisplayMenu();

// Display de la liste des ingrédients et des tags
let totalApplience = [];
let totalIngredients = [];
let totalUstensils = [];

function FeedListAndTag(recipe) {
  totalApplience.push(recipe.appliance);
  const subIngredient = recipe.ingredients;
  subIngredient.forEach((ingredient) => {
    totalIngredients.push(ingredient.ingredient);
  });
  const SubUstensils = recipe.ustensils;
  SubUstensils.forEach((ustensil) => {
    totalUstensils.push(ustensil);
  });
}
recipes.recipes.forEach((recipe) => {
  FeedListAndTag(recipe);
});
// réduction que chaque élément soit unique
let uniqueApplience = [...new Set(totalApplience)];
let uniqueIngredients = [...new Set(totalIngredients)];
let uniqueUstensils = [...new Set(totalUstensils)];

ListAndTagsFactory(uniqueApplience, uniqueIngredients, uniqueUstensils);

// display des 50 recettes
recipes.recipes.forEach((recipe) => RecipecardFactory(recipe));

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
    const recipeArray = recipes.recipes;

    const resultName = recipeArray.filter((recipe) =>
      recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    // étape de recherche des ingrédients des recettes correspondantes
    const resultIngredient = recipeArray.filter((recipe) =>
      IngredientFind(recipe, input)
    );
    // étape de recherche des descriptions des recettes correspondantes
    const resultDescription = recipeArray.filter((recipe) =>
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
    const uniqueResultArray = { uniqueResult };
    console.log(uniqueResultArray);

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

    totalApplience = [];
    totalIngredients = [];
    totalUstensils = [];

    // Affichage des résultats de la recherche

    uniqueResultArray.uniqueResult.forEach((recipe) =>
      RecipecardFactory(recipe)
    );
    // Mise à jour des listes et tags de la recherche
    uniqueResultArray.uniqueResult.forEach((recipe) => {
      FeedListAndTag(recipe);
    });
    console.log(uniqueIngredients);

    uniqueApplience = [...new Set(totalApplience)];
    uniqueIngredients = [...new Set(totalIngredients)];
    uniqueUstensils = [...new Set(totalUstensils)];

    ListAndTagsFactory(uniqueApplience, uniqueIngredients, uniqueUstensils);
  }
}
mainSearch.addEventListener("keyup", () => {
  MainResearch();
});
