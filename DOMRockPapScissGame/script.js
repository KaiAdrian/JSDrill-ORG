function getRandomComputerResult() {
	const options = ["Rock", "Paper", "Scissors"];
  // let randomIndex = Math.floor(Math.random() * options.length + 0);
  const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}
console.log(getRandomComputerResult());
