let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
//
let monsterHealth;
let inventory = ["stick"];

// One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the <h1> element in your HTML, you would write:

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
		text:'You are in the town square. You see a sign that says "Store".'
	},
]; //role-play  upd trenutno lokacijo junaka

/*const cat = {		//PRVI OBJEKT
	name: "Whiskers",
	"Number of legs":4  
}; */

// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.// Dot notation is what you use when you know the name of the property you're trying to access ahead of time....
//...in its name, you will need to use bracket notation.

//initialize buttons
button1.onclick = goStore; //DOT NOTATION NAČIN KLICA (brez oklepajev)
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
	//TO AVOID REPET
}
function goTown() {
	button1.innerText = "Go to store";
	button2.innerText = "Go to cave";
	button3.innerText = "Fight dragon";

	button1.onclick = goStore;
	button2.onclick = goCave;
	button3.onclick = fightDragon;
	text.innerText =
		'You are in the town square. You see a sign that says "Store".';
}
function goStore() {
	button1.innerText = "Buy 10 health (10 gold)";
	button2.innerText = "Buy weapon (30 gold)";
	button3.innerText = "Go to town square";

	button1.onclick = buyHealth;
	button2.onclick = buyWeapon;
	button3.onclick = goTown;
	text.innerText = "You enter the store.";
}
function goCave() {
	console.log("Going to cave.");
}
function fightDragon() {
	console.log("Fighting dragon.");
}

function buyHealth() {}
function buyWeapon() {}
