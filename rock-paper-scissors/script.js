function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * options.length);
  return randomChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt(
    "Choose between rock, paper, or scissors",
    "ex. Rock"
  );
  let modifiedChoice = playerChoice.toLowerCase();

  switch (modifiedChoice) {
    case "rock":
      return 0;
      break;

    case "paper":
      return 1;
      break;

    case "scissors":
      return 2;
      break;
  }
}

function getWinner(playerSelection, computerSelection) {
  let a = playerSelection;
  let b = computerSelection;

  if (a === b) {
    return 0;
  } else if (
    (a === 0 && b === 2) ||
    (a === 1 && b === 0) ||
    (a === 2 && b === 1)
  ) {
    return 1;
  } else {
    return -1;
  }
}

function game() {
  let winCount = 0;
  for (let round = 1; round < 6; round++) {
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    let roundResult = getWinner(player, computer);
    if (roundResult === 1) {
      console.log(
        `This round ${round} you win, because ${options[player]} beats ${options[computer]}`
      );
      winCount++;
    } else if (roundResult === -1) {
      console.log(
        `This round ${round} you lose, because ${options[computer]} beats ${options[player]} `
      );
      winCount--;
    } else {
      console.log(`This round ${round} you tied `);
    }
  }

  const theWinner = function (winCount) {
    if (winCount > 1) {
      console.log("You win!");
    } else if (winCount < 0) {
      console.log("You lose!");
    } else {
      console.log("Tied!");
    }
  };

  theWinner(winCount);
}

let options = ["Rock", "Paper", "Scissors"];
game();
