const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// CHANGE AMOUNT OF MAX HIGH SCORE TO ALLOW MORE USERS TO GET ADDED 

const MAX_HIGH_SCORE = 500;

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
    
})

saveHighScore = e => {
    e.preventDefault()
    
    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })

    // CHANGE THIS NUMBER IF ALLOWING MORE USERS TO LOG SCORES


    highScores.splice(500)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}
