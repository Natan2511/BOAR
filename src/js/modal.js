(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');

openMenuButton.addEventListener('click', () => {
  openMenuButton.style.display = 'none';
  closeMenuButton.style.display = 'block';
});

closeMenuButton.addEventListener('click', () => {
  closeMenuButton.style.display = 'none';
  openMenuButton.style.display = 'block';
});
