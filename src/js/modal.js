const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

openModalBtn.addEventListener('click', () => {
  openModalBtn.style.display = 'none';
  closeModalBtn.style.display = 'block';
  modal.classList.toggle('is-hidden');
});

closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  closeModalBtn.style.display = 'none';
  openModalBtn.style.display = 'block';
  modal.classList.toggle('is-hidden');
}
