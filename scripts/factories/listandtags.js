// Fonction de création des tags
const CreateTag = (type, category) => {
  const tagBar = document.querySelector(".tag-bar");
  const span = document.createElement("span");
  span.setAttribute("class", `tag-bar__${category}-tag`);
  span.innerHTML = `
${type}
        <button class="tag-bar__${category}-tag__cancel-tag">
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
         `;
  tagBar.appendChild(span);
};

// Fonction de création des listes
const CreateList = (type, category) => {
  const list = document.createElement("li");
  list.textContent = type;
  list.setAttribute("class", `${category}-list`);
  const listContainer = document.querySelector(
    `.combox-${category}__combobox__list`
  );
  listContainer.appendChild(list);
};

export default function TagsandListFactory(recipes) {
  // création du total des éléments
  const totalApplience = [];
  const totalIngredients = [];
  const totalUstensils = [];

  recipes.forEach((recipe) => {
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

  // création des tags
  uniqueIngredients.forEach((ingredient) => {
    CreateTag(ingredient, "ingredient");
    CreateList(ingredient, "ingredient");
  });

  // création des tags
  uniqueApplience.forEach((applience) => {
    CreateTag(applience, "device");
    CreateList(applience, "device");
  });

  // création des tags
  uniqueUstensils.forEach((ustensil) => {
    CreateTag(ustensil, "ustensils");
    CreateList(ustensil, "ustensils");
  });
}
