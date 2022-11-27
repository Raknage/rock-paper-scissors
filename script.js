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

function playRound(cpuChoice = "Rock", playerChoice = "paper") {
  const cpu = cpuChoice.toLowerCase();
  const player = playerChoice.toLowerCase();

  if (cpu === player) {
    return `Tie! Both played ${cpuChoice}.`;
  }

  switch (cpu) {
    case "rock":
      if (player === "paper") {
        return `You win! ${playerChoice} beats ${cpuChoice}`;
      } else if (player === "scissors") {
        return `You lose! ${cpuChoice} beats ${playerChoice}`;
      }
      break;

    case "paper":
      if (player === "scissors") {
        return `You win! ${playerChoice} beats ${cpuChoice}`;
      } else if (player === "rock") {
        return `You lose! ${cpuChoice} beats ${playerChoice}`;
      }
      break;

    case "scissors":
      if (player === "rock") {
        return `You win! ${playerChoice} beats ${cpuChoice}`;
      } else if (player === "paper") {
        return `You lose! ${cpuChoice} beats ${playerChoice}`;
      }
      break;
  }
}

console.log(playRound());
