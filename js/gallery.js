import { initLike } from "./like.js";

export const getGallery = (photos) => {
  const galleryList = document.querySelector('.gallery-list');

  if (!galleryList) {
    return
  }

  photos.forEach(photo => {
    galleryList.insertAdjacentHTML('beforeend', `
      <li class="gallery-item">
        <a class="gallery-link" href="img/media/${photo.image}.jpg" data-lightbox="gallery" data-title="Автор фото: ${photo.author}">
          <picture> <source type="image/webp" media="(max-width: 767px)" srcset="img/media/${photo.image}-mobile.webp, img/media/${photo.image}-mobile@2x.webp 2x">
            <source type="image/webp" media="(max-width: 1199px)" srcset="img/media/${photo.image}-tablet.webp, img/media/${photo.image}-tablet@2x.webp 2x">
            <source type="image/webp" srcset="img/media/${photo.image}-desktop.webp, img/media/${photo.image}-desktop@2x.webp 2x">

            <source media="(max-width: 767px)" srcset="img/media/${photo.image}-mobile.jpg, img/media/${photo.image}-mobile@2x.jpg 2x">
            <source media="(max-width: 1199px)" srcset="img/media/${photo.image}-tablet.jpg, img/media/${photo.image}-tablet@2x.jpg 2x">
            <img src="img/media/${photo.image}-desktop.jpg" srcset="img/media/${photo.image}-desktop@2x.jpg 2x" width="1200" height="400" alt="">
          </picture>
        </a>
        <div class="gallery-details">
          <p class="gallery-author text">Автор фото: ${photo.author}</p>
          <button class="gallery-btn-like">
            <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="20px" viewBox="0 0 23 20">
              <path class="like" d="M 18.082031 7.769531 C 17.703125 7.769531 16.386719 7.769531 14.46875 7.769531 C 12.925781 7.769531 12.628906 7.511719 12.628906 7.09375 C 12.628906 6.621094 13.398438 5.789062 13.578125 5.492188 C 13.757812 5.195312 14.882812 4.1875 15.121094 2.703125 C 15.359375 1.21875 13.578125 0.152344 12.984375 1.160156 C 12.632812 1.761719 11.738281 3.535156 10.671875 4.304688 C 8.6875 5.738281 7.050781 8.851562 4.984375 8.851562 L 4.984375 16.636719 C 6.6875 16.636719 10.539062 18.527344 11.90625 18.800781 C 13.453125 19.109375 15.472656 19.792969 16.542969 18.335938 C 17.207031 17.441406 18.242188 13.953125 19.019531 11.480469 C 20.992188 9.585938 19.628906 7.769531 18.082031 7.769531 Z M 18.082031 7.769531 "/>
              <path d="M 0 10.367188 L 0 17.132812 C 0 17.96875 0.675781 18.648438 1.515625 18.648438 L 2.375 18.648438 C 2.929688 18.648438 3.382812 18.195312 3.382812 17.636719 L 3.382812 8.851562 L 1.515625 8.851562 C 0.675781 8.851562 0 9.53125 0 10.367188 Z M 0 10.367188 "/>
            </svg>
            <span class="gallery-like-counter">${photo.like}</span>
          </button>
        </div>
      </li>
    `)
  });

  initLike();
}
