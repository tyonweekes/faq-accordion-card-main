const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    console.log(question);
    const btn = question.querySelector('.down-arrow');
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
});

// let questionOne = document.querySelector('.question-1');
// let queryOne = document.querySelector('.query-1');
// let answerOne = document.querySelector('.answer-1');

// questionOne.addEventListener('click', function() {
//             if (answerOne.style.display === 'none') {
//                 answerOne.style.display = 'block';
//                 queryOne.style.color = 'hsl(237, 12%, 33%)';
//                 queryOne.style.fontWeight = '700';
//             } else {
//                 answerOne.style.display = 'none';
//                 queryOne.style.color = 'hsl(240, 6%, 50%)';
//                 queryOne.style.fontWeight = '400';
//             }
//         }
// );

// let questionTwo = document.querySelector('.question-2');
// let queryTwo = document.querySelector('.query-2');
// let answerTwo = document.querySelector('.answer-2');

// questionTwo.addEventListener('click', function() {
//             if (answerTwo.style.display === 'none') {
//                 answerTwo.style.display = 'block';
//                 queryTwo.style.color = 'hsl(237, 12%, 33%)';
//                 queryTwo.style.fontWeight = '700';
//             } else {
//                 answerTwo.style.display = 'none';
//                 queryTwo.style.color = 'hsl(240, 6%, 50%)';
//                 queryTwo.style.fontWeight = '400';
//             }
//         }
// );

// let questionThree = document.querySelector('.question-3');
// let queryThree = document.querySelector('.query-3');
// let answerThree = document.querySelector('.answer-3');

// questionThree.addEventListener('click', function() {
//             if (answerThree.style.display === 'none') {
//                 answerThree.style.display = 'block';
//                 queryThree.style.color = 'hsl(237, 12%, 33%)';
//                 queryThree.style.fontWeight = '700';
//             } else {
//                 answerThree.style.display = 'none';
//                 queryThree.style.color = 'hsl(240, 6%, 50%)';
//                 queryThree.style.fontWeight = '400';
//             }
//         }
// );

// let questionFour = document.querySelector('.question-4');
// let queryFour = document.querySelector('.query-4');
// let answerFour = document.querySelector('.answer-4');

// questionFour.addEventListener('click', function() {
//             if (answerFour.style.display === 'none') {
//                 answerFour.style.display = 'block';
//                 queryFour.style.color = 'hsl(237, 12%, 33%)';
//                 queryFour.style.fontWeight = '700';
//             } else {
//                 answerFour.style.display = 'none';
//                 queryFour.style.color = 'hsl(240, 6%, 50%)';
//                 queryFour.style.fontWeight = '400';
//             }
//         }
// );

// let questionFive = document.querySelector('.question-5');
// let queryFive = document.querySelector('.query-5');
// let answerFive = document.querySelector('.answer-5');

// questionFive.addEventListener('click', function() {
//             if (answerFive.style.display === 'none') {
//                 answerFive.style.display = 'block';
//                 queryFive.style.color = 'hsl(237, 12%, 33%)';
//                 queryFive.style.fontWeight = '700';
//             } else {
//                 answerFive.style.display = 'none';
//                 queryFive.style.color = 'hsl(240, 6%, 50%)';
//                 queryFive.style.fontWeight = '400';
//             }
//         }
// );