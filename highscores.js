const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score"><h3>${score.name} -${score.score}</h3></li> `
}).join('')