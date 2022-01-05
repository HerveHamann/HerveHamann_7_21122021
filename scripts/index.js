import DisplayMenu from "./utils/displayMenu.js";

import recipes from "../data/recipes.js";
import ListAndTagsFactory from "./factories/listandtags.js";
import RecipecardFactory from "./factories/recipecard.js";

DisplayMenu();

ListAndTagsFactory(recipes);

RecipecardFactory(recipes);
