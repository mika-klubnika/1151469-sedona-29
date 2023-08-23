const header = document.querySelector('[data-header]');
const burger = document.querySelector('[data-burger]');
const breakpointLg = window.matchMedia('(min-width:768px)');

const openMenu = () => {
  burger.ariaPressed = 'true';
  header.classList.add('is-open');
  document.body.classList.add('scroll-lock');
};

const closeMenu = () => {
  burger.ariaPressed = 'false';
  header.classList.remove('is-open');
  document.body.classList.remove('scroll-lock');
};

const closeMenuOnResize = () => {
  closeMenu();
};

export const initBurgerAction = () => {
  if (burger) {
    breakpointLg.addListener(closeMenuOnResize);
    burger.addEventListener('click', () => {
      if (burger.ariaPressed === 'true') {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
};
