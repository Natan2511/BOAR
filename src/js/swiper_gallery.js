var swiperGallery = new Swiper('.swiperGallery', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // Конфигурация для разных ширин экрана
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    319: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

$(document).ready(function () {
  // Инициализация Lightbox
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
});
