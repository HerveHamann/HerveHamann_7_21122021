import RecipecardFactory from "../factories/recipecard.js";

function ResetRecipe() {
  const recipeSection = document.querySelector(".displayrecipe");
  recipeSection.innerHTML = " ";
}

function listResetAll() {
  const AllListItem = document.querySelectorAll(
    ".ingredient-list,.device-list,.ustensils-list"
  );

  const AllListItemArray = Array.from(AllListItem);

  AllListItemArray.forEach((element) => {
    const object = element;

    object.style.display = "none";
  });
}

function IngredientListSearchInput(input) {
  const ingredientList = document.querySelectorAll(".ingredient-list");
  const ingredientListArray = Array.from(ingredientList);

  ingredientListArray.forEach((element) => {
    const object = element;
    object.style.display = "none";
    if (
      element.innerText.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    ) {
      object.style.display = "block";
    }
  });
}

function ApplianceListSearchInput(input) {
  const deviceList = document.querySelectorAll(".device-list");
  const deviceListArray = Array.from(deviceList);

  deviceListArray.forEach((element) => {
    const object = element;
    object.style.display = "none";
    if (
      element.innerText.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    ) {
      object.style.display = "block";
    }
  });
}

function UstensilsListSearchInput(input) {
  const ustensilsList = document.querySelectorAll(".ustensils-list");
  const ustensilsListArray = Array.from(ustensilsList);

  ustensilsListArray.forEach((element) => {
    const object = element;
    object.style.display = "none";
    if (
      element.innerText.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    ) {
      object.style.display = "block";
    }
  });
}

function ListUpdateAll(recipe) {
  const ingredientList = document.querySelectorAll(".ingredient-list");
  const deviceList = document.querySelectorAll(".device-list");
  const ustensilsList = document.querySelectorAll(".ustensils-list");

  const ingredientListArray = Array.from(ingredientList);
  const deviceListArray = Array.from(deviceList);
  const ustensilsListArray = Array.from(ustensilsList);

  ingredientListArray.forEach((element) => {
    const listText = element.innerText;
    const object = element;

    function IngredientFind() {
      if (
        recipe.ingredients.find(
          (ingre) =>
            ingre.ingredient
              .toLocaleLowerCase()
              .includes(listText.toLocaleLowerCase()) &&
            ingre.ingredient.length === listText.length
        )
      )
        return true;
      return false;
    }

    if (IngredientFind(listText)) {
      object.style.display = "block";
    }
  });

  deviceListArray.forEach((element) => {
    const listText = element.innerText;
    const object = element;

    if (
      listText
        .toLocaleLowerCase()
        .includes(recipe.appliance.toLocaleLowerCase()) &&
      recipe.appliance.length === listText.length
    ) {
      object.style.display = "block";
    }
  });

  ustensilsListArray.forEach((element) => {
    const listText = element.innerText;
    const object = element;

    function UstensilFind() {
      if (
        recipe.ustensils.find(
          (usten) =>
            usten.toLocaleLowerCase().includes(listText.toLocaleLowerCase()) &&
            usten.length === listText.length
        )
      )
        return true;
      return false;
    }
    if (UstensilFind(listText)) {
      object.style.display = "block";
    }
  });
}

function DisplayTag(type, dataOnClick) {
  const existingTag = document.getElementsByClassName(`tag-bar__${type}-tag`);

  const existingTagArray = Array.from(existingTag);

  existingTagArray.forEach((element) => {
    if (
      element.innerText.replace(/\s+/g, "") === dataOnClick.replace(/\s+/g, "")
    ) {
      const object = element;
      object.style.display = "block";
    }
  });
}
const mainSearch = document.getElementById("research");

