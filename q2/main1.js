var won = false;
var lost = false;
var mainDiv = document.getElementById('gameArea');
var body = document.getElementById('theBody');

function potentialLoss() {
    if (won) return;
    lost = true;
    mainDiv.innerText = "YOU LOST!";
}

function potentialWin() {
    if (lost) return;
    won = true;
    mainDiv.innerText = "YOU WON!";
}

function startRound() {
    mainDiv.innerText = "ROUND STARTED!";

    body.addEventListener('click', () => {
        potentialWin();
    })
    body.addEventListener('keydown', event => {
        if (event.key == " ") {
            potentialWin();
        }
    })
    setTimeout(potentialLoss, 500)
}

setTimeout(startRound, Math.random() * 2000 + 1000);