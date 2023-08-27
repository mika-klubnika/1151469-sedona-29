export const initSelect = () => {
  const select = document.querySelector('.sort-select');

  if (!select) {
    return
  }

  const selectBtn = document.querySelector('.sort-select-btn');
  const optionsItem = document.querySelectorAll('.sort-option');
  const selected = document.querySelector('#selected');

  const selectedElem = (evt) => {
    const target = evt.target;
    const activeElem = document.querySelector('.sort-filter-link.is-active');

    if (activeElem && activeElem !== target) {
      activeElem.classList.remove('is-active');
    }

    target.classList.add('is-active');
    const text = target.innerText;
    selected.textContent = text;
    select.classList.remove('is-open');
  };

  selectBtn.addEventListener('click', () => {
    select.classList.toggle('is-open');
  });

  optionsItem.forEach(element => {
    element.addEventListener('click', selectedElem);
  });
};
