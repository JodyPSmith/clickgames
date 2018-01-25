// When the user comes to the page, he has 1 second to click the screen. If he waits more than 1 second, a message is displayed telling him that he's lost. 

// When the user comes to the page, there is a random amount of time, between 1 and 3 seconds,  before the round starts. Once the round has started, a message 
// is displayed telling him so. He has 0.5 seconds to click on the screen OR press the spacebar. If he presses within the allotted time, there is a message telling 
// him he has succeeded. Otherwise, there is a message telling him he has failed.

// Same as the previous question, except that now a button appears at a random position on the screen when the round starts. The user must click the button in 1.5 seconds.
// If he clicks anywhere else, he automatically loses.

// In question 2, the game started as soon as the page loaded. Change this behaviour. 
// Add a button. The game starts only when the button is pressed.

var winner = false;
var loser = false;
var body = document.getElementById('theBody');
var gameArea = document.getElementById('gameArea');
var xPos = window.innerWidth;
var yPos = window.innerHeight;
var button1 = document.createElement('button');
var startButton = document.createElement('button');

function youLose () {
    if (!winner) {
        gameArea.innerHTML = "You slow old fart"
    }
}

function youWin() {
    if (!loser) {
        gameArea.innerHTML = "Winner Winner"
        winner = true;
    }
}

function playgame() {   
    body.addEventListener('click', youLose);
    setTimeout(youLose, 1500)
    button1.style.position = "absolute";
    button1.style.left = Math.random() * xPos + "px";
    button1.style.top = Math.random() * yPos +"px";
    button1.innerHTML = "You'll NEVER take me ALIVE!!"
    button1.addEventListener('click', youWin)
    body.appendChild(button1);
    console.log("got this far");
}

function start () {
    body.removeChild(startButton);
    setTimeout(playgame, Math.random() * ( 3000 - 1000) + 1000)
    gameArea.innerHTML = "Click the button when you see it"
}

startButton.style.position = "absolute";
startButton.style.left = xPos / 2 + "px";
startButton.style.top = yPos / 2 + "px"; //not exactly in the middle but close enough
startButton.innerHTML = "START";
startButton.addEventListener('click', start);

body.appendChild(startButton);