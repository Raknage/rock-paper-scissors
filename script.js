let cpuScore = 0;
let playerScore = 0;
let playerWon = null;
const endScore = 1;
const buttons = document.querySelectorAll("button");

function main() {
  buttons.forEach((e) => {
    e.addEventListener("click", (e) => {
      console.log(e.currentTarget.id);
      playRound(e.currentTarget.id);
    });
  });
}

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

function playRound(playerChoice) {
  const cpu = getCpuChoice().toLowerCase();
  const player = playerChoice.toLowerCase();

  if (cpu === player) {
    playerWon = "tie";
  }

  switch (cpu) {
    case "rock":
      if (player === "paper") {
        playerWon = true;
      } else if (player === "scissors") {
        playerWon = false;
      }
      break;

    case "paper":
      if (player === "scissors") {
        playerWon = true;
      } else if (player === "rock") {
        playerWon = false;
      }
      break;

    case "scissors":
      if (player === "rock") {
        playerWon = true;
      } else if (player === "paper") {
        playerWon = false;
      }
      break;
  }

  if (playerWon === "tie") {
    console.log(`Tie! ${cpu} vs ${player}`);
  } else if (playerWon) {
    playerScore++;
    console.log(`You won! ${player} beats ${cpu}`);
  } else if (!playerWon) {
    cpuScore++;
    console.log(`You lose! ${cpu} beats ${player}`);
  }

  if (playerScore == endScore || cpuScore == endScore) {
    buttons.forEach((e) => {
      e.removeEventListener("click", (e) => {
        console.log(e.currentTarget.id);
        playRound(e.currentTarget.id);
      });
    });

    console.log(`Final score: ${playerScore} - ${cpuScore}`);
    if (playerScore > cpuScore) {
      console.log("You won the game");
    } else if (playerScore < cpuScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie!");
    }
  }
}

main();
