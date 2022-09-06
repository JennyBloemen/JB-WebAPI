function printHighScores() {
    // || allows the score to come from local storage or an empty array
    var highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    highScores.sort(function (a, b) {
        return b.score -a.score;
    });
    // sorts the high scores
    for (var i=0; i <highScores.length; i+=1) {
        // creates a li for each entry
        var liTag = document.createElement('li');
        liTag.textContent = highScores[i].initials + " : " + highScores[i].score;
        // adds highscore to the page
        var olEl = docuemnt.getElementById('highscores');
        olEl.appendChild(liTag);
    }
}
// clears high scores
function clearHighScores () {
    window.localStorage.removeItem('highscores');
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighScores;
// runs funtion when page loads
printHighScores();