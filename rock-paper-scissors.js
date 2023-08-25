const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const TIE = 4;
const WIN = 5;
const LOSE = 6;


function getComputerChoice () {
    // pick random number between 1 and 3
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice == 1) {
        return ROCK;
    }
    else if (choice == 2) {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
}


function playRound (playerChoice, computerChoice) {
    // convert input string to number
    playerChoice = playerChoice * 1;
    if (playerChoice == computerChoice) {
        return [TIE, playerChoice, computerChoice];
    }
    else if (playerChoice == SCISSORS && computerChoice == PAPER 
            || playerChoice == PAPER && computerChoice == ROCK
            || playerChoice == ROCK && computerChoice == SCISSORS) {
                return [WIN, playerChoice, computerChoice];
            }
    else {
        return [LOSE, playerChoice, computerChoice];
    }
}


function constToString (number) {
    if (number == ROCK) return "rock";
    if (number == PAPER) return "paper";
    else return "scissors";
}


function showRoundResult (roundResult) {
    // convert resulting array into useful data
    const result = roundResult[0];
    const playerResult = constToString(roundResult[1]);
    const computerResult = constToString(roundResult[2]);

    if (result == WIN) {
        return `You win: ${playerResult} beats ${computerResult}!`;
    }
    else if (result == LOSE) {
        return `You lose: ${playerResult} gets beaten by ${computerResult}.`;
    }
    else return "Tie!";
}


function showScore (wins, losses) {
    return `Score: ${wins} - ${losses}`;
}


function showWinner (wins, losses) {
    if (wins == losses) return "The game ended in a tie. Give it another try!";
    else if (wins > losses) return "You won. Congratulations!";
    else return "You lost. Better luck next time!";
}


function playGame (numberOfRounds) {
    let rounds = 0;
    let wins = 0;
    let losses = 0;
    while (rounds < numberOfRounds) {
        // TODO gui
        let input = window.prompt("Enter number: ");
        // convert input to integer
        input = input * 1;
        let roundResult = playRound(input, getComputerChoice());
        // TODO gui
        console.log(showRoundResult(roundResult));
        if (roundResult[0] == WIN) wins++;
        else if (roundResult[0] == LOSE) losses++;
        // TODO gui
        console.log(showScore(wins, losses));
        rounds++;
    }
    // TODO gui
    console.log("GAME OVER");
    console.log(showScore(wins, losses));
    console.log(showWinner(wins, losses));
    console.log("Try again! CLik Play game");
}

// Play

playGame(5);