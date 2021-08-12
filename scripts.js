let moves = ['Rock', 'Paper', 'Scissors'];
let weapons = {};

function computerPlay() {
    randomMove = moves[Math.floor(Math.random()*moves.length)];
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.game-result')

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
            message = "You lost!";
         }
         else {
            message = "It's a tie.";
         }
        result.innerHTML = `You chose ${myMove}. The computer chose ${randomMove}. ${message}`;
    });
});
