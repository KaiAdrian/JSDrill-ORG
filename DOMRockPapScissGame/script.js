//global
let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
	const options = ["Rock", "Paper", "Scissors"];
	// let randomIndex = Math.floor(Math.random() * options.length + 0);
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
	return (
		(player === "Rock" && computer === "Scissors") ||
		(player === "Scissors" && computer === "Paper") ||
		(player === "Paper" && computer === "Rock")
	);
}
console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));
console.log(hasPlayerWonTheRound("Paper", "Rock"));

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

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
