import DisplayMenu from "./utils/displayMenu.js";

import recipes from "../data/recipes.js";
import { TagsFactory, ListFactory } from "./factories/listandtags.js";
import RecipecardFactory from "./factories/recipecard.js";
import mainResearch from "./utils/mainSearch.js";

// Display des menus
DisplayMenu();
// creation des listes et des tags
TagsFactory(recipes);
ListFactory(recipes);

// display des 50 recettes
recipes.forEach((recipe) => RecipecardFactory(recipe));

// RESERARCH FONCTION//

mainResearch(recipes);

// const AllListItem = document.querySelectorAll(
//   ".ingredient-list,.device-list,.ustensils-list"
// );

// const AllListItemArray = Array.from(AllListItem);
// console.log(AllListItemArray);

// AllListItemArray.forEach((element) => {
//   console.log(element.innerText);
//   //   if (element.innerText !== input) {
//   //     const object = element;
//   //     object.style.display = "none";
//   //   }
// });
