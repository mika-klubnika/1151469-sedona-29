const btnFilter = document.querySelector('.hotel-filter-btn-mobile');
const filter = document.querySelector('.filter');
const breakpointLg = window.matchMedia('(min-width:768px)');

const openFilter = () => {
  btnFilter.ariaPressed = 'true';
  btnFilter.innerHTML = "";
  btnFilter.insertAdjacentHTML('beforeend', `<span>Закрыть фильтр</span>`);
  filter.style.maxHeight = `${filter.scrollHeight}px`;
};

const closeFilter = () => {
  btnFilter.ariaPressed = 'false';
  btnFilter.innerHTML = "";
  btnFilter.insertAdjacentHTML('beforeend', `<span>Открыть фильтр</span>`);
  filter.style.maxHeight = '0';
};

const openFilterResize = () => {
  openFilter();
};

export const onFilter = () => {
  if (btnFilter) {
    breakpointLg.addListener(openFilterResize);
    btnFilter.addEventListener('click', () => {
      if (btnFilter.ariaPressed === 'true') {
        closeFilter();
      } else {
        openFilter();
      }
    });
  }
};
