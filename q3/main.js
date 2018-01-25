// When the user comes to the page, he has 1 second to click the screen. If he waits more than 1 second, a message is displayed telling him that he's lost. 

// When the user comes to the page, there is a random amount of time, between 1 and 3 seconds,  before the round starts. Once the round has started, a message 
// is displayed telling him so. He has 0.5 seconds to click on the screen OR press the spacebar. If he presses within the allotted time, there is a message telling 
// him he has succeeded. Otherwise, there is a message telling him he has failed.

// Same as the previous question, except that now a button appears at a random position on the screen when the round starts. The user must click the button in 1.5 seconds.
// If he clicks anywhere else, he automatically loses.

var winner = false;
var loser = false; // why do I need a winner/loser if I can use the boolean? - because I need a way to lock the button out
var body = document.getElementById('theBody');
var gameArea = document.getElementById('gameArea');
var xPos = Math.random() * window.innerWidth;
var yPos = Math.random() * window.innerHeight;
console.log(xPos, yPos);
var button1 = document.createElement('button');

function youWon() {
    if (!loser) {
        button1.innerHTML = "Winner Winner Chicken Dinner";
        winner = true;
    }
}

function youLost() {
    if (!winner) {
        gameArea.innerHTML = "You suck";
        loser = true;
    }
}

function goTime() {
    gameArea.innerHTML = "Go Go Go!!, Click the button";
    button1.addEventListener('click', youWon);
    button1.style.position = "absolute";
    button1.style.left = xPos +"px";
    button1.style.top = yPos + "px";
    //console.log(xPos, yPos);
    button1.innerHTML = "Click me!";
    body.appendChild(button1);

    body.addEventListener('click', youLost);
    setTimeout(youLost, 1500);
}


setTimeout(goTime, Math.random() * (3000 - 1000) + 1000);