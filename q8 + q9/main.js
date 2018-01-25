// Let's make a 2 player game

// Both players will be on the same computer and will use the same keyboard. Player 1 uses the Q key and player 2 uses the P key.

// After a random amount of time (between 2 and 8 seconds) elapses. There is a BANG sound. This signals to the players that the game has started.

// If player one presses the Q key, before player two presses the P key, then player one wins the game. Otherwise player 2 wins.

// If player one presses the Q key BEFORE the bang, player one loses.
// If player two presses the P key BEFORE the bang, player  two loses.

// At the end, a button appears to restart the game

var win = false;
var lose = false;
var xWidth = window.innerWidth;
var yHeight = window.innerHeight;

var body = document.getElementById('theBody');
var gameArea = document.getElementById('gameArea');
var playerMessage = document.getElementById('playerMessage');

var startButton = document.createElement('button');
var restartButton = document.createElement('button');
var qKeyCode = 81;
var pKeyCode = 80;

var bang = new Audio('collision.mp3');
var trombone = new Audio('sadT.mp3');

var playerOneWins = 0;
var playerTwoWins = 0;

class Player {
    constructor (x, y, myKey) {
      var a = myKey;
      this.xPos = x;
      this.ypos = y;
      //this.sprite = document.createElement('img');
      console.log('made player ' + myKey)
      
    }
}

function gameLoop () {
    // game go bang


    bang.play();
    // need to listen for two key presses, if Q then p1 wins, if P then P2 wins.
    
    body.addEventListener('keydown', keyPressed = e => {
        
        if (e.keyCode === qKeyCode) {
            //Player 1 wins
            playerOneWins += 1;
            body.removeEventListener('keydown', keyPressed);
            console.log("player 1 wins");
            console.log(playerOneWins + " " + playerTwoWins)
            body.appendChild(startButton);
        } else if (e.keyCode === pKeyCode) {
            // Player 2 wins
            playerTwoWins += 1;
            body.removeEventListener('keydown', keyPressed);
            console.log("Player 2 wins");
            console.log(playerOneWins + " " + playerTwoWins)
            body.appendChild(startButton);
        };

        //Check what the total score is before 
        if (playerOneWins == 3) {
            playerMessage.style.fontSize = 'xx-large';
            playerMessage.innerText ="Player 1 is the big cheese";
        } else if (playerTwoWins == 3) {
            playerMessage.style.fontSize = 'xx-large';
            playerMessage.innerText = "Player 2 is the big kahuna";
        }
        // else { playerMessage.innerText = " Yo, wake up, turn the volume up and press your keys"}
    } );
}



function playGame() {
    body.removeChild(startButton);
    console.log("start pressed, game loop started");
    setTimeout( gameLoop, Math.random() * (8000 -2000) + 2000); // max 8 min 2 seonds before bang
    var player1 = new Player(100, 300, qKeyCode);
    var player2 = new Player(700, 300, pKeyCode);
    playerMessage.style.fontSize = 'large';
    playerMessage.innerText = "Wait for the bang!!";
    


}

// start button
startButton.className = 'buttons';
startButton.style.left = xWidth / 2 - 50 + "px";
startButton.style.top = yHeight / 2 - 50 + "px";
startButton.innerText = "Start"
startButton.style.backgroundColor = '#5CFF26';
startButton.addEventListener('click', playGame);
body.appendChild(startButton);


