import { TYPE_HOUSING } from "./mocks.js";
import { getRandomArrayElement, getRandomInt } from "./util.js";

export const getHotels = (hotels) => {
  const resultBlock = document.querySelector('.result-search-list');

  if (!resultBlock) {
    return
  }

  hotels.forEach(hotel => {
    resultBlock.insertAdjacentHTML('beforeend', `
      <li class="result-search-item border-bottom">
        <picture>
          <source type="image/webp" srcset="img/content/${hotel.image}.webp, img/content/${hotel.image}@2x.webp 2x">
          <img src="img/content/${hotel.image}.jpg" srcset="img/content/${hotel.image}@2x.jpg 2x" loading="lazy"
            width="135" height="90" alt="${hotel.title}">
        </picture>
        <a class="result-search-item-link link clicking" href="#">
          <h3 class="text">${hotel.title}</h3>
        </a>
        <span class="result-search-type">${getRandomArrayElement(TYPE_HOUSING)}</span>
        <span class="result-search-price">ОТ ${getRandomInt(3000, 25000)} Р.</span>
        <a class="detailed-link button-blue" href="#">Подробнее</a>
        <a class="reservation-button button-brown" href="#">Забронировать</a>
        <div class="star star--${getRandomInt(1, 5)}"></div>
        <span class="rating">Рейтинг: ${hotel.rating}</span>
      </li>
    `)
  });

  const results = document.querySelector('.results');
  const quantity = document.querySelectorAll('.result-search-item').length;
  results.textContent = quantity;
};
