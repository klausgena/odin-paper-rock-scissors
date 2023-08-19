// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// We’ll use this function in the game to make the computer’s play.
// Tip: use the console to make sure this is returning the expected 
// output before moving to the next step!
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
// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round 
// like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case -insensitive(so users can input 
// rock, ROCK, RocK or any other variation).
// Important note: you want to return the results of this function call,
//  not console.log() them.You’re going to use what you return later on, 
// o let’s test this function by using console.log to see the results:

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

// Write a NEW function called game().
// Use the previous function inside of this one to play a 5 round game 
// that keeps score and reports a winner or loser at the end.
function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        // get user input
        let playerSelection = prompt("Enter rock, paper or scissors.")
        // check if user input is correct.
        if (playerSelection != null &&
            playerSelection.toLowerCase() == "rock" ||
            playerSelection.toLowerCase() == "paper" ||
            playerSelection.toLowerCase() == "scissors") {
                // get computer choice
                let computerSelection = getComputerChoice();
                // play round and memorize return
                let round = playRound(playerSelection, computerSelection);
                // set score
                let result = round.split(" ")[1];
                if (result == "win,") {
                    playerScore++;
                }
                else if (result == "lose,"){
                    computerScore++;
                }
                // log result
                console.log(round);
            }
        else {
            console.log("No or wrong input. Try again!");
        }
    }
    if (playerScore > computerScore) {
        return "Game over. You win!";
    }
    else if (computerScore > playerScore) {
        return "Game over. You lose!";
    }
    else {
        return "Game over. Tie!";
    }
}
// You have not officially learned how to “loop” over code to repeat function calls…
//  if you already know about loops from somewhere else 
// (or if you feel like doing some more learning) feel free to use them.
// If not, don’t worry! Just call your playRound function 5 times in a row.
// Loops are covered in the next lesson.
// At this point you should be using console.log() 
// to display the results of each round and the winner at the end.