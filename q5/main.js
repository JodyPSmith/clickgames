// When the user comes to the page, he has 1 second to click the screen. If he waits more than 1 second, a message is displayed telling him that he's lost. 

// When the user comes to the page, there is a random amount of time, between 1 and 3 seconds,  before the round starts. Once the round has started, a message 
// is displayed telling him so. He has 0.5 seconds to click on the screen OR press the spacebar. If he presses within the allotted time, there is a message telling 
// him he has succeeded. Otherwise, there is a message telling him he has failed.

// Same as the previous question, except that now a button appears at a random position on the screen when the round starts. The user must click the button in 1.5 seconds.
// If he clicks anywhere else, he automatically loses.

// In question 2, the game started as soon as the page loaded. Change this behaviour. 
// Add a button. The game starts only when the button is pressed.

// add restart button as well.

var winner = false;
var loser = false;
var body = document.getElementById('theBody');
var gameArea = document.getElementById('gameArea');
var xPos = window.innerWidth;
var yPos = window.innerHeight;
var startButton = document.createElement('button');
var button1 = document.createElement('button');
var restartButton = document.createElement('button');

function youWin() {
    if (!loser) {
        gameArea.innerHTML = "Winner Winner";
        winner = true
        restartButton.innerHTML = "Continue to show off";
        restartButton.addEventListener('click', restart);
        body.appendChild(restartButton);
        
    }
}

function youLose() {
    if (!winner) {
        gameArea.innerHTML = "you snooze you lose, restart?";
        restartButton.innerHTML = "regain your honor";
        restartButton.addEventListener('click', restart);
        body.appendChild(restartButton);
    }
}

function playGame() {
    
    setTimeout(youLose, 1500);
    button1.style.position = "absolute";
    button1.style.left = Math.random() * xPos + "px";
    button1.style.top = Math.random() * yPos + "px";
    button1.innerHTML = "Click me or DIE!!";
    button1.addEventListener('click', youWin);
    body.appendChild(button1);
}

function start() {
    body.removeChild(startButton);
    gameArea.innerHTML = "Click the button once it appears";
    setTimeout(playGame, Math.random() * (3000 - 1000) + 1000)
}

function restart() {
    gameArea.innerHTML = "Click the button once it appears";
    winner = false;
    body.removeChild(button1);
    body.removeChild(restartButton);
    setTimeout(playGame, Math.random() * (3000 - 1000) + 1000)
    
}

startButton.style.position = "absolute";
startButton.style.left = xPos / 2 + "px";
startButton.style.top = yPos / 2 + "px";
startButton.innerHTML = "START";
startButton.addEventListener('click', start);
body.appendChild(startButton);

restartButton.style.position = "absolute";
restartButton.style.left = xPos / 2 + "px";
restartButton.style.top = yPos / 2 + "px";
restartButton.innerHTML = "Restart";
restartButton.addEventListener('click', restart);
