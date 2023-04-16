const introSlides = document.querySelectorAll('.intro-slide');

function isInView(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleIntroSlides() {
  const scrollTop = window.pageYOffset;
  introSlides.forEach(slide => {
    if (isInView(slide) || scrollTop < 300) {
      // здесь 100 - это количество пикселей, после которых контент скрывается
      slide.classList.add('in-view');
      slide.classList.remove('out-of-view');
    } else {
      slide.classList.remove('in-view');
      slide.classList.add('out-of-view');
    }
  });
}

window.addEventListener('scroll', handleIntroSlides);

// Добавляем класс "visible" ко всем слайдам
introSlides.forEach(slide => {
  slide.classList.add('visible');
});
