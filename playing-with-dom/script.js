//Variables
const playerSelection = document.querySelector(".player-selection");
const playerChoice = document.querySelector(".display-player-choice");
const computerChoice = document.querySelector(".display-computer-choice");
const result = document.querySelector(".result");
const userScore = document.querySelector(".user-current-score");
const computerScore = document.querySelector(".computer-current-score");
const round = document.querySelector(".current-round");
const announcement = document.querySelector(".the-winner");
const currentTie = document.querySelector(".tie-count");

const choices = ["rock", "paper", "scissors"];
let userCurrentScore = 0;
let computerCurrentScore = 0;
let currentRound = 0;
let tieCount = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function updateRoundWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    tieCount++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    userCurrentScore++;
  } else {
    computerCurrentScore++;
  }
}

function getWinner() {
  if (userCurrentScore > computerCurrentScore) {
    return "the winner is you!";
  } else if (userCurrentScore < computerCurrentScore) {
    return "the winner is the computer!";
  } else {
    return "no one win this!";
  }
}

function playRound(e) {
  if (e.target.tagName === "BUTTON") {
    currentRound++;
    currentPlayerChoice = e.target.textContent;
    currentComputerChoice = getComputerChoice();
    round.textContent = `Round: ${currentRound}`;
    playerChoice.textContent = currentPlayerChoice;
    computerChoice.textContent = currentComputerChoice;
    updateRoundWinner(currentPlayerChoice, currentComputerChoice);
    userScore.textContent = `User: ${userCurrentScore}`;
    computerScore.textContent = `Computer: ${computerCurrentScore}`;
    currentTie.textContent = `Tie: ${tieCount}`;
  }
  if (currentRound === 5) {
    const theWinner = getWinner();
    announcement.textContent = `Game Over!, ${theWinner}`;
    playerSelection.removeEventListener("click", playRound);
  }
}

playerSelection.addEventListener("click", playRound);
