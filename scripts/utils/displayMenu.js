export default function Display() {
  const show = (type) => {
    const box = document.querySelector(`.combox-${type}`);
    const comboBox = document.querySelector(`.combox-${type}__combobox`);
    const searchBar = document.getElementById(`${type}`);
    const searchBarLabel = document.querySelector(
      `.combox-${type}__combobox__combobox-searchfield__label`
    );
    const arrow = document.querySelector(
      `.combox-${type}__combobox__combobox-searchfield__arrowdown`
    );
    const list = document.querySelector(`.combox-${type}__combobox__list`);

    box.style.width = "667px";
    box.style.height = "397px";
    box.style.alignItems = "start";
    comboBox.style.marginTop = "23px";
    searchBar.style.display = "block";
    list.style.display = "flex";
    searchBarLabel.style.display = "none";
    arrow.style.transform = "rotate(180deg)";
  };

  const hide = (type) => {
    const box = document.querySelector(`.combox-${type}`);
    const comboBox = document.querySelector(`.combox-${type}__combobox`);
    const searchBar = document.getElementById(`${type}`);
    const searchBarLabel = document.querySelector(
      `.combox-${type}__combobox__combobox-searchfield__label`
    );
    const arrow = document.querySelector(
      `.combox-${type}__combobox__combobox-searchfield__arrowdown`
    );
    const list = document.querySelector(`.combox-${type}__combobox__list`);

    box.style.width = "170px";
    box.style.height = "69px";
    box.style.alignItems = "center";
    comboBox.style.marginTop = "0px";
    searchBar.style.display = "none";
    list.style.display = "none";
    searchBarLabel.style.display = "block";
    arrow.style.transform = "rotate(360deg)";
  };

  const box = [
    document.querySelector(".combox-ingredient"),
    document.querySelector(".combox-device"),
    document.querySelector(".combox-ustensils"),
  ];

  box.forEach((boxes) => {
    boxes.addEventListener("click", (e) => {
      e.stopPropagation();
      if (boxes.className === "combox-ingredient") {
        show("ingredient");
      }
      if (boxes.className === "combox-device") {
        show("device");
      }
      if (boxes.className === "combox-ustensils") {
        show("ustensils");
      }
      const handleClosure = (event) => {
        if (!boxes.contains(event.target)) {
          hide("ingredient");
          hide("device");
          hide("ustensils");
        }
      };
      window.addEventListener("click", (event) => {
        handleClosure(event);
      });
    });
  });
}
