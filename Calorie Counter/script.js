const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
// In programming, prefixing a variable with is or has is a common practice to signify that the variable represents a boolean value.
let isError = false;
// Later on in the project, you will update the value of isError if the user provides an invalid input.

//convert function
function cleanInputString(str) {
	// const regex = /\+-\s/; ////REGEX!!!!Your current pattern won't work just yet. /+-\s/ looks for +, -, and a space in order. This would match '+- hello' but would not match +hello...character class
	// console.log("original string: " , str);test
	const regex = /[+-\s]/g;
	return str.replace(regex, "");
}
// console.log(cleanInputString("+-99")); test
function isInvalidInput(str) {
	const regex = // /[0-9]+e[0-9]+/i; //i flag, which stands for "insensitive"
		/\d+e\d+/i;
	return str.match(regex);
}
function addEntry() {
	// Use concatenation to add a # to the beginning of the value property of entryDropdown, and assign that result to a  variable.

	// let targetId = "#" + entryDropdown.value;
	// const targetInputContainer = document.querySelector(`${targetId} .input-container`);
	const targetInputContainer = document.querySelector(
		`#${entryDropdown.value} .input-container`
	);
	const entryNumber =
		targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
	const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
	targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}
function calculateCalories(e) {
	e.preventDefault();
	isError = false;
}
function getCaloriesFromInputs(list) {
	let calories = 0;

	for (const item of list) {
		const currVal = cleanInputString(item.value);
		const invalidInputMatch = isInvalidInput(currVal);
		if (invalidInputMatch) {
			alert(`Invalid Input: ${invalidInputMatch[0]}`);
			isError = true;
			return null;
		}
		calories += Number(currVal);
	}
	return calories;
}
addEntryButton.addEventListener("click", addEntry);
