let moves = ["rock", "paper", "scissors"];

function game() {
    alert("Welcome to rock, paper, scissors. This is a best of 5 so whoever gets to 3 wins first is the victor!");
    singleRound();
}

function computerPlay() {
    randomMove = moves[Math.floor(Math.random()*moves.length)];
}

function singleRound() {
    let playerMove = String(prompt("Please select rock, paper, or scissors."));
    let lowerPlayerMove = playerMove.toLowerCase();
    computerPlay();
    if (playerMove == "rock" && randomMove == "scissors") {
        alert("The computer chose scissors. You won!");
        playerWins = playerWins + 1;
        alert("The score is now " + playerWins + "-" + computerWins);
    }   else if (lowerPlayerMove == "rock" && randomMove == "paper") {
        alert("The computer chose paper. The computer won...");
        computerWins = computerWins + 1;
        alert("The score is now " + playerWins + "-" + computerWins);
    }   else if (lowerPlayerMove == "scissors" && randomMove == "paper") {
        alert("The computer chose paper. You won!");
        playerWins = playerWins + 1;
        alert("The score is now " + playerWins + "-" + computerWins);
    }   else if (lowerPlayerMove == "scissors" && randomMove == "rock") {
        alert("The computer chose rock. The computer won...");
        computerWins = computerWins + 1;
        alert("The score is now " + playerWins + "-" + computerWins);
    }   else if  (lowerPlayerMove == "paper" && randomMove == "rock") {
        alert("The computer chose rock. You won!");
        playerWins = playerWins + 1;
        alert("The score is now " + playerWins + "-" + computerWins);
    }   else if (lowerPlayerMove == "paper" && randomMove == "scissors") {
        alert("The computer chose scissors. The computer won.");
        computerWins = computerWins + 1;
        alert("The score is now " + playerWins + "-" + computerWins);
    }   else if (lowerPlayerMove == randomMove) {
        alert("It's a tie! Please please again.");
        singleRound();
    }   else {
        alert("You need to enter rock, paper, or scissors!");
    }  
    if (playerWins == 3) {
        alert("The game is over. You are the victor!");
        playerWins = 0;
        computerWins =0;
        alert("Thanks for playing!");
    }   else if (computerWins == 3) {
        alert("The game is over. The computer is the victor...")
        playerWins = 0;
        computerWins =0;
        alert("Thanks for playing!");
    }   else {
        singleRound();
    }
}
