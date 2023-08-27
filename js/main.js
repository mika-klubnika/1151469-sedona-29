import { getData } from "./api.js";
import { onFilter } from "./filter.js";
import { getHotels } from "./hotels.js";
import { initBurgerAction } from "./menu.js";
import { initModal } from "./modal-form.js";
import { initSelect } from "./select.js";

window.addEventListener('DOMContentLoaded', () => {
  initBurgerAction();

  getData((data) => {
    getHotels(data)
  },
  );

  window.addEventListener('load', () => {
    // не участвующие в работе первого экрана
    initModal();
    onFilter();
    initSelect();
  });
});
