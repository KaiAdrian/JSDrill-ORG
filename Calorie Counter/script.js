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
	const breakfastNumberInputs = document.querySelectorAll(
		"#breakfast input[type='number']"
	);
	const lunchNumberInputs = document.querySelectorAll(
		"#lunch input[type='number']"
	);
	const dinnerNumberInputs = document.querySelectorAll(
		"#dinner input[type='number']"
	);
	const snacksNumberInputs = document.querySelectorAll(
		"#snacks input[type='number']"
	);
	const exerciseNumberInputs = document.querySelectorAll(
		"#exercise input[type='number']"
	);

	const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
	const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
	const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
	const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
	const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
	const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
	if (isError) {
		return;
	}
	const consumedCalories =
		breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
	const remainingCalories =
		budgetCalories - consumedCalories + exerciseCalories;
	let surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
	output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}"> ${Math.abs(
		remainingCalories
	)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;
	output.classList.remove('hide');
// 	Finally, you need to make the #output element visible so the user can see your text. Your output variable is an Element, which has a classList property. This property has a .remove() method, which accepts a string representing the class to remove from the element.

// Example Code
// const paragraphElement = document.getElementById('paragraph');
// paragraphElement.classList.remove('hide');
// Use the .remove() method of the output variable's classList property to remove the hide class. Don't forget to place the word hide inside quotes.
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
