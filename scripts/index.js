import DisplayMenu from "./utils/displayMenu.js";
import Search from "./utils/search.js";
import recipes from "../data/recipes.js";
import TagsandListFactory from "./factories/listandtags.js";
import RecipecardFactory from "./factories/recipecard.js";

function InitDisplay() {
  // Display des menus
  DisplayMenu();
  // creation des listes et des tags
  TagsandListFactory(recipes);

  // display des 50 recettes
  recipes.forEach((recipe) => RecipecardFactory(recipe));
}

InitDisplay();
// RESERARCH FONCTION//

Search(recipes);
