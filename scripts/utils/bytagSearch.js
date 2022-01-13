import { CreateList, ListFactory } from "../factories/listandtags.js";
import RecipecardFactory from "../factories/recipecard.js";

import { ResetAllList, ResetRecipe, ListReset } from "./utilsFunction.js";

export default function searchByTag(recipes) {
  const ingredientInput = document.getElementById("ingredient");
  const deviceInput = document.getElementById("device");
  const ustensilsInput = document.getElementById("ustensils");

  function SelectIngredientandRecipe() {
    const ingredientLi = document.getElementsByClassName("ingredient-list");
    const ingredientLiArray = Array.from(ingredientLi);

    ingredientLiArray.forEach((e) => {
      e.addEventListener("click", () => {
        const dataIngredientOnClick = e.innerHTML;

        function IngredientFind(recipe) {
          if (
            recipe.ingredients.find(
              (object) =>
                object.ingredient
                  .toLocaleLowerCase()
                  .includes(dataIngredientOnClick.toLocaleLowerCase()) &&
                object.ingredient.length === dataIngredientOnClick.length
            )
          )
            return true;
          return false;
        }

        const resultIngredient = recipes.filter((recipe) =>
          IngredientFind(recipe, dataIngredientOnClick)
        );

        console.log(resultIngredient);
        ResetAllList();
        ResetRecipe();
        ListFactory(resultIngredient);

        resultIngredient.forEach((item) => {
          RecipecardFactory(item);
        });

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
        ResetAllList();
        ResetRecipe();

        ListFactory(resultAppliance);
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

        ResetAllList();
        ResetRecipe();

        ListFactory(resultUstensils);
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

    const resultIngredient = recipes.map((recipe) =>
      recipe.ingredients.filter((ingredient) =>
        ingredient.ingredient
          .toLocaleLowerCase()
          .includes(ingredientData.toLocaleLowerCase())
      )
    );

    const resultIngredientMerge = resultIngredient.flat(1);
    const resultIngredientName = [];

    resultIngredientMerge.forEach((ingredient) => {
      resultIngredientName.push(ingredient.ingredient);
    });
    const finalIngredientResult = [...new Set(resultIngredientName)];

    ListReset("ingredient");

    finalIngredientResult.forEach((recipe) => CreateList(recipe, "ingredient"));
  }

  ingredientInput.addEventListener("keyup", () => {
    ingredientSearch();
    SelectIngredientandRecipe();
  });

  function deviceSearch() {
    const applianceData = deviceInput.value;

    const resultAppliance = recipes.filter((recipe) =>
      recipe.appliance
        .toLocaleLowerCase()
        .includes(applianceData.toLocaleLowerCase())
    );
    const resultApplianceName = [];

    resultAppliance.forEach((appliance) => {
      resultApplianceName.push(appliance.appliance);
    });
    const finalApplianceResult = [...new Set(resultApplianceName)];

    ListReset("device");

    finalApplianceResult.forEach((recipe) => CreateList(recipe, "device"));
  }

  deviceInput.addEventListener("keyup", () => {
    deviceSearch();
    SelectApplianceandRecipe();
  });

  function ustensilSearch() {
    const ustensilData = ustensilsInput.value;

    const resultUstensils = recipes.map((recipe) =>
      recipe.ustensils.filter((ustensil) =>
        ustensil.toLocaleLowerCase().includes(ustensilData.toLocaleLowerCase())
      )
    );

    const resultUstensilsMerge = resultUstensils.flat(1);
    const resultUstensilsName = [];

    resultUstensilsMerge.forEach((ustensil) => {
      resultUstensilsName.push(ustensil);
    });

    const finalUstensilsResult = [...new Set(resultUstensilsName)];

    ListReset("ustensils");

    finalUstensilsResult.forEach((recipe) => CreateList(recipe, "ustensils"));
  }
  ustensilsInput.addEventListener("keyup", () => {
    ustensilSearch();
    SelectUstensilsandRecipe();
  });

  SelectIngredientandRecipe();
  SelectApplianceandRecipe();
  SelectUstensilsandRecipe();
}
