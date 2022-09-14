//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-container');
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text');
                item.classList.remove('active-question');
            }
        });

        question.classList.toggle('show-text');
        question.classList.toggle('active-question');
    })
});