export default function searchByTag(recipes) {
  const inputbox = [];
  const ingrebox = [];
  const appliancebox = [];
  const ustensilbox = [];
  let recipebox = [];

  function PushAllRecipeFind() {
    function IngredientFindA(recipe, input) {
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
    const input = mainSearch.value;
    // console.log(input);
    // étape de vérification du nombre de caractères
    if (input.length >= 3) {
      // étape de recherche des noms des recettes correspondantes
      inputbox.push(input);
      const resultName = recipes.filter((recipe) =>
        recipe.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      );

      // étape de recherche des ingrédients des recettes correspondantes
      const resultIngredient = recipes.filter((recipe) =>
        IngredientFindA(recipe, input)
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

      let uniqueResult = [];
      uniqueResult = [...new Set(totalResult)];

      recipebox.push(uniqueResult);
    }

    function IngredientFind(recipe, ingre) {
      if (
        recipe.ingredients.find(
          (object) =>
            object.ingredient
              .toLocaleLowerCase()
              .includes(ingre.toLocaleLowerCase()) &&
            object.ingredient.length === ingre.length
        )
      )
        return true;
      return false;
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

    function UstensilFind(recipe, usten) {
      if (
        recipe.ustensils.find(
          (object) =>
            object.toLocaleLowerCase().includes(usten.toLocaleLowerCase()) &&
            object.length === usten.length
        )
      )
        return true;
      return false;
    }
    ustensilbox.forEach((usten) => {
      const allrecipeByusten = recipes.filter((recipe) =>
        UstensilFind(recipe, usten)
      );

      recipebox.push(allrecipeByusten);
    });

    // console.log(recipebox);

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
    console.log(ingrebox);
    console.log(appliancebox);
    console.log(ustensilbox);
    console.log(recipebox);
    console.log(result);
    listResetAll();

    result.forEach((item) => {
      ListUpdateAll(item);
    });

    ResetRecipe();

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

  function SelectIngredientandRecipe() {
    const ingredientLi = document.getElementsByClassName("ingredient-list");
    const ingredientLiArray = Array.from(ingredientLi);

    ingredientLiArray.forEach((e) => {
      e.addEventListener("click", () => {
        const dataOnClick = e.innerHTML;
        ingrebox.push(dataOnClick);

        PushAllRecipeFind();
        DisplayTag("ingredient", dataOnClick);
      });
    });
  }

  function SelectApplianceandRecipe() {
    const applianceLi = document.getElementsByClassName("device-list");
    const applianceLiArray = Array.from(applianceLi);

    applianceLiArray.forEach((e) => {
      e.addEventListener("click", () => {
        const dataOnClick = e.innerHTML;
        appliancebox.push(dataOnClick);

        PushAllRecipeFind();
        DisplayTag("device", dataOnClick);
      });
    });
  }

  function SelectUstensilsandRecipe() {
    const ustensilsLi = document.getElementsByClassName("ustensils-list");
    const ustensilsLiArray = Array.from(ustensilsLi);

    ustensilsLiArray.forEach((e) => {
      e.addEventListener("click", () => {
        const dataOnClick = e.innerHTML;

        ustensilbox.push(dataOnClick);

        PushAllRecipeFind();
        DisplayTag("ustensils", dataOnClick);
      });
    });
  }

  const ingredientInput = document.getElementById("ingredient");
  const deviceInput = document.getElementById("device");
  const ustensilsInput = document.getElementById("ustensils");

  mainSearch.addEventListener("keyup", () => {
    PushAllRecipeFind();
  });

  ingredientInput.addEventListener("keyup", () => {
    const ingredientData = ingredientInput.value;
    IngredientListSearchInput(ingredientData);
  });

  deviceInput.addEventListener("keyup", () => {
    const applianceData = deviceInput.value;
    ApplianceListSearchInput(applianceData);
  });

  ustensilsInput.addEventListener("keyup", () => {
    const ustensilData = ustensilsInput.value;
    UstensilsListSearchInput(ustensilData);
  });

  SelectIngredientandRecipe();
  SelectApplianceandRecipe();
  SelectUstensilsandRecipe();

  const allTagCloseCross = document.querySelectorAll(
    ".tag-bar__ingredient-tag__cancel-tag, .tag-bar__device-tag__cancel-tag, .tag-bar__ustensils-tag__cancel-tag"
  );
  const allTagCloseCrossArray = Array.from(allTagCloseCross);

  allTagCloseCrossArray.forEach((element) => {
    element.addEventListener("click", () => {
      const object = element;
      object.parentElement.style.display = "none";
      const tagName = object.parentElement.innerText.replace(/\s+/g, "");
      console.log(tagName);

      ingrebox.forEach((item) => {
        if (item.replace(/\s+/g, "") === tagName) {
          console.log(item.replace(/\s+/g, ""));

          let i = 0;
          while (i < ingrebox.length) {
            if (ingrebox[i] === item) {
              ingrebox.splice(i, 1);
              recipebox = [];
            } else {
              i += 1;
            }
          }
        }
      });

      ustensilbox.forEach((item) => {
        if (item.replace(/\s+/g, "") === tagName) {
          console.log(item.replace(/\s+/g, ""));

          let i = 0;
          while (i < ustensilbox.length) {
            if (ustensilbox[i] === item) {
              ustensilbox.splice(i, 1);
              recipebox = [];
            } else {
              i += 1;
            }
          }
        }
      });
      appliancebox.forEach((item) => {
        if (item.replace(/\s+/g, "") === tagName) {
          console.log(item.replace(/\s+/g, ""));

          let i = 0;
          while (i < appliancebox.length) {
            if (appliancebox[i] === item) {
              appliancebox.splice(i, 1);
              recipebox = [];
            } else {
              i += 1;
            }
          }
        }
      });

      PushAllRecipeFind();
    });
  });
}
