function getAverage(scores) {
	let sum = 0;

	for (const score of scores) {
		sum += score;
	}

	return sum / scores.length;
}
// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
function getGrade(score) {
	if (score > 99) {
		return "A++";
	} else if (score > 89 && score < 99) {
		return "A";
	} else if (score > 79 && score < 89) {
		return "B";
	} else if (score > 69 && score < 80) {
		return "C";
	} else if (score > 59 && score < 70) {
		return "D";
	} else return "F";
}
// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

function hasPassingGrade(score) {
	// return score > 59;
	return getGrade(score) !== "F";
}
// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));
function studentMsg(totalScores, studentScore) {
	// 	let msg = `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. `
	// 	  msg += hasPassingGrade(studentScore)
	//     ? "You passed the course."
	//     : "You failed the course.";
	//   return msg;
	const average = getAverage(totalScores);
	const grade = getGrade(studentScore);
	const passed = hasPassingGrade(studentScore);

	return (
		`Class average: ${average}. Your grade: ${grade}. ` +
		(passed ? "You passed the course." : "You failed the course.")
	);
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
