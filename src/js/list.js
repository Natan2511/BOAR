// Получаем список элементов с классом "questions--content"
const questions = document.querySelectorAll('.questions--content');

// Для каждого элемента добавляем обработчик события "click"
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
