// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // slidesPerView: 3, // 3 слайда за 1 раз (UPD.: мы сделаем сначала для отображения в адаптиве, а потом через брейкпоинт на декстопе
  slidesPerView: 2,
  spaceBetween: 16, // расстояние между слайдами в адаптиве
  loop: true, // зацикленность

  breakpoints: {
    780: {
      slidesPerView: 3,
      spaceBetween: 24,
    }, // первая точка перелома
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true, // чтоб по пагинации можно было бы кликать
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
