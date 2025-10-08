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
	return  str.match(regex);
}

