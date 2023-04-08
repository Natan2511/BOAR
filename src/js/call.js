const modalOpenButtons = document.querySelectorAll('[data-modal-open--one]');
const modal = document.querySelector('.modal--one');
const modalCloseButton = document.querySelector('.modal__close--one');

modalOpenButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

modalCloseButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
