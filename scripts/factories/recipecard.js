export default function RecipecardFactory(recipe) {
  const recipeSection = document.querySelector(".displayrecipe");

  const divRecipeCard = document.createElement("div");
  divRecipeCard.setAttribute("class", "displayrecipe__recipecard");
  recipeSection.appendChild(divRecipeCard);

  const divRecipeCardImage = document.createElement("div");
  divRecipeCardImage.setAttribute("class", "displayrecipe__recipecard__img");
  divRecipeCard.appendChild(divRecipeCardImage);

  const divRecipeCardDescription = document.createElement("div");
  divRecipeCardDescription.setAttribute(
    "class",
    "displayrecipe__recipecard__description"
  );
  divRecipeCard.appendChild(divRecipeCardDescription);

  const divRecipeCardDescriptionMain = document.createElement("div");
  divRecipeCardDescriptionMain.setAttribute(
    "class",
    "displayrecipe__recipecard__description__main"
  );
  divRecipeCardDescription.appendChild(divRecipeCardDescriptionMain);

  const divRecipeCardDescriptionMainTitle = document.createElement("div");
  divRecipeCardDescriptionMainTitle.setAttribute(
    "class",
    "displayrecipe__recipecard__description__main__title"
  );
  divRecipeCardDescriptionMainTitle.innerText = recipe.name;
  divRecipeCardDescriptionMain.appendChild(divRecipeCardDescriptionMainTitle);

  const divRecipeCardDescriptionMainTimer = document.createElement("div");
  divRecipeCardDescriptionMainTimer.setAttribute(
    "class",
    "displayrecipe__recipecard__description__main__timer"
  );
  divRecipeCardDescriptionMainTimer.innerHTML = `
  <svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z"
    fill="black"
  />
</svg>
<span>${recipe.time} min</span>
  `;
  divRecipeCardDescriptionMain.appendChild(divRecipeCardDescriptionMainTimer);

  const divRecipeCardDescriptionSecond = document.createElement("div");
  divRecipeCardDescriptionSecond.setAttribute(
    "class",
    "displayrecipe__recipecard__description__main"
  );
  divRecipeCardDescription.appendChild(divRecipeCardDescriptionSecond);

  const divRecipeCardDescriptionSecondIngredient =
    document.createElement("div");
  divRecipeCardDescriptionSecondIngredient.setAttribute(
    "class",
    "displayrecipe__recipecard__description__second__ingredient"
  );

  divRecipeCardDescriptionSecond.appendChild(
    divRecipeCardDescriptionSecondIngredient
  );

  const subIngredient = recipe.ingredients;
  subIngredient.forEach((ingredient) => {
    const RecipeIngredient = document.createElement("span");
    if (
      ingredient.unit !== undefined &&
      ingredient.quantity !== undefined &&
      ingredient.unit !== undefined
    ) {
      RecipeIngredient.innerHTML = `<span>${ingredient.ingredient}</span>: ${ingredient.quantity} ${ingredient.unit} </br>`;
    }
    if (ingredient.unit === undefined) {
      RecipeIngredient.innerHTML = `<span>${ingredient.ingredient}:</span> ${ingredient.quantity} </br>`;
    }
    if (ingredient.quantity === undefined && ingredient.unit === undefined)
      RecipeIngredient.innerHTML = `<span>${ingredient.ingredient}</span> </br>`;

    divRecipeCardDescriptionSecondIngredient.appendChild(RecipeIngredient);
  });
  const divRecipeCardDescriptionSecondCooking = document.createElement("div");
  divRecipeCardDescriptionSecondCooking.setAttribute(
    "class",
    "displayrecipe__recipecard__description__second__cooking"
  );
  divRecipeCardDescriptionSecondCooking.innerText = recipe.description;
  divRecipeCardDescriptionSecond.appendChild(
    divRecipeCardDescriptionSecondCooking
  );
}
