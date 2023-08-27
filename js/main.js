import { onFilter } from "./filter.js";
import { initBurgerAction } from "./menu.js";
import { initModal } from "./modal-form.js";
import { initSelect } from "./select.js";

window.addEventListener('DOMContentLoaded', () => {
  initBurgerAction();

  window.addEventListener('load', () => {
    // не участвующие в работе первого экрана
    initModal();
    onFilter();
    initSelect();
  });
});
