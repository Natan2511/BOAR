var swiperGallery = new Swiper('.swiperGallery', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(document).ready(function () {
  // Инициализация Lightbox
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
});
