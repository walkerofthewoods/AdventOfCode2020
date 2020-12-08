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
	for (i = 0; i < data.length; i++) {
		if (data[i] == '') {
			data[i] = '!';
		}
	} //replace nulls with !

	data = data.join(' ').split('!'); //combined data into array of single passport blocks

	let counter = 0;
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	alphabet = alphabet.split('');

	alphabet.forEach((e) => {
		for (i = 0; i < data.length; i++) {
			if (data[i].includes(e)) {
				counter++;
			}
		}
	});

	console.log(boxen(chalk.blue(counter), { padding: 1, margin: 1 }));
}
