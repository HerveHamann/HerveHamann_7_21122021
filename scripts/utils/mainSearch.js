import { ListFactory } from "../factories/listandtags.js";
import RecipecardFactory from "../factories/recipecard.js";
import { ResetAllList, ResetRecipe } from "./utilsFunction.js";
import searchByTag from "./bytagSearch.js";

export default function mainResearch(recipes) {
  const mainSearch = document.getElementById("research");

  function IngredientFind(recipe, input) {
    if (
      recipe.ingredients.find((object) =>
        object.ingredient
          .toLocaleLowerCase()
          .includes(input.toLocaleLowerCase())
      )
    )
      return true;
    return false;
  }

  function Research() {
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
        recipe.description
          .toLocaleLowerCase()
          .includes(input.toLocaleLowerCase())
      );
      // création du tableau contentant tous les résultats
      const totalResult = [
        ...resultName,
        ...resultIngredient,
        ...resultDescription,
      ];
      // tableau des résultats uniques
      const uniqueResult = [...new Set(totalResult)];

      ResetAllList();
      ResetRecipe();
      // Affichage des résultats de la recherche

      uniqueResult.forEach((recipe) => RecipecardFactory(recipe));
      ListFactory(uniqueResult);

      searchByTag(uniqueResult);

      const noResult = document.querySelector(".noresult");
      if (uniqueResult.length === 0) {
        noResult.style.display = "block";
      } else {
        noResult.style.display = "none";
      }
    }
  }
  mainSearch.addEventListener("keyup", () => {
    Research();
  });
  searchByTag(recipes);
}
