import Display from "./utils/displayMenu.js";

import recipes from "../data/recipes.js";
import listFactory from "./factories/list.js";

Display();

// création du total des éléments
const totalApplience = [];
const totalIngredients = [];
const totalUstensils = [];
recipes.recipes.forEach((recipe) => {
  totalApplience.push(recipe.appliance);
  const subIngredient = recipe.ingredients;
  subIngredient.forEach((ingredient) => {
    totalIngredients.push(ingredient.ingredient);
  });
  const SubUstensils = recipe.ustensils;
  SubUstensils.forEach((ustensil) => {
    totalUstensils.push(ustensil);
  });
});
// réduction que chaque élément soit unique
const uniqueApplience = [...new Set(totalApplience)];
const uniqueIngredients = [...new Set(totalIngredients)];
const uniqueUstensils = [...new Set(totalUstensils)];

// création des éléments dans la liste
uniqueIngredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  const ingredientList = document.querySelector(
    ".combox-ingredient__combobox__list"
  );
  ingredientList.appendChild(list);

  const tagBar = document.querySelector(".tag-bar");
  const span = document.createElement("span");
  span.innerHTML = `     <span class="tag-bar__Ingredient-tag"
    >${ingredient}
    <button class="tag-bar__Ingredient-tag__cancel-tag">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
          fill="white"
        />
      </svg>
    </button>
  </span>
      `;

  tagBar.appendChild(span);
});

// création des éléments dans la liste
uniqueApplience.forEach((applience) => {
  const list = document.createElement("li");
  list.textContent = applience;
  const deviceList = document.querySelector(".combox-device__combobox__list");
  deviceList.appendChild(list);

  const tagBar = document.querySelector(".tag-bar");
  const span = document.createElement("span");
  span.innerHTML = ` <span class="tag-bar__Device-tag"
  >${applience}
  <button class="tag-bar__Device-tag__cancel-tag">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
        fill="white"
      />
    </svg>
  </button>
</span>
  `;
  tagBar.appendChild(span);
});

// création des éléments dans la liste
uniqueUstensils.forEach((ustensil) => {
  const list = document.createElement("li");
  list.textContent = ustensil;
  const ustensilsList = document.querySelector(
    ".combox-ustensils__combobox__list"
  );
  ustensilsList.appendChild(list);

  const tagBar = document.querySelector(".tag-bar");
  const span = document.createElement("span");
  span.innerHTML = `
    <span class="tag-bar__Ustensils-tag"
          >${ustensil}
          <button class="tag-bar__Ustensils-tag__cancel-tag">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                fill="white"
              />
            </svg>
          </button>
        </span>
    `;
  tagBar.appendChild(span);
});
