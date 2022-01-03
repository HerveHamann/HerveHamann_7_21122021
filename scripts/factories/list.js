export default function listFactory(data) {
  const { appliance, ingredients, ustensils } = data;

  function createList() {
    const list = document.createElement("li");
    list.textContent = appliance;

    const deviceList = document.querySelector(".combox-device__combobox__list");
    deviceList.appendChild(list);
  }

  return { appliance, ingredients, ustensils, createList };
}
