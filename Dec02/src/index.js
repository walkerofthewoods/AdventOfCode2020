const chalk = require('chalk');
const boxen = require('boxen');
const { readFile } = require('./utils');

const sum = (...a) => a.reduce((acc, val) => acc + val, 0);

console.log(boxen(chalk.blue('Hello world!'), { padding: 1, margin: 1 }));

let validCount = 0;

async function parse() {
	data = await readFile('./src/input.txt');
  data = data.toString().split(',');
  
	data.forEach((e) => {
		//get min
		//get max
		//get character
		//search string
		//verify against min/max

		//min = break off first section before dash
		e = e.split('-');
    let min = parseInt(e[0]);
    e = e[1].split(' ');
		let max = parseInt(e[0]);
		let char = e[1];
    char = char.slice(0,1);
		let pwd = e[2].split("");

    /* Part 1 Answer
    let qty = pwd.split(char).length - 1;

		 if (qty >= min && qty <= max) {
			validCount++;
    } */
    
    if ((pwd[min-1] == char || pwd[max-1] == char) && pwd[min-1] != pwd[max-1]) {
      validCount++;
    }

  });
  
  console.log(validCount);
}

parse();

module.exports = { sum };
