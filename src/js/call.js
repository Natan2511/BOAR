const modalOpenButtons = document.querySelectorAll('.call--modal__open');
const modal = document.querySelector('.call--modal');

modalOpenButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

function closeModal() {
  modal.style.display = 'none';
}

document.addEventListener('mousedown', event => {
  if (!modal.contains(event.target)) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

modal.addEventListener('touchstart', event => {
  if (event.target === modal) {
    closeModal();
  }
});

// Закрытие модального окна при клике за его границами
window.addEventListener('click', event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
