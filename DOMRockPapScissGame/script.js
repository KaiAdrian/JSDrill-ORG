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
