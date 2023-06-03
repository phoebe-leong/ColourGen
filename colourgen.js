const alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e']

const generate = () => {
	let hexadecimal = "#"

	for (let i = 0; i < 6; i++) {
		hexadecimal += alphabet[Math.floor(Math.random() * alphabet.length)]
	}
	return hexadecimal
}