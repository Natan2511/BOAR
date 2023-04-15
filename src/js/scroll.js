window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById('scroll-to-top').style.display = 'block';
  } else {
    document.getElementById('scroll-to-top').style.display = 'none';
  }
}

document.getElementById('scroll-to-top').onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function handleScroll() {
  var bike = document.getElementById('bike');
  var rect = bike.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  if (rect.top + rect.height / 2 < viewHeight) {
    bike.parentElement.parentElement.classList.add('appear');
    document.removeEventListener('scroll', handleScroll);
  }
}

document.addEventListener('scroll', handleScroll);

function animateOnScroll() {
  var pricesListItems = document.querySelectorAll('.prices-list__item');
  var windowHeight = window.innerHeight;

  for (var i = 0; i < pricesListItems.length; i++) {
    var elementTop = pricesListItems[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      pricesListItems[i].style.opacity = 1;
      pricesListItems[i].style.transform = 'translateY(0)';
    }
  }
}

window.addEventListener('scroll', animateOnScroll);
