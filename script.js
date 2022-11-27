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

function playRound(cpuChoice = "Rock", playerChoice = "rock") {
  const cpu = cpuChoice.toLowerCase();
  const player = playerChoice.toLowerCase();
  if (cpu === player) {
    return `Tie! Both played ${cpuChoice}.`;
  }
  switch (cpuChoice) {
    case "Rock":
      if (playerChoice) {
      }
      break;

    default:
      break;
  }
}

console.log(playRound());
