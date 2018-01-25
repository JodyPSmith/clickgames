var winner = false;
var body = document.getElementById('theBody');
var playArea = document.getElementById('gameArea');

body.addEventListener('click', isWinner);

function isWinner() {
    playArea.innerHTML = 'Winner Winner Chicken dinner!';
    winner = true;
}

function isLoser() {
    if (!winner) {
        playArea.innerHTML = 'Loser!!';
    }
}

setTimeout(isLoser, 1000);