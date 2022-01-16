import DisplayMenu from "./utils/displayMenu.js";
import searchByTag from "./utils/bytagSearch.js";
import recipes from "../data/recipes.js";
import TagsandListFactory from "./factories/listandtags.js";
import RecipecardFactory from "./factories/recipecard.js";

// Display des menus
DisplayMenu();
// creation des listes et des tags
TagsandListFactory(recipes);

// display des 50 recettes
recipes.forEach((recipe) => RecipecardFactory(recipe));

// RESERARCH FONCTION//

// mainResearch(recipes);

searchByTag(recipes);
