let moves = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    randomMove = moves[Math.floor(Math.random()*moves.length)];
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.game-result')
const gameResult = document.querySelector('.score')
const reset = document.getElementsByClassName('reset-button')[0];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerPlay();
        myMove = button.innerHTML;
        weapons = {
            Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
            Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
            Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
         }
         if (weapons[myMove].strongTo === randomMove) {
            message = "You won!";
         }
         else if (weapons[myMove].weakTo === randomMove) {
            message = "You lost...";
         }
         else {
            message = "It's a tie.";
         }
        result.innerHTML = `You chose ${myMove}. The computer chose ${randomMove}. ${message}`;
        gameScore();
    });
});

function gameScore() {
    if (message === "You won!") {
        playerScore += 1;
        gameResult.innerHTML = `The game is now: ${playerScore} - ${computerScore}`;
    }
    else if (message === "You lost...") {
        computerScore += 1;
        gameResult.innerHTML = `The game is now: ${playerScore} - ${computerScore}`;
    }
    gameEnd()
};

function gameEnd() {
    if (playerScore == "5") {
        gameResult.innerHTML = `The score is ${playerScore} - ${computerScore}, you won!`
        disabled(true);
        document.getElementsByClassName('reset-button')[0].style.visibility = 'visible';
    }
    else if (computerScore == "5") {
        gameResult.innerHTML = `The score is ${playerScore} - ${computerScore}, you lost...`
        disabled(true);
        document.getElementsByClassName('reset-button')[0].style.visibility = 'visible';
    }
};

function disabled(statement) {
    document.getElementById('rock').disabled = statement;
    document.getElementById('paper').disabled = statement;
    document.getElementById('scissors').disabled = statement;
}



reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    disabled(false);
    gameResult.innerHTML = '';
    reset.style.visibility = 'hidden';
    result.innerHTML = '';
});
