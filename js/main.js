import { initBurgerAction } from "./menu.js";
import { initModal } from "./modal-form.js";

window.addEventListener('DOMContentLoaded', () => {
  initBurgerAction();

  window.addEventListener('load', () => {
    // не участвующие в работе первого экрана
    initModal();
  });
});
