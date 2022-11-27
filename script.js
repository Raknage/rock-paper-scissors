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
    default:
      break;
  }
  return cpuChoice;
}

function getPlayerChoice() {
  prompt("Rock, paper or scissors?", 1);
}
