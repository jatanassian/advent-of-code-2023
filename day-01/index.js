const { readFile } = require('fs');

///////////////////////////////////////////////////////////////////
// PART ONE
///////////////////////////////////////////////////////////////////
readFile('./data.txt', { encoding: 'utf8' }, (err, data) => {
	const rows = data.split('\n');

	let result = 0;

	rows.forEach(row => {
		let firstNumber;
		let lastNumber;

		for (let i = 0; i < row.length; i++) {
			const character = row[i];

			// If current character is a number
			if (!isNaN(character)) {
				if (!firstNumber) {
					firstNumber = character;
				}
				lastNumber = character;
			}
		}

		result += Number(firstNumber + lastNumber);
	});

	console.log('[PART 1] Result:', result);
});

///////////////////////////////////////////////////////////////////
// PART TWO
///////////////////////////////////////////////////////////////////

/**
 * Find what the number is from the possible letters combinations
 *
 * @param {string} threeLetters
 * @param {string} fourLetters
 * @param {string} fiveLetters
 * @returns {string | undefined}
 */
const lettersToNumber = (threeLetters, fourLetters, fiveLetters) => {
	if (threeLetters === 'one') return '1';
	if (threeLetters === 'two') return '2';
	if (fiveLetters === 'three') return '3';
	if (fourLetters === 'four') return '4';
	if (fourLetters === 'five') return '5';
	if (threeLetters === 'six') return '6';
	if (fiveLetters === 'seven') return '7';
	if (fiveLetters === 'eight') return '8';
	if (fourLetters === 'nine') return '9';

	return undefined;
};

readFile('./data.txt', { encoding: 'utf8' }, (err, data) => {
	const rows = data.split('\n');

	let result = 0;

	rows.forEach(row => {
		let firstNumber;
		let lastNumber;

		for (let i = 0; i < row.length; i++) {
			const character = row[i];

			// If current character is a number
			if (!isNaN(character)) {
				if (!firstNumber) {
					firstNumber = character;
				}
				lastNumber = character;
			}

			// If NaN, check if lettered number
			const threeLetters = character + row[i + 1] + row[i + 2];
			const fourLetters = character + row[i + 1] + row[i + 2] + row[i + 3];
			const fiveLetters =
				character + row[i + 1] + row[i + 2] + row[i + 3] + row[i + 4];

			const numberFromLetters = lettersToNumber(
				threeLetters,
				fourLetters,
				fiveLetters
			);

			if (!firstNumber) {
				numberFromLetters && (firstNumber = numberFromLetters);
			}
			numberFromLetters && (lastNumber = numberFromLetters);
		}
		result += Number(firstNumber + lastNumber);
	});

	console.log('[PART 2] Result:', result);
});
