console.log("Hello, World!");
console.log("If you're surprised! Good thing if you cancel the game stops. Cool right? It stops the program.")

let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "It's a tie";
    } else if (playerSelection == "rock")
        if (computerSelection == "scissors") {
        result = "You win! rock destroys scissors.";
        playerScore += 1;
    } else {
        result = "Computer wins! Paper wraps rock"
        computerScore +=1;
    } else if (playerSelection == "paper") 
        if (computerSelection == "rock") {
        result = "You win! paper wraps rock";
        playerScore += 1;
    } else {
        result = "Computer wins! Scissors cuts paper"
        computerScore += 1;
    } else if (playerSelection == "scissors") 
        if (computerSelection == "paper") {
        result = "you win! scissors cuts paper";
        playerScore += 1;
    } else {
        result = "Computer wins! Rock destroys scissors!"
        computerScore += 1;
    } else {
        result = "Input not supported. choose rock, paper, or scissors";
    }
    return result;    
}

let playerScore = 0;
let computerScore = 0;

function game() {
    while(playerScore < 5 && computerScore < 5) {
            let playerSelection = prompt("Choose your weapon against computer: Rock-Paper-Scissors").toLowerCase();
            let computerSelection = getComputerChoice(choices);
            console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore === 5) {
        console.log("You Win! Refresh to replay🎉");
    } else {
        console.log("You Lose! Refresh to replay😝");
    }
}

game();