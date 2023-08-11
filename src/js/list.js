const questions = document.querySelectorAll('.questions--content');

questions.forEach(question => {
  const b = question.querySelector('b');
  const span = question.querySelector('span');

  b.addEventListener('click', () => {
    if (span.classList.contains('hidden')) {
      span.classList.remove('hidden');
    } else {
      span.classList.add('hidden');
    }
  });
});
