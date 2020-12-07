const chalk = require('chalk');
const boxen = require('boxen');
const { readFile } = require('./utils');

let validCount = 0;

readFile('./src/input.txt')
	.then((file) => {
		data = file;
		passportValidator();
	})
	.catch((error) => {
		console.error('An error occurred', error);
	});

function passportValidator() {
	for (i = 0; i < data.length; i++) {
		if (data[i] == '') {
			data[i] = '!';
		}
	} //replace nulls with !

	data = data.join(' ').split('!'); //combined data into array of single passport blocks

	for (i = 0; i < data.length; i++) {
		data[i] = data[i].trim().split(' ');
		data[i] = Object.assign({}, data[i]); // break each passport into an object

		for (j = 0; j < 10; j++) {
			if (data[i][j.toString()]) {
				data[i][data[i][j.toString()].slice(0, 3)] = data[i][j.toString()].slice(4);
			}
		} //truncate label from value and put into key
	}

  //validator
	for (i = 0; i < data.length; i++) { 
		if (
			data[i]['byr'] &&
			!isNaN(data[i]['byr']) &&
			data[i]['iyr'] &&
			!isNaN(data[i]['iyr']) &&
			data[i]['eyr'] &&
			!isNaN(data[i]['eyr']) &&
			data[i]['byr'] >= 1920 &&
			data[i]['byr'] <= 2002 &&
			data[i]['iyr'] >= 2010 &&
			data[i]['iyr'] <= 2020 &&
			data[i]['eyr'] >= 2020 &&
			data[i]['eyr'] <= 2030 &&
			data[i]['pid'] &&
			data[i]['pid'].length == 9 &&
			!isNaN(data[i]['pid']) &&
			data[i]['hgt'] &&
			data[i]['hcl'] &&
			data[i]['hcl'].length == 7 &&
			data[i]['ecl'] &&
			((data[i]['hgt'].slice(-2) === 'cm' &&
				parseInt(data[i]['hgt']) >= 150 &&
				parseInt(data[i]['hgt']) <= 193) ||
				(data[i]['hgt'].slice(-2) === 'in' &&
					parseInt(data[i]['hgt']) >= 59 &&
					parseInt(data[i]['hgt']) <= 76)) &&
			data[i]['hcl'].slice(0, 1) === '#' &&
			(parseInt(data[i]['hcl'].slice(1, 2), 16) >= 0 && parseInt(data[i]['hcl'].slice(1, 2), 16) <= 15) &&
			(parseInt(data[i]['hcl'].slice(2, 3), 16) >= 0 && parseInt(data[i]['hcl'].slice(2, 3), 16) <= 15) &&
			(parseInt(data[i]['hcl'].slice(3, 4), 16) >= 0 && parseInt(data[i]['hcl'].slice(3, 4), 16) <= 15) &&
			(parseInt(data[i]['hcl'].slice(4, 5), 16) >= 0 && parseInt(data[i]['hcl'].slice(4, 5), 16) <= 15) &&
			(parseInt(data[i]['hcl'].slice(5, 6), 16) >= 0 && parseInt(data[i]['hcl'].slice(5, 6), 16) <= 15) &&
			(parseInt(data[i]['hcl'].slice(6), 16) >= 0 && parseInt(data[i]['hcl'].slice(6), 16) <= 15) &&
			(data[i]['ecl'] === 'amb' ||
				data[i]['ecl'] === 'blu' ||
				data[i]['ecl'] === 'brn' ||
				data[i]['ecl'] === 'gry' ||
				data[i]['ecl'] === 'grn' ||
				data[i]['ecl'] === 'hzl' ||
				data[i]['ecl'] === 'oth')
		) {
			validCount++;
		}
	}

	console.log(boxen(chalk.blue(validCount), { padding: 1, margin: 1 }));
}
