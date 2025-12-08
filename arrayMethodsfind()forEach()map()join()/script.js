// #playlist-songs, #play, and #pause elements with the getElementById() method. Assign them to variables playlistSongs, playButton and pauseButton respectively.

//html elem
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
	{
		id: 0,
		title: "Scratching The Surface",
		artist: "Quincy Larson",
		duration: "4:25",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
	},
	{
		id: 1,
		title: "Can't Stay Down",
		artist: "Quincy Larson",
		duration: "4:15",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
	},
	{
		id: 2,
		title: "Still Learning",
		artist: "Quincy Larson",
		duration: "3:51",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
	},
	{
		id: 3,
		title: "Cruising for a Musing",
		artist: "Quincy Larson",
		duration: "3:34",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
	},
	{
		id: 4,
		title: "Never Not Favored",
		artist: "Quincy Larson",
		duration: "3:35",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
	},
	{
		id: 5,
		title: "From the Ground Up",
		artist: "Quincy Larson",
		duration: "3:12",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
	},
	{
		id: 6,
		title: "Walking on Air",
		artist: "Quincy Larson",
		duration: "3:25",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
	},
	{
		id: 7,
		title: "Can't Stop Me. Can't Even Slow Me Down.",
		artist: "Quincy Larson",
		duration: "3:52",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
	},
	{
		id: 8,
		title: "The Surest Way Out is Through",
		artist: "Quincy Larson",
		duration: "3:10",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
	},
	{
		id: 9,
		title: "Chasing That Feeling",
		artist: "Quincy Larson",
		duration: "2:43",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
	},
];
const audio = new Audio();
let userData = {
	songs: [...allSongs],
	currentSong: null,
	songCurrentTime: 0,
};
// const printGreeting = () => {
// 	console.log("Hello there!");
// };
// const printMessage = org => {
// 	console.log(`${org} is awesome!`);
// }
// printMessage("freeCodeCamp");

// const addTwoNumbers = (num1, num2) =>
// 	 num1 + num2;

// console.log(addTwoNumbers(3, 4));
const renderSongs = array => {
	const songsHTML = array.map(song => {
		return `<li id="song-${song.id}" class="playlist-song"></li>`
	});
}
// Inside the backticks, create an li element with an id attribute of song-${song.id} and a class attribute of playlist-song.