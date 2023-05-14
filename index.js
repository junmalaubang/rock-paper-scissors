
const ROCK = 'ROCK',
      PAPER = 'PAPER',
      SCISSORS = 'SCISSORS';
let score = 0;

// return the computer choice
function getComputerChoice() {
    return [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let winAlert = 'You win! ';
    let loseAlert = 'You lose! '

    if(playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if(playerSelection === ROCK && (computerSelection === PAPER || SCISSORS)) {
        if (computerSelection === PAPER ) {
            return loseAlert + 'Paper beats Rock.' ;
        }
            score++;
            return winAlert + 'Rock beats Scissors.';
    }
    if(playerSelection === PAPER && (computerSelection === ROCK || SCISSORS)) {
        if (computerSelection === ROCK ) {
            score++;
            return winAlert + 'Paper beats Rock.' ;
        }      
        return loseAlert + 'Scissors beat paper';
    }
    if (playerSelection === SCISSORS && (computerSelection === PAPER || ROCK)) {
        if (computerSelection === PAPER ) {
            score++;
            return winAlert + 'Scissors beat paper';
        }
        return loseAlert + 'Rock beats Scissors.';
    }
  }

function game() {
    let i = 1;
    while( i <= 5) {

        let playerSelection = (prompt('Choose: Paper, Rock and Scissors.', 'rock') || ROCK).toUpperCase();
        let computerSelection = getComputerChoice();
        console.table({playerSelection: playerSelection, computerSelection: computerSelection })
        console.log(playRound(playerSelection, computerSelection));
        console.log("Score: ", score);
        i++;
    }
}

game();