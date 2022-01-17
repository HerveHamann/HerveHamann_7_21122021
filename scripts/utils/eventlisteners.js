import {
  ListUpdateBySearchInput,
  DisplayTag,
  EraseTagData,
} from "./displayUpdate.js";
import { ingrebox, appliancebox, ustensilbox } from "./subSearch.js";

export default function addEventListener(PushAllRecipeFind) {
  function ClickOnListElement(type, box) {
    const Li = document.getElementsByClassName(`${type}-list`);
    const LiArray = Array.from(Li);

    LiArray.forEach((e) => {
      e.addEventListener("click", () => {
        const dataOnClick = e.innerHTML;
        box.push(dataOnClick);

        PushAllRecipeFind();
        DisplayTag(`${type}`, dataOnClick);
      });
    });
  }

  ClickOnListElement("ingredient", ingrebox);
  ClickOnListElement("device", appliancebox);
  ClickOnListElement("ustensils", ustensilbox);

  const mainSearch = document.getElementById("research");

  mainSearch.addEventListener("keyup", () => {
    PushAllRecipeFind();
  });

  function ListUpdateBySearchInputListeners(type) {
    const Input = document.getElementById(`${type}`);

    Input.addEventListener("keyup", () => {
      const Data = Input.value;
      ListUpdateBySearchInput(Data, "ingredient");
    });
  }
  ListUpdateBySearchInputListeners("ingredient");
  ListUpdateBySearchInputListeners("device");
  ListUpdateBySearchInputListeners("ustensils");

  const allTagCloseCross = document.querySelectorAll(
    ".tag-bar__ingredient-tag__cancel-tag, .tag-bar__device-tag__cancel-tag, .tag-bar__ustensils-tag__cancel-tag"
  );
  const allTagCloseCrossArray = Array.from(allTagCloseCross);

  allTagCloseCrossArray.forEach((element) => {
    element.addEventListener("click", () => {
      EraseTagData(element, ingrebox);
      EraseTagData(element, ustensilbox);
      EraseTagData(element, appliancebox);

      PushAllRecipeFind();
    });
  });
}
