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
//initialize buttons
button1.onclick = goStore; //DOT NOTATION NAČIN KLICA (brez oklepajev)
button2.onclick = goCave;
button3.onclick = fightDragon;

 function buyHealth(){};
 function buyWeapon(){};
 function goTown(){};
