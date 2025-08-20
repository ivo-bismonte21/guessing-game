const guessStatus = document.getElementById("result-guess-status");
const guessHistory = document.getElementById("result-guesses-history");
const guessValue = document.getElementById("result-value");
const guessLeft = document.getElementById("result-turns");
const button = document.getElementById("btn-submit");

let selectedNumber = Math.floor(Math.random() * 100) + 1;
let turns = 10;

function compareNumbers() {
  const inputNumber = Number(
    document.querySelector(".gameplay-input-number").value
  );
  if (selectedNumber === inputNumber) {
    guessStatus.textContent = "Congratulations! You guessed the number!";
    guessStatus.style.backgroundColor = "#00AF54";
    displayRestartButton();
    displayResult()
    return;
  } else if (selectedNumber > inputNumber) {
    guessValue.textContent = `too Low.`;
  } else if (selectedNumber < inputNumber) {
    guessValue.textContent = `too High!`;
  }
  turns--;
  guessHistory.textContent += `${inputNumber}, `;
  guessLeft.textContent = `${turns}`;
  displayResult();
  console.log(`Your input: ${inputNumber}`);
  if (turns === 0) {
    button.disabled = true;
    guessStatus.style.backgroundColor = "#FF5964";
    guessStatus.textContent = "!!! GAME OVER !!!";
    displayRestartButton();
  }
}

function displayResult() {
  guessLeft.classList.remove("hidden");
  guessHistory.classList.remove("hidden");
  guessValue.classList.remove("hidden");
  guessStatus.classList.remove("hidden");
}

function restartGame() {
  const resultTexts = [
    guessStatus,
    guessHistory,
    guessValue,
    guessLeft
  ];
  for (const resultText of resultTexts){
    resultText.textContent = "";
  }
  button.disabled = false;
  selectedNumber = Math.floor(Math.random() * 100) + 1;
  turns = 10;
}

function displayRestartButton() {
  const restartButton = document.getElementById("btn-restart");
  restartButton.style.display = "block";
  restartButton.addEventListener("click", restartGame);
}

const buttons = document.getElementById("btn-submit");
buttons.addEventListener("click", function (event) {
  event.preventDefault();
  compareNumbers();
});
