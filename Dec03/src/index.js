const chalk = require('chalk');
const boxen = require('boxen');
const { readFile } = require('./utils');

let data = [];

readFile('./src/input.txt')
	.then((file) => {
		data = file;
		processMap();
	})
	.catch((error) => {
		console.error('An error occurred', error);
	});

function processMap() {
	for (i = 0; i < data.length; i++) {
		data[i] = data[i].split('');
	} //setup map as an array of arrays

	let solution = toboggan(1, 1) * toboggan(3, 1) * toboggan(5, 1) * toboggan(7, 1) * toboggan(1, 2);

	console.log(boxen(chalk.blue(solution), { padding: 1, margin: 1 }));
}

function toboggan(right, down) {
	let row = 0;
	let column = 0;
	let treeCounter = 0;

	// index each row is modulated over the length
	// make a move function with rise and run
	// accumulate trees

	for (row = 0; row < data.length; row = row + down) {
		if (data[row][column % data[0].length] == '#') {
			treeCounter++;
		}

		column = column + right;
	}
	return treeCounter;
}
