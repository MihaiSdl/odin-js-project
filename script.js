function computerPlay() {
    let game = Math.floor(Math.random() * 3);
    switch(game) {
        case 0:
            hand = "Rock";
            return hand;
            break;
        case 1:
            hand = "Paper";
            return hand;
            break;
        case 2:
            hand = "Scissors";
            return hand;
            break;
    }
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

    computerSelection = computerPlay();
    console.log("Computer choice was: " + computerSelection);

    playerSelection = playerPlay();
    console.log("Player choice was: " + playerSelection)

    if(playerSelection === "Rock") {
        if(computerSelection === "Rock") {
            console.log("Draw");
        }
        if(computerSelection === "Paper") {
            console.log("Computer wins");
        }
        if(computerSelection === "Scissors") {
            console.log("Player wins");
        }
    }

    if(playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            console.log("Player wins");
        }
        if(computerSelection === "Paper") {
            console.log("Draw");
        }
        if(computerSelection === "Scissors") {
            console.log("Computer wins");
        }
    }

    if(playerSelection === "Scissors") {
        if(computerSelection === "Rock") {
            console.log("Computer Wins");
        }
        if(computerSelection === "Paper") {
            console.log("Player wins");
        }
        if(computerSelection === "Scissors") {
            console.log("Draw wins");
        }
    }


}

gameRound();