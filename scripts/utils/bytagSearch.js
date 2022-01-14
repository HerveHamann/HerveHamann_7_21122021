import {
  ListUpdate,
  ListUpdateAll,
  listResetAll,
} from "../factories/listandtags.js";
import RecipecardFactory from "../factories/recipecard.js";

import { ResetRecipe } from "./utilsFunction.js";

export default function searchByTag(recipes) {
  const ingredientInput = document.getElementById("ingredient");
  const deviceInput = document.getElementById("device");
  const ustensilsInput = document.getElementById("ustensils");

  let ingrebox = [];
  const recipeByIngrebox = [];
  /// /LA J'AI SORTI çA en changeant dataIngredientOnClick par ingrebox, début pour tout faire dehors
  // début de chantier de la fonction (avec event? qui display tout)

  function PushAllRecipeFindByIngre() {
    function IngredientFind(recipe, ingre) {
      if (
        recipe.ingredients.find(
          (object) =>
            object.ingredient
              .toLocaleLowerCase()
              .includes(ingre.toLocaleLowerCase())
          //   &&
          // object.ingredient.length === ingre.length
        )
      )
        return true;
      return false;
    }
    // Pour chaque ingrédient, on filtre les recettes

    ingrebox.forEach((ingre) => {
      const allrecipeByIngre = recipes.filter((recipe) =>
        IngredientFind(recipe, ingre)
      );
      ingrebox = [];
      // et on les envoie dans un tableau (tableau de tableau de recettes)
      recipeByIngrebox.push(allrecipeByIngre);
    });

    console.log(recipeByIngrebox.length);
    // on cree un tableau avec toutes les recettes
    const uniqueRecipeByIngrebox = recipeByIngrebox.flat(1);
    console.log(uniqueRecipeByIngrebox);

    // on compte dans ce tableau le nombre de fois qu'apparait chaque recette
    // si une recette apparait x fois et que le tableau compte x tags, elle est commune
    // alors on push la recette dans le tableau final
    const counts = {};
    const finalIngredientResult = [];
    uniqueRecipeByIngrebox.forEach((x) => {
      counts[x.id] = (counts[x.id] || 0) + 1;
      console.log(x);
      if (parseInt(counts[x.id], 10) === recipeByIngrebox.length) {
        finalIngredientResult.push(x);
      }
    });
    console.log(counts);
    console.log(finalIngredientResult);

    listResetAll();

    finalIngredientResult.forEach((item) => {
      ListUpdateAll(item);
    });

    ResetRecipe();

    finalIngredientResult.forEach((item) => {
      RecipecardFactory(item);
    });
  }

  function SelectIngredientandRecipe() {
    const ingredientLi = document.getElementsByClassName("ingredient-list");
    const ingredientLiArray = Array.from(ingredientLi);

    ingredientLiArray.forEach((e) => {
      e.addEventListener("click", () => {
        const dataIngredientOnClick = e.innerHTML;
        ingrebox.push(dataIngredientOnClick);

        PushAllRecipeFindByIngre();

        const existingTag = document.getElementsByClassName(
          `tag-bar__ingredient-tag`
        );

        const existingTagArray = Array.from(existingTag);

        existingTagArray.forEach((element) => {
          if (
            element.innerText.replace(/\s+/g, "") ===
            dataIngredientOnClick.replace(/\s+/g, "")
          ) {
            const object = element;
            object.style.display = "block";
          }
        });
      });
    });
  }

  function SelectApplianceandRecipe() {
    const applianceLi = document.getElementsByClassName("device-list");
    const applianceLiArray = Array.from(applianceLi);

    applianceLiArray.forEach((e) => {
      e.addEventListener("click", () => {
        const dataApplianceOnClick = e.innerHTML;

        const resultAppliance = recipes.filter((recipe) =>
          recipe.appliance
            .toLocaleLowerCase()
            .includes(dataApplianceOnClick.toLocaleLowerCase())
        );

        ResetRecipe();
        listResetAll();

        resultAppliance.forEach((item) => {
          ListUpdateAll(item);
        });

        resultAppliance.forEach((item) => {
          RecipecardFactory(item);
        });

        const existingTag =
          document.getElementsByClassName(`tag-bar__device-tag`);
        const existingTagArray = Array.from(existingTag);
        existingTagArray.forEach((element) => {
          if (
            element.innerText.replace(/\s+/g, "") ===
            dataApplianceOnClick.replace(/\s+/g, "")
          ) {
            const object = element;
            object.style.display = "block";
          }
        });
      });
    });
  }

  function SelectUstensilsandRecipe() {
    const ustensilsLi = document.getElementsByClassName("ustensils-list");
    const ustensilsLiArray = Array.from(ustensilsLi);

    ustensilsLiArray.forEach((e) => {
      e.addEventListener("click", () => {
        const dataUstensilsOnClick = e.innerHTML;

        function UstensilFind(recipe) {
          if (
            recipe.ustensils.find((object) =>
              object
                .toLocaleLowerCase()
                .includes(dataUstensilsOnClick.toLocaleLowerCase())
            )
          )
            return true;
          return false;
        }
        const resultUstensils = recipes.filter((recipe) =>
          UstensilFind(recipe, dataUstensilsOnClick)
        );

        listResetAll();

        resultUstensils.forEach((item) => {
          ListUpdateAll(item);
        });
        ResetRecipe();

        resultUstensils.forEach((item) => {
          RecipecardFactory(item);
        });

        const existingTag = document.getElementsByClassName(
          `tag-bar__ustensils-tag`
        );

        const existingTagArray = Array.from(existingTag);

        existingTagArray.forEach((element) => {
          if (
            element.innerText.replace(/\s+/g, "") ===
            dataUstensilsOnClick.replace(/\s+/g, "")
          ) {
            const object = element;
            object.style.display = "block";
          }
        });
      });
    });
  }

  function ingredientSearch() {
    const ingredientData = ingredientInput.value;
    ListUpdate(ingredientData);
  }

  ingredientInput.addEventListener("keyup", () => {
    ingredientSearch();
    SelectIngredientandRecipe();
  });

  function deviceSearch() {
    const applianceData = deviceInput.value;
    ListUpdate(applianceData);
  }

  deviceInput.addEventListener("keyup", () => {
    deviceSearch();
    SelectApplianceandRecipe();
  });

  function ustensilSearch() {
    const ustensilData = ustensilsInput.value;
    ListUpdate(ustensilData);
  }
  ustensilsInput.addEventListener("keyup", () => {
    ustensilSearch();
    SelectUstensilsandRecipe();
  });

  SelectIngredientandRecipe();
  SelectApplianceandRecipe();
  SelectUstensilsandRecipe();
}
