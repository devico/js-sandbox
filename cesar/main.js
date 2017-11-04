let alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
let abetka = alphabet.split('');

function cryptor(text, key) {
	let textForCrypt = text.split('');
	let crIndexesLetters = getIndexesLetters(textForCrypt, abetka);
	let crNumbersAddKey = numbersCrypt(crIndexesLetters, key, abetka);
	let crCryptLetters = getLettersFromNumbers(crNumbersAddKey, abetka, key);
	let cryptWords = crCryptLetters.join('').toUpperCase();
	return cryptWords;
}

function decryptor (text, key) {
	let textForUncrypt = text.toLowerCase().split('');
	let dcIndexesLetters = getIndexesLetters(textForUncrypt, abetka);
	let dcNumbersSubsKey = indexesCrypt(dcIndexesLetters, key, abetka);
	let dcUncryptLetters = getLettersFromNumbers(dcNumbersSubsKey, abetka, key);
	let uncryptWords = dcUncryptLetters.join('');
	return uncryptWords;
}

function getIndexesLetters (text, abetka) {
	let {numbers} = text.reduce(
		function({letters, numbers}, current) {
			needLetters = [...numbers, letters.indexOf(current)];
			return ({letters: abetka, numbers: needLetters});
		}, {letters: abetka, numbers: []}
	);
	return numbers;
}

function indexesCrypt (arr, key, abetka) {
	let newArr = arr.map(
		function(current) {
			return ((current - key) < 0 ? (abetka.length - 1) + (current - key) : current - key);
		}
	);
	return newArr;
}

function numbersCrypt (arr, key, abetka) {
	let newArr = arr.map(
		function(current) {
			return ((current + key) > abetka.length ? key - (abetka.length - current) : current + key);
		}
	);
	return newArr;
}

function getLettersFromNumbers (arr, abetka, key) {
	let {letters} = arr.reduce(
		function({abetka, letters}, current) {
			needLetters = [...letters, abetka[current]];
			return ({abetka: abetka, letters: needLetters});
		}, {abetka: abetka, letters: []}
	);
	return letters;
}
