//!                            scroll to top
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
  document.documentElement.scrollIntoView({ behavior: 'smooth' });
};

//!                            scroll to up

const scrollToUp = document.getElementById('scroll-to-up');

//!                            animation bike
function handleScroll() {
  let bike = document.getElementById('bike');
  let rect = bike.getBoundingClientRect();
  let viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  if (rect.top + rect.height / 2 < viewHeight) {
    bike.parentElement.parentElement.classList.add('appear');
    document.removeEventListener('scroll', handleScroll);
  }
}

document.addEventListener('scroll', handleScroll);

//!                            animation price
function animateOnScroll() {
  let pricesListItems = document.querySelectorAll('.prices-list__item');
  let windowHeight = window.innerHeight;

  for (let i = 0; i < pricesListItems.length; i++) {
    let elementTop = pricesListItems[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      pricesListItems[i].style.opacity = 1;
      pricesListItems[i].style.transform = 'translateY(0)';
    }
  }
}

window.addEventListener('scroll', animateOnScroll);
