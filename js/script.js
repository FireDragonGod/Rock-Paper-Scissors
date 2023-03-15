const helloWorld = 'Hello, World!';

const choices = [
  'rock', 
  'paper', 
  'scissors',
];

const choiceDisplaying = document.querySelector('#displayChoices');
const computerChoices = document.querySelector('.computerChoice');
const computerChoicesDisplay = document.createElement('img');

const computerChoice = function getComputerChoice(choices) {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  if (choice === 'rock') {
    computerChoicesDisplay.setAttribute('src', 'img/rock_1faa8.png');
    computerChoices.appendChild(computerChoicesDisplay);
  }
  if (choice === 'paper') {
    computerChoicesDisplay.setAttribute('src', 'img/page-facing-up_1f4c4.png');
    computerChoices.appendChild(computerChoicesDisplay);
  }
  if (choice === 'scissors') {
    computerChoicesDisplay.setAttribute('src', 'img/scissors_2702-fe0f.png');
    computerChoices.appendChild(computerChoicesDisplay);
  }
  return choice;
};


let playerScore = 0;
let computerScore = 0;

const playRound = function setTheGameRules(playerSelection, computerSelection) {
  let result = document.querySelector('.result');

  const playerScoreDoc = document.querySelector('.player-score');
  const computerScoreDoc = document.querySelector('.computer-score');

  if (playerSelection === computerSelection) {
    result.textContent = 'It\'s a tie';
  } else if (playerSelection === 'rock')
    if (computerSelection === 'scissors') {
      result.textContent = 'You win! Rock destroys scissors.';
      playerScore += 1;
      playerScoreDoc.textContent = `${playerScore}`;
    } else {
      result.textContent = 'Computer wins! Paper wraps rock';
      computerScore += 1;
      computerScoreDoc.textContent = `${computerScore}`;
  } else if (playerSelection === 'paper')
    if (computerSelection === 'rock') {
      result.textContent = 'You win! paper wraps rock';
      playerScore += 1;
      playerScoreDoc.textContent = `${playerScore}`;
    } else {
      result.textContent = 'Computer wins! Scissors cuts paper';
      computerScore += 1;
      computerScoreDoc.textContent = `${computerScore}`;
  } else if (playerSelection === 'scissors')
    if (computerSelection === 'paper') {
      result.textContent = 'You win! Scissors cuts paper';
      playerScore += 1;
      playerScoreDoc.textContent = `${playerScore}`;
    } else {
      result.textContent = 'Computer wins! Rock destroys scissors!';
      computerScore += 1;
      computerScoreDoc.textContent = `${computerScore}`;
  }
  return result;
};

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerChoice = document.querySelector('.playerChoice');
const playerChoiceDisplay = document.createElement('img');

const userChoice = function userChoiceClicksOnTheButton() {

  rock.addEventListener('click', function rockPlayerSelection() { 
    playRound('rock', computerChoice(choices));
    playerChoiceDisplay.setAttribute('src', 'img/rock_1faa8.png');
    playerChoice.appendChild(playerChoiceDisplay);
    gameOver();
  });

  paper.addEventListener('click', function rockPlayerSelection() { 
    playRound('paper', computerChoice(choices));
    playerChoiceDisplay.setAttribute('src', 'img/page-facing-up_1f4c4.png');
    playerChoice.appendChild(playerChoiceDisplay);
    gameOver();
  });

  scissors.addEventListener('click', function rockPlayerSelection() { 
    playRound('scissors', computerChoice(choices));
    playerChoiceDisplay.setAttribute('src', 'img/scissors_2702-fe0f.png');
    playerChoice.appendChild(playerChoiceDisplay);
    gameOver();
  });
};

userChoice();

const gameOver = function ifTheConditionOfTheGameIsOverPassTheResetButton() {
  const content = document.querySelector('.finalScore');
  const resetButton = document.createElement('button');

  if (playerScore >= 5) {
    content.textContent = 'You Win!';
    resetButton.textContent = 'Play Again';
    resetButton.style.cssText = 'padding: 12px 24px; margin-left: 24px; background-color: #001221; font-weight: bolder; color: white';
    content.appendChild(resetButton);
  }

  if (computerScore >= 5) {
    content.textContent = 'You Lose!';
    resetButton.textContent = 'Play Again';
    resetButton.style.cssText = 'padding: 12px 24px; margin-left: 24px; background-color: #001221; font-weight: bolder; color: white';
    content.appendChild(resetButton);
  }

  const playerScoreDoc = document.querySelector('.player-score');
  const computerScoreDoc = document.querySelector('.computer-score');
  const result = document.querySelector('.result');

  resetButton.addEventListener('click',  function resetButtonForReplay() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDoc.textContent = `${playerScore}`;
    computerScoreDoc.textContent = `${computerScore}`;
    result.textContent = ``;
    content.removeChild(resetButton);
    content.textContent = ``;
    playerChoiceDisplay.setAttribute('src', '');
    playerChoice.appendChild(playerChoiceDisplay);
    computerChoicesDisplay.setAttribute('src', '');
    computerChoices.appendChild(computerChoicesDisplay);
  });
  return;
};