function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() *3)];
}

function playerPlay() {
    let choice = prompt("Player choice is: ");
    while(choice !== "Rock" && choice !== "Paper" && choice !== "Scissors" ){
        
        choice = playerWrong(choice);
    } 
    return choice;
}

function playerWrong(choice){
    choice = prompt("Please make an appropriate choice!");

    while(choice !== "Rock" && choice !== "Paper" && choice !== "Scissors" ){
        choice = playerWrong(choice);
    }

    return choice;
}

function gameRound () {

    let result = "";

    computerSelection = computerPlay();
    console.log("Computer choice was: " + computerSelection);

    playerSelection = playerPlay();
    console.log("Player choice was: " + playerSelection)

    if(playerSelection === "Rock") {
        if(computerSelection === "Rock") {
            result = "Draw";
        }
        if(computerSelection === "Paper") {
            result = "Computer wins";
        }
        if(computerSelection === "Scissors") {
            result = "Player wins";
        }
    }

    if(playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            result = "Player wins";
        }
        if(computerSelection === "Paper") {
            result = "Draw";
        }
        if(computerSelection === "Scissors") {
            result = "Computer wins";
        }
    }

    if(playerSelection === "Scissors") {
        if(computerSelection === "Rock") {
            result = "Computer wins";
        }
        if(computerSelection === "Paper") {
            result = "Player wins";
        }
        if(computerSelection === "Scissors") {
            result = "Draw";
        }
    }

    console.log(result);

    return result;

}

function game() {

    let numberofRounds = parseInt(prompt("How many rounds would you like to play?"));

    let computerScore = 0;
    let playerScore = 0;
    let roundResult = "";

    for (let i = 1; i <= numberofRounds; i++){

        console.log("Round " + i);

        roundResult = gameRound();

        if(roundResult === "Computer wins") {

            computerScore++;
        } else if(roundResult === "Player wins") {

            playerScore ++;
        }
    }

    if(computerScore === playerScore) {

        console.log("The game ends in a draw after " + numberofRounds + " rounds!");

    } else if(computerScore > playerScore) {
        
        console.log("The computer wins after " + numberofRounds + " rounds!");
    } else console.log("The player wins after " + numberofRounds + " rounds!");

}

game();