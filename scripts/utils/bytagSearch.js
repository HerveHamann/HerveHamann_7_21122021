import { CreateList, CreateTag } from "../factories/listandtags.js";
import RecipecardFactory from "../factories/recipecard.js";

function TagAndListReset(type) {
  const ListContainer = document.querySelector(
    `.combox-${type}__combobox__list`
  );
  ListContainer.innerHTML = " ";
  const existigTag = document.getElementsByClassName(`tag-bar__${type}-tag`);

  const existigTagArray = Array.from(existigTag);

  existigTagArray.forEach((e) => {
    e.style.display = "none";
  });
}

export default function searchByTag(recipes) {
  const ingredientInput = document.getElementById("ingredient");
  const deviceInput = document.getElementById("device");
  const ustensilsInput = document.getElementById("ustensils");

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

    TagAndListReset("ingredient");

    finalIngredientResult.forEach((recipe) => CreateList(recipe, "ingredient"));
    finalIngredientResult.forEach((recipe) => CreateTag(recipe, "ingredient"));
  }

  ingredientInput.addEventListener("keyup", () => {
    ingredientSearch();
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

    TagAndListReset("device");

    finalApplianceResult.forEach((recipe) => CreateList(recipe, "device"));
    finalApplianceResult.forEach((recipe) => CreateTag(recipe, "device"));
  }

  deviceInput.addEventListener("keyup", () => {
    deviceSearch();
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

    TagAndListReset("ustensils");

    finalUstensilsResult.forEach((recipe) => CreateList(recipe, "ustensils"));
    finalUstensilsResult.forEach((recipe) => CreateTag(recipe, "ustensils"));
  }
  ustensilsInput.addEventListener("keyup", () => {
    ustensilSearch();
  });
}
