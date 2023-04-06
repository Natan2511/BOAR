const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.btn--header');
const modalCloseBtn = document.querySelector('.modal__close-btn');

function openModal() {
  modal.classList.add('modal--open');
}

function closeModal() {
  modal.classList.remove('modal--open');
}

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
