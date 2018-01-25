// When the user comes to the page, there is a random amount of time, between 1 and 3 seconds,  before the round starts. Once the round has started, 
// a message is displayed telling him so. He has 0.5 seconds to click on the screen OR press the spacebar. If he presses within the allotted time, 
// there is a message telling him he has succeeded. Otherwise, there is a message telling him he has failed.

var winner = false;
var body = document.getElementById('theBody');
var gameArea = document.getElementById('gameArea');
var randomTime = Math.round(Math.random() * (3000 - 1000) + 1000);
console.log(randomTime);


// this is my winner section.
function chickenDinner() {
    gameArea.innerHTML = "winner winner chicken dinner";
    winner = true;
}

// I missed the part about the space bar so added it after, hence the slightly lazy double function call. but then nothing worked and I got slightly pissed off with it.

    

// once "Go!" add the event handler wait for 500 milliseconds before removing handler and saying loser, or winner if clicked
function goTime() {
    body.addEventListener('click', chickenDinner);
    body.addEventListener('keydown', event => {
        if (event.key == " ") {
            gameArea.innerHTML = "winner winner chicken dinner";
            winner = true;
            }
        });
    gameArea.innerHTML = 'GO!!!!!!!';
    console.log("get here?");
    setTimeout(() => {
        console.log(winner);
        if (!winner) {
            gameArea.innerHTML = 'Loooosssseeeeeerrrrrrrr!!';
            body.removeEventListener('click', chickenDinner);
        }
    }, 500);
}



// wait the random amount of milliseconds before saying go
setTimeout(goTime, randomTime);