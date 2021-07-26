let moves = ["rock", "paper", "scissors"];

function computerPlay() {
    randomMove = moves[Math.floor(Math.random()*moves.length)];
    console.log(randomMove);
}