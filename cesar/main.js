let alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя";

function cryptor(text, key) {
	// алфавит преобразовать в массив
	let abetka = alphabet.split('');
	// текст преобразовать в массив
	let inText = text.split('');
	// сделать цикл и найти номер буквы текста в массиве алфавит и создать массив номеров букв
	arrNumbersLetters = getNumbersLetters(inText, abetka);
	// создать новый массив используя элементы массив плюс ключ
	arrNumbersWithKey = numbersCrypt(arrNumbersLetters, key);
	// получить массив букв используя номера из массива номеров
	arrCryptLetters = getLettersFromNumbers(arrNumbersWithKey, abetka, key);
	// преобразовтаь массив в текст и преобразовать текст в верхний регистр 
	cryptWords = arrCryptLetters.join('').toUpperCase();
	// вернуть текст
	return cryptWords;
}

function getNumbersLetters (text, abetka) {
	let {numbers} = text.reduce(
		function({letters, numbers}, current) {
			needLetters = [...numbers, letters.indexOf(current)];
			return ({letters: abetka, numbers: needLetters});
		}, {letters: abetka, numbers: []}
	);
	return numbers;
}

function numbersCrypt (arr, key) {
	let newArr = arr.map(
		function(current) {
			return current + key;
		}
	);
	return newArr;
}

function getLettersFromNumbers (arr, abetka, key) {
	let {letters} = arr.reduce(
		function({abetka, letters}, current) {
			let place;
			if ((current + key) > abetka.length) {
				 place = key - (abetka.length - current) - 1;
			} else {
				place = current;
			}
			needLetters = [...letters, abetka[place]];
			return ({abetka: abetka, letters: needLetters});
		}, {abetka: abetka, letters: []}
	);
	return letters;
}






