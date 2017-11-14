let alphabetLength = 32
let charToInt = (c) => c.charCodeAt(0)
let intToChar = (n) => String.fromCharCode(n)
let startingPoint = charToInt('a')

let encrypt = (offset, text) => {
	return text.split('').map(c => encryptChar(offset, c)).join('')
}

let encryptChar = (offset, c) => {
	return offset > 0 ? cycleChar(offset, c) : offset < 0 ? cycleChar(alphabetLength + offset) : c
}

let cycleChar = (offset, c) => {
	return intToChar((charToInt(c) - startingPoint + offset) % alphabetLength + startingPoint)
}

let decrypt = (offset, text) => {
	return encrypt(-offset, text)
}