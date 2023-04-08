const modalOpenButtons = document.querySelectorAll('[call--modal__open]');
const modal = document.querySelector('.call--modal');
// const modalCloseButton = document.querySelector('.call--modal__close');

modalOpenButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// modalCloseButton.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// Закрытие модального окна при клике за его границами
window.addEventListener('click', event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Закрытие модального окна при нажатии на клавишу Esc
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});
