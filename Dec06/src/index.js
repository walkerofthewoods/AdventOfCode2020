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

function seating() {
	//replace nulls with ! so split works, then add one on end of document
	for (i = 0; i < data.length; i++) {
		if (data[i] == '') {
			data[i] = '!';
		}
	}
	data.push('!');

	//data = data.join(' ').split('!'); //for part 1

	let counter = 0;
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	alphabet = alphabet.split('');

	alphabet.forEach((e) => {
		let prevMarker = -1;
		for (i = 0; i < data.length; i++) {
			if (data[i] == '!') {
				for (j = prevMarker + 1; j < i; j++) {
					prevMarker = i;
					if (!data[j].includes(e)) {
						j = i - 1;
					} else if (j == i - 1) {
						counter++;
					}
				}
			}
		}
	});

	console.log(boxen(chalk.blue(counter), { padding: 1, margin: 1 }));
}
