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


function GUIShowRoundResult (roundResult) {
    const resultString = showRoundResult(roundResult);
    const resultPar = document.createElement("p");
    resultPar.textContent = resultString;
    resultPar.setAttribute("id", "currentResult");
    const resultDiv = document.getElementById("result");
    let removePar = document.getElementById("currentResult");
    if (removePar) {
        resultDiv.removeChild(removePar);
    };
    resultDiv.appendChild(resultPar);
}


function GUIShowScore (wins, losses, text) {
    let scoreString = showScore(wins, losses);
    if (text) {
        scoreString = text + " " + scoreString;
    }
    const scoreH2 = document.createElement("H2");
    scoreH2.textContent = scoreString;
    scoreH2.setAttribute("id", "currentScore");
    const scoreDiv = document.getElementById("score");
    let removeH2 = document.getElementById("currentScore");
    if (removeH2) {
        scoreDiv.removeChild(removeH2);
    };
    scoreDiv.appendChild(scoreH2);
}

function GUIPlayGame (rounds) {
    let wins = 0;
    let losses = 0;
    let round = 0;
    const buttons = document.querySelectorAll('button.game_button');
    buttons.forEach(button => button.addEventListener(
        'click',
        function (e) {
            // get input from button id
            let input = e.target.id;
            // convert input to integer
            input = input * 1;
            let roundResult = playRound(input, getComputerChoice());
            GUIShowRoundResult(roundResult);
            if (roundResult[0] == WIN) wins++;
            else if (roundResult[0] == LOSE) losses++;
            // TODO gui
            GUIShowScore(wins, losses);
            round++;
            if(round == rounds + 1) {
                let scoreString = "GAME OVER! " + showWinner(wins, losses);
                GUIShowScore(wins, losses, scoreString);
                // reset data for new game
                wins = 0;
                losses = 0;
                round = 0;
                ;
            }
    }));
}


// Play


GUIPlayGame(5);