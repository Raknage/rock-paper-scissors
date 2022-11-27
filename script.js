function getCpuChoice() {
  let cpuChoice = null;
  let x = Math.floor(Math.random() * 3);
  switch (x) {
    case 0:
      cpuChoice = "Rock";
      break;
    case 1:
      cpuChoice = "Paper";
      break;
    case 2:
      cpuChoice = "Scissors";
      break;
  }
  return cpuChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper or scissors?", "Rock");
  return playerChoice.trim();
}

function playRound(cpuChoice, playerChoice) {
  const cpu = cpuChoice.toLowerCase();
  const player = playerChoice.toLowerCase();

  if (cpu === player) {
    return "tie";
  }

  switch (cpu) {
    case "rock":
      if (player === "paper") {
        return true;
      } else if (player === "scissors") {
        return false;
      }
      break;

    case "paper":
      if (player === "scissors") {
        return true;
      } else if (player === "rock") {
        return false;
      }
      break;

    case "scissors":
      if (player === "rock") {
        return true;
      } else if (player === "paper") {
        return false;
      }
      break;
  }
}

function game(rounds = 5) {
  let cpuScore = 0;
  let playerScore = 0;
  let playerWon = null;

  for (let i = 0; i < rounds; i++) {
    let cpuChoice = getCpuChoice();
    let playerChoice = getPlayerChoice();

    playerWon = playRound(cpuChoice, playerChoice);

    if (playerWon === "tie") {
      console.log(`Tie! ${cpuChoice} vs ${playerChoice}`);
    } else if (playerWon) {
      playerScore++;
      console.log(`You won! ${playerChoice} beats ${cpuChoice}`);
    } else if (!playerWon) {
      cpuScore++;
      console.log(`You lose! ${cpuChoice} beats ${playerChoice}`);
    }
  }

  console.log(`Final score: ${playerScore} - ${cpuScore}`);
  if (playerScore > cpuScore) {
    console.log("You won the game");
  } else if (playerScore < cpuScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

game();
