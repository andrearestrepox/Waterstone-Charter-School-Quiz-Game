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
        answer: 3
    },
    {
        question: 'how many fingers do we have?',
        choice1:'20',
        choice2: '30',
        choice3:'40',
        choice4:'10',
        answer: 4
    },
    {
        question: 'what city do we live in?',
        choice1:'Los Angeles',
        choice2: 'Miami',
        choice3:'Weston',
        choice4:'Doral',
        answer: 2
    },
    {
        question: 'Which one of these is an odd number?',
        choice1:'2',
        choice2: '1',
        choice3:'6',
        choice4:'8',
        answer: 2
    },
    {
        question: 'what is your teachers name?',
        choice1:'Ms.Lage',
        choice2: 'Mrs.Puff',
        choice3:'Mrs.Doubtfire',
        choice4:'Mrs.Fields',
        answer: 1
    },
]



// CHANGE MAX AMOUNT OF QUESTIONS IF MORE QUESTIONS ARE BEING ADDED

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;




startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}

// questionsCounter?
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];


        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
         'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000);
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame();

