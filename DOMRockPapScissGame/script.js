//global
let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
	const options = ["Rock", "Paper", "Scissors"];
	// let randomIndex = Math.floor(Math.random() * options.length + 0);
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}
// console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
	return (
		(player === "Rock" && computer === "Scissors") ||
		(player === "Scissors" && computer === "Paper") ||
		(player === "Paper" && computer === "Rock")
	);
}
// console.log(hasPlayerWonTheRound("Rock", "Scissors"));
// console.log(hasPlayerWonTheRound("Scissors", "Rock"));
// console.log(hasPlayerWonTheRound("Paper", "Rock"));

function getRoundResults(userOption) {
	const computerResult = getRandomComputerResult();
	// if (computerResult === userOption) {
	// 	return `It's a tie! Both chose use ${userOption}`;
	// } else if (hasPlayerWonTheRound(userOption) === computerResult) {
	// 	playerScore++;
	// 	return `Player wins! ${userOption} beats ${computerResult}`;
	// } else computerScore++;
	// return `Computer wins! ${computerResult} beats ${userOption}`;

	if (hasPlayerWonTheRound(userOption, computerResult)) {
		playerScore++;
		return `Player wins! ${userOption} beats ${computerResult}`;
	} else if (computerResult === userOption) {
		return `It's a tie! Both chose ${userOption}`;
	} else {
		computerScore++;
		return `Computer wins! ${computerResult} beats ${userOption}`;
	}
}
// console.log(getRoundResults("Rock"));
// console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

//Global
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
	roundResultsMsg.innerText = getRoundResults(userOption);
	playerScoreSpanElement.innerText = playerScore;
	computerScoreSpanElement.innerText = computerScore;
	if (playerScore === 3 || computerScore === 3) {
		winnerMsgElement.innerText = `${
			playerScore === 3 ? "Player" : "Computer"
		} has won the game!`;

		resetGameBtn.style.display = "block";
		optionsContainer.style.display = "none";
	}
}
// showResults("Rock");
function resetGame() {
	playerScore = 0;
	computerScore = 0;

	playerScoreSpanElement.innerText = playerScore;
	computerScoreSpanElement.innerText = computerScore;

	roundResultsMsg.innerText = "";
	winnerMsgElement.innerText = "";

	optionsContainer.style.display = "block";
	resetGameBtn.style.display = "none";

	// ✔️ Najlepša verzija (če želiš "pro" stil)

	// [playerScore, computerScore] = [0, 0];
	// [playerScoreSpanElement.innerText, computerScoreSpanElement.innerText] = [
	// 	0, 0,
	// ];
	// [winnerMsgElement.innerText, roundResultsMsg.innerText] = ["", ""];

	// optionsContainer.style.display = "block";
	// resetGameBtn.style.display = "none";
}

// 6. Event listenerji za gumbe
document.getElementById("rock-btn").addEventListener("click", function () {
  showResults("Rock");
});

document.getElementById("paper-btn").addEventListener("click", function () {
  showResults("Paper");
});

document.getElementById("scissors-btn").addEventListener("click", function () {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", resetGame);
// Za vsak slučaj: na začetku skrij reset gumb
resetGameBtn.style.display = "none";