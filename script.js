const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const displayPlayerScore = document.getElementById('playerScore');
const displayComputerScore = document.getElementById('computerScore');

const primaryText = document.getElementById('primaryText');
const secondaryText = document.getElementById('secondaryText');

const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');

const newGame = document.getElementById('buttonContainer');
const restartGame = document.getElementById('restartButtonContainer');
const restartGameButton = document.getElementById("restartButton")

rockButton.addEventListener('click', () => choiceSetter('Rock'));
paperButton.addEventListener('click', () => choiceSetter('Paper'));
scissorsButton.addEventListener('click', () => choiceSetter('Scissors'));

restartGameButton.addEventListener('click', () => newNewGame());

let computerScore = 0;
let playerScore = 0;
let roundResult = "";
let roundCounter = 0;


function choiceSetter(playerSelection) {

    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerSelection = computerOptions[Math.floor(Math.random() * 3)];
    updateChoices(playerSelection, computerSelection);
    gameRound(playerSelection, computerSelection);
    updateScore();
    gameOver();
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'Rock':
        playerChoice.textContent = 'Rock';
        break
      case 'Paper':
        playerChoice.textContent = 'Paper';
        break
      case 'Scissors':
        playerChoice.textContent = 'Scissors';
        break
    }
  
    switch (computerSelection) {
      case 'Rock':
        computerChoice.textContent = 'Rock';
        break
      case 'Paper':
        computerChoice.textContent = 'Paper';
        break
      case 'Scissors':
        computerChoice.textContent = 'Scissors';
        break
    }
  }

  function updateScore() {
    if (roundResult === 'Draw') {
        primaryText.textContent = "Draw!"
    } else if (roundResult === 'Player') {
        primaryText.textContent = 'You won!'
    } else if (roundResult === 'Computer') {
        primaryText.textContent = 'You lost!'
    }
  
    displayPlayerScore.textContent = `Player: ${playerScore}`;
    displayComputerScore.textContent = `Computer: ${computerScore}`;
  }

  function updateSecondaryText(winner, playerSelection, computerSelection) {


    switch(winner) {
        case 'Player':
            secondaryText.textContent = `${playerSelection} wins over ${computerSelection}`;
            break;
        case 'Computer':
            secondaryText.textContent = `${playerSelection} loses to ${computerSelection}`;
            break;
        case 'Draw':
            secondaryText.textContent = `${playerSelection} draws with ${computerSelection}`;
            break;
        }

    console.log(winner);
  }

function gameRound(playerSelection, computerSelection) {

    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            roundResult = "Draw";
        }
        if (computerSelection === "Paper") {
            roundResult = "Computer";
            computerScore++;
        }
        if (computerSelection === "Scissors") {
            roundResult = "Player";
            playerScore++;
        }
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            roundResult = "Player";
            playerScore++;
        }
        if (computerSelection === "Paper") {
            roundResult = "Draw";
        }
        if (computerSelection === "Scissors") {
            roundResult = "Computer";
            computerScore++;
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            roundResult = "Computer";
            computerScore++;
        }
        if (computerSelection === "Paper") {
            roundResult = "Player";
            playerScore++;
        }
        if (computerSelection === "Scissors") {
            roundResult = "Draw";
        }
    }
    updateSecondaryText(roundResult, playerSelection, computerSelection);

}

function gameOver() {
    if (playerScore === 5){
        primaryText.textContent = "The player wins the game!";
        secondaryText.textContent = "";
        newGame.style.display = "none";
        restartGame.style.display = "flex";
        
    } else if (computerScore === 5){
        primaryText.textContent = "The computer wins the game!"
        secondaryText.textContent = "";
        newGame.style.display = "none";
        restartGame.style.display = "flex";
    }


}

function newNewGame() {

    newGame.style.display = "flex";
    restartGame.style.display = "none";

    playerScore = 0
    computerScore = 0

    primaryText.textContent = 'Make a choice'
    secondaryText.textContent = 'First to score 5 wins'

    displayPlayerScore.textContent = 'Player: 0'
    displayComputerScore.textContent = 'Computer: 0'

    playerChoice.textContent = 'N/A'
    computerChoice.textContent = 'N/A'
  }


