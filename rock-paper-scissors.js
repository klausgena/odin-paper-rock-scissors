function getComputerChoice() {
    // pick random number between 1 and 3
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice == 1) {
        return "Rock";
    }
    else if (choice == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // normalize input 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // return when tie
    if (playerSelection == computerSelection) {
        return "TIE!";
    }
    // return when win
    else if (playerSelection == "scissors" && computerSelection == "paper" 
            || playerSelection == "paper" && computerSelection == "rock" 
            || playerSelection == "rock" && computerSelection == "scissors") {
                return `You win, because ${playerSelection} beats ${computerSelection}!`;
            }
    // return when lose
    else {
        return `You lose, because ${computerSelection} beats ${playerSelection}!`;
    }
}

// GUI
const game_buttons = document.querySelectorAll("button.game_button");
console.log(game_buttons);
game_buttons.forEach(button => button.addEventListener(
    'click', function (e) {
        let result = playRound(e.target.id, getComputerChoice());
        resultDiv = document.getElementById("result");
        // delete earlier result paragraph, if exists.
        if (resultDiv.firstChild) {
            resultDiv.removeChild(resultDiv.firstChild);
          }
        // create paragraph with result
        const resultPar = document.createElement("p");
        resultPar.textContent = result;
        resultDiv.appendChild(resultPar);
    }));
