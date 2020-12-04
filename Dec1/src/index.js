const chalk = require('chalk');
const boxen = require('boxen');
const { readFile } = require('./utils');

const sum = (...a) => a.reduce((acc, val) => acc + val, 0);

console.log(boxen(chalk.blue('Hello world!'), { padding: 1, margin: 1 }));

//input file into string

async function parse() {
	data = await readFile('./src/input.txt');

	for (i = 0; i < 2020; i++) {
    for (j=1;j<2020;j++) {
      if (data.includes(i.toString()) && data.includes(j.toString()) && data.includes((2020 - i - j).toString())) {
        answer = i;
        console.log('answer =', i);
      }

    }
	}

	console.log((2020 - i) * i);
}

parse();

module.exports = { sum };
