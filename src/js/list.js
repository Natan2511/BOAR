const questions = document.querySelectorAll('.questions--content');

questions.forEach(question => {
  const span = question.querySelector('span');

  question.addEventListener('click', e => {
    if (span.classList.contains('hidden')) {
      span.classList.remove('hidden');
    } else {
      span.classList.add('hidden');
    }
  });
});
