// OK this one I did copy paste cause I have redone it 5 times now and am comfortable. Also, I inadvertantly made this into question 7 by adding the variable number of buttons and addressing the
// as a just for fun... then read question 7 and realised it was the same thing.

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

var maxButtons = 10;
var onScreenButtons = maxButtons;

var startButton = document.createElement('button');
var restartButton = document.createElement('button');


// rather happy with myself with my first 100% user generated class. called click or Die...
class clickOrDie {
    constructor(id) {
        var idTag = 'button' + id;
        //in retrospect, this would have made more sense as an id
        var button = document.createElement(idTag);

        button.style.position = "absolute";
        button.style.left = Math.random() * xPos + "px";
        button.style.top = Math.random() * yPos + "px";
        button.innerText = "Click me or DIE!!";
        button.className = "buttons"
        button.addEventListener('click', (e) => {
            onScreenButtons -= 1;
            console.log(onScreenButtons);
            e.stopPropagation(); // e is passing the stop propagation function the click to not propogate.
            body.removeChild(button);
            
        });
        
        body.appendChild(button);

    }
}

// function changeCounter() {
//     onScreenButtons -= 1; 
//     console.log(onScreenButtons);
//     body.removeChild(button1)
// }

function youDidntWin() {
    gameArea.innerText = "you snooze you lose, restart?";
    restartButton.innerText = "Regain your honor";
    restartButton.addEventListener('click', (e) => {
        e.stopPropagation();
        restart();
     });
    
    //body.appendChild(restartButton);
}

function youLose() {
   
    if (onScreenButtons > 0) {
        // loser
        gameArea.innerText = "you snooze you lose, restart?";
        restartButton.innerText = "Regain your honor";
        restartButton.addEventListener('click', (e) => {
            e.stopPropagation();
            restart();
         });
        body.appendChild(restartButton);
    } else if (onScreenButtons == 0) {
        // winner
        gameArea.innerText = "Winner Winner";
        restartButton.innerText = "Continue to show off";
        restartButton.style.backgroundColor = "green";
        restartButton.addEventListener('click', (e) => {
            e.stopPropagation();
            restart();
         });
        body.appendChild(restartButton);
    }
    //listener for missed click, since I removed the win lose boolean I'm just setting the onScreenButtons value higher than is possible to click down from 
}

function playGame() {

    setTimeout(youLose, 1000 * maxButtons); //changed from 3000 to 1000 per button to make it easier during button chaos
    
    body.addEventListener('click', youDidntWin);
    
    for (var i = 0; i < maxButtons; i++) {
        var clickOrDie1 = new clickOrDie(i);
    }

}

function start() {
    body.removeChild(startButton);
    gameArea.innerText = "Click All the buttons as they Appear";
    setTimeout(playGame, Math.random() * (3000 - 1000) + 1000)
}

startButton.style.position = "absolute";
startButton.style.left = xPos / 2 - 50 + "px";
startButton.style.top = yPos / 2 + "px";
startButton.innerText = "START";
startButton.className = "buttons";
startButton.style.backgroundColor = '#00D936';
startButton.addEventListener('click', start);
body.appendChild(startButton);

// function restart() {
//     // reset the counter for buttons clicked.
//     onScreenButtons = maxButtons;
    
//     // loop through everything that as been appended to body and remove it, including all unclicked buttons and the restart button itself
//     while (body.hasChildNodes()) {
//         body.removeChild(body.lastChild);
//     }
//     // have to add back the top text since I obliterated it above.
//     body.appendChild(gameArea);
//     gameArea.innerText = "Click All of the buttons as they appear";
//     setTimeout(playGame, Math.random() * (3000 - 1000) + 1000)

// }

// the above restart was fun and all, but trying to tear down buttons instead of just reloading the page was getting to introduce more bugs than I wanted to fix, so went back to cheap and nasty with a page reload

function restart () {
    location.reload();
}

restartButton.style.position = "absolute";
restartButton.style.left = xPos / 2 - 50 + "px";
restartButton.style.top = yPos / 2 + "px";
restartButton.className = 'buttons';
restartButton.style.backgroundColor = '#00D936';
restartButton.innerText = "Restart";
restartButton.addEventListener('click', restart);
