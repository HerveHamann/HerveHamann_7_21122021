import RecipecardFactory from "../factories/recipecard.js";
import { listResetAll, ListUpdateAll } from "./displayUpdate.js";
import {
  inputbox,
  ingrebox,
  appliancebox,
  ustensilbox,
  recipebox,
  IngredientFind,
  IngredientFindOpened,
  UstensilFind,
} from "./subSearch.js";
import addEventListener from "./eventlisteners.js";

export default function Search(recipes) {
  function PushAllRecipeFind() {
    const mainSearch = document.getElementById("research");
    const input = mainSearch.value;

    // étape de vérification du nombre de caractères
    if (input.length >= 3) {
      // étape de recherche des noms des recettes correspondantes
      inputbox.push(input);

      const totalResult = [];

      for (let i = 0; i < recipes.length; i += 1) {
        if (
          recipes[i].name
            .toLocaleLowerCase()
            .includes(input.toLocaleLowerCase()) ||
          IngredientFindOpened(recipes[i], input) ||
          recipes[i].description
            .toLocaleLowerCase()
            .includes(input.toLocaleLowerCase())
        ) {
          totalResult.push(recipes[i]);
        }
      }

      let uniqueResult = [];
      uniqueResult = [...new Set(totalResult)];

      recipebox.push(uniqueResult);
    }

    ingrebox.forEach((ingre) => {
      const allrecipeByIngre = recipes.filter((recipe) =>
        IngredientFind(recipe, ingre)
      );

      recipebox.push(allrecipeByIngre);
    });

    appliancebox.forEach((appli) => {
      const allrecipeByAppli = recipes.filter(
        (recipe) =>
          recipe.appliance
            .toLocaleLowerCase()
            .includes(appli.toLocaleLowerCase()) &&
          recipe.appliance.length === appli.length
      );

      recipebox.push(allrecipeByAppli);
    });

    ustensilbox.forEach((usten) => {
      const allrecipeByusten = recipes.filter((recipe) =>
        UstensilFind(recipe, usten)
      );

      recipebox.push(allrecipeByusten);
    });

    let result = [];
    if (
      (inputbox.length !== 0 && input.length >= 3) ||
      ingrebox.length !== 0 ||
      appliancebox.length !== 0 ||
      ustensilbox.length !== 0
    ) {
      result = recipebox
        .shift()
        .filter((v) => recipebox.every((a) => a.indexOf(v) !== -1));
    }

    listResetAll();

    result.forEach((item) => {
      ListUpdateAll(item);
    });

    const recipeSection = document.querySelector(".displayrecipe");
    recipeSection.innerHTML = " ";

    result.forEach((item) => {
      RecipecardFactory(item);
    });

    if (
      input.length === 0 &&
      ingrebox.length === 0 &&
      appliancebox.length === 0 &&
      ustensilbox.length === 0
    ) {
      listResetAll();
      recipes.forEach((item) => {
        ListUpdateAll(item);
      });
    }

    const noResult = document.querySelector(".noresult");
    if (
      (input.length >= 3 && result.length === 0) ||
      (result.length === 0 &&
        (ingrebox.length !== 0 ||
          appliancebox.length !== 0 ||
          ustensilbox.length !== 0))
    ) {
      noResult.style.display = "block";
    } else {
      noResult.style.display = "none";
    }
  }
  addEventListener(PushAllRecipeFind);
}
