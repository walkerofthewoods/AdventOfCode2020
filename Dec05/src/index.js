const chalk = require('chalk');
const boxen = require('boxen');
const { readFile } = require('./utils');

readFile('./src/input.txt')
	.then((file) => {
		data = file;
		seating();
	})
	.catch((error) => {
		console.error('An error occurred', error);
	});

function compute(arrayOfCharacters) {
	let rowMin = 0;
	let rowMax = 127;
	let colMin = 0;
	let colMax = 7;
	for (k = 0; k < arrayOfCharacters.length; k++) {
		if (arrayOfCharacters[k] === 'F') {
			rowMax = rowMax - Math.ceil((rowMax - rowMin) / 2);
		} else if (arrayOfCharacters[k] === 'B') {
			rowMin = rowMin + Math.ceil((rowMax - rowMin) / 2);
		} else if (arrayOfCharacters[k] === 'R') {
			colMin = colMin + Math.ceil((colMax - colMin) / 2);
		} else if (arrayOfCharacters[k] === 'L') {
			colMax = colMax - Math.ceil((colMax - colMin) / 2);
		}
	}

	let seatID = rowMin * 8 + colMin;
	return seatID;
}

function seating() {
	//input is array of seat IDs
	//break each ID into an array of characters
	//iterate through to computer seat IDs
	//sort seat IDs
	//display missing ID

	for (i = 0; i < data.length; i++) {
		data[i] = data[i].split('');
		data[i] = compute(data[i]);
	}

	data.sort(function(a, b) {
		return a - b;
	});

	for (i = 1; i < data.length; i++) {
		if (data[i] - 1 != data[i - 1]) {
			console.log(boxen(chalk.blue(data[i] - 1), { padding: 1, margin: 1 }));
			return data[i] - 1;
		}
	}
}
