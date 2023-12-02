const { readFile } = require('fs');

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

			///////////////////////////////////////////////////////////////////
			// PART TWO ONLY
			// If NaN, check if lettered number
			const threeLettersNumber = character + row[i + 1] + row[i + 2];
			const fourLettersNumber =
				character + row[i + 1] + row[i + 2] + row[i + 3];
			const fiveLettersNumber =
				character + row[i + 1] + row[i + 2] + row[i + 3] + row[i + 4];

			if (!firstNumber) {
				threeLettersNumber === 'one' && (firstNumber = '1');
				threeLettersNumber === 'two' && (firstNumber = '2');
				fiveLettersNumber === 'three' && (firstNumber = '3');
				fourLettersNumber === 'four' && (firstNumber = '4');
				fourLettersNumber === 'five' && (firstNumber = '5');
				threeLettersNumber === 'six' && (firstNumber = '6');
				fiveLettersNumber === 'seven' && (firstNumber = '7');
				fiveLettersNumber === 'eight' && (firstNumber = '8');
				fourLettersNumber === 'nine' && (firstNumber = '9');
			}
			threeLettersNumber === 'one' && (lastNumber = '1');
			threeLettersNumber === 'two' && (lastNumber = '2');
			fiveLettersNumber === 'three' && (lastNumber = '3');
			fourLettersNumber === 'four' && (lastNumber = '4');
			fourLettersNumber === 'five' && (lastNumber = '5');
			threeLettersNumber === 'six' && (lastNumber = '6');
			fiveLettersNumber === 'seven' && (lastNumber = '7');
			fiveLettersNumber === 'eight' && (lastNumber = '8');
			fourLettersNumber === 'nine' && (lastNumber = '9');
		}
		// END OF PART 2 ONLY
		///////////////////////////////////////////////////////////////////

		result += Number(firstNumber + lastNumber);
	});

	console.log(result);
});
