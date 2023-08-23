export const initModal = () => {
  const wrapModal = document.querySelector('[data-wrap-modal]');

  if (!wrapModal) {
    return;
  }

  const buttonModal = document.querySelector('[data-btn-modal]');
  const formModal = document.querySelector('[data-modal]');
  const arrivalInput = document.querySelector('.arrival-input');
  const departureInput = document.querySelector('.departure-input');

  const toggleModal = () => {
    wrapModal.classList.toggle('is-open');
    formModal.classList.remove('modal-error');
  }

  const formValid = (evt) => {
    if (!arrivalInput.value || !departureInput.value) {
      evt.preventDefault();
      formModal.classList.remove('modal-error');
      formModal.offsetWidth;
      formModal.classList.add('modal-error');
    }
  }

  const closeModal = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupWrap.classList.contains('is-open')) {
        wrapModal.classList.remove('is-open');
        formModal.classList.remove('modal-error');
      }
    }
  }

  buttonModal.addEventListener('click', toggleModal);
  formModal.addEventListener('submit', formValid);
  window.addEventListener('keydown', closeModal);
}
