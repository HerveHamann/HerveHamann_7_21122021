import DisplayMenu from "./utils/displayMenu.js";

import recipes from "../data/recipes.js";
import { ListAndTagsFactory } from "./factories/listandtags.js";
import RecipecardFactory from "./factories/recipecard.js";
import { mainResearch } from "./utils/mainSearch.js";
import searchByTag from "./utils/bytagSearch.js";
// Display des menus

DisplayMenu();

ListAndTagsFactory(recipes);

// display des 50 recettes

recipes.forEach((recipe) => RecipecardFactory(recipe));

// RESERARCH FONCTION//

mainResearch(recipes);

searchByTag(recipes);
