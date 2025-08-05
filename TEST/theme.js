// function testTeme (uporabnik) {
//     const msg = `Pozdravljen/a ${uporabnik}`;
//     return msg;
// }
// console.log(testTeme("Kristič"));
// console.log(testTeme("Joži"));
// console.log(testTeme("opica"));

// document.getElementById("msg").innerHTML=`${testTeme("Kristič")} ${testTeme("Joži")} ${testTeme("opica")}`

function testTeme(uporabnik) {
	return `Pozdravljen/a ${uporabnik}`;
}

const rezultat =
	testTeme("Kristič") +
	"<br>" +
	testTeme("Joži") +
	"<br>" +
	testTeme("opica") +
	"<br>" +
	testTeme("medo") +
	"<br>" +
	testTeme("Rino") +
	"<br>" +
	testTeme("Zajček") +
	"<br>" +
	testTeme("Kobilica");
("<br>");

