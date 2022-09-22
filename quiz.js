const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: 'what are our school colors?',
        choice1:'red, white, and blue',
        choice2: 'pink, purple, and green',
        choice3:'blue, gray, and white',
        choice4:'black, yellow, and orange',
        answer: 3.
    },
    {
        question: 'how many fingers do we have?',
        choice1:'20',
        choice2: '30',
        choice3:'40',
        choice4:'10',
        answer: 4.
    },
    {
        question: 'what are our school colors?',
        choice1:'red, white, and blue',
        choice2: 'pink, purple, and green',
        choice3:'blue, gray, and white',
        choice4:'black, yellow, and orange',
        answer: 3.
    },
    {
        question: 'what are our school colors?',
        choice1:'red, white, and blue',
        choice2: 'pink, purple, and green',
        choice3:'blue, gray, and white',
        choice4:'black, yellow, and orange',
        answer: 3.
    },
    {
        question: 'what are our school colors?',
        choice1:'red, white, and blue',
        choice2: 'pink, purple, and green',
        choice3:'blue, gray, and white',
        choice4:'black, yellow, and orange',
        answer: 3.
    },
]

