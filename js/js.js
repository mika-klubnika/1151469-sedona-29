const button = document.querySelector('.hotel-search-button');
const popup = document.querySelector('.modal');
const formSearch = document.querySelector('.form-search');
const arrivalInput = document.querySelector('.arrival-input');
const departureInput = document.querySelector('.departure-input');

button.onclick = function() {
  popup.classList.toggle('modal-not-show');
  dateInput.focus();
  popup.classList.remove("modal-error");
}

formSearch.addEventListener("submit", function (evt) {
  if (!arrivalInput.value || !departureInput.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
          popup.classList.add("modal-not-show");
          popup.classList.remove("modal-error");
      }
  }
});
