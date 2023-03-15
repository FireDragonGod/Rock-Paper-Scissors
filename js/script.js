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



