let cpuScore = 0;
let playerScore = 0;
let playerWon = null;
const endScore = 5;
const buttons = document.querySelectorAll("button");
const playerPlay = document.querySelector(".player");
const cpuPlay = document.querySelector(".cpu");
const resultField = document.getElementById("result");
const content = document.querySelector(".content");
const endScreen = document.createElement("h1");
endScreen.setAttribute("id", "result");
buttons.forEach((e) => {
  e.addEventListener("click", (e) => {
    playRound(e.currentTarget.id);
  });
});

function init() {
  playerScore = 0;
  cpuScore = 0;
  content.hidden = false;
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
  playerPlay.innerHTML = `<img src="./images/${player}.svg" height="100" />`;
  cpuPlay.innerHTML = `<img src="./images/${cpu}.svg" height="100" />`;

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
    resultField.innerHTML = `Tie! ${cpu} vs ${player}`;
  } else if (playerWon) {
    playerScore++;
    resultField.innerHTML = `You won! ${player} beats ${cpu}`;
    document.getElementById("playerscore").innerHTML = playerScore;
  } else if (!playerWon) {
    cpuScore++;
    resultField.innerHTML = `You lose! ${cpu} beats ${player}`;
    document.getElementById("cpuscore").innerHTML = cpuScore;
  }

  if (playerScore == endScore || cpuScore == endScore) {
    content.hidden = true;
    if (playerScore > cpuScore) {
      endScreen.textContent = "You won the game";
    } else if (playerScore < cpuScore) {
      endScreen.textContent = "You lose the game!";
    } else {
      endScreen.textContent = "It's a tie!";
    }

    const body = document.getElementsByTagName("body")[0];
    body.replaceChild(endScreen, content);
  }
}

init();
