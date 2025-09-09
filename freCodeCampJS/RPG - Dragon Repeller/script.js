let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
//
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");

const monsterHealthText = document.querySelector("#monsterHealth");
// We have run into a slight problem. You are trying to query your page for a button element, but your script tag is in the head of your HTML. This means your code runs before the browser has finished reading the HTML, and your document.querySelector() will not see the button - because the browser hasn't processed it yet.
//...closing </body> tag).

// button1.addEventListener('mouseover', () => {
//     alert(`kliknu si "${button1.id}"`)
// })

const locations = [
	{
		name: "town square",
		"button text": ["Go to store", "Go to cave", "Fight dragon"],
		"button functions": [goStore, goCave, fightDragon],
		text: 'You are in the town square. You see a sign that says "Store".',
	},
	{
		name: "store",
		"button text": [
			"Buy 10 health (10 gold)",
			"Buy weapon (30 gold)",
			"Go to town square",
		],
		"button functions": [buyHealth, buyWeapon, goTown],
		text: "You enter the store.",
	},
];

// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.// Dot notation is what you use when you know the name of the property you're trying to access ahead of time....
//...in its name, you will need to use bracket notation.

//initialize buttons
button1.onclick = goStore; //DOT NOTATION NAČIN KLICA (brez oklepajev)
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];

	button1.onclick = location["button functions"][0];
	button2.onclick = location["button functions"][1];
	button3.onclick = location["button functions"][2];
	text.innerText = location.text;
}
function goTown() {
	// Instead of assigning the innerText and onclick properties to specific strings and functions, the update function will use data from the location that is passed into it. First, that data needs to be passed
	update(locations[0]);
}
function goStore() {
	update(locations[1]);
}
function goCave() {
	console.log("Going to cave.");
}
function fightDragon() {
	console.log("Fighting dragon.");
}
function buyHealth() {}
function buyWeapon() {}
function fightSlime() {}
function fightBeast() {}
