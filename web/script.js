window.onload = () => {
	var instructions = document.querySelector("h1")

	document.addEventListener("click", () => {
		if (instructions != undefined) {
			instructions.remove()
		}
		document.body.style.backgroundColor = generate()
	})

	document.addEventListener("keyup", (key) => {
		if (key.code == "Space") {
			if (instructions != undefined) {
				instructions.remove()
			}
			document.body.style.backgroundColor = generate()
		}
	})
}