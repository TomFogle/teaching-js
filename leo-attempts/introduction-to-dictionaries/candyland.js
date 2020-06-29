let candylandSquares = ["grubby chubby", "choccy woccy"];

let whatToDo = {
	grubby chubby : "f6",
	choccy woccy : "b4"
}

for (let i = 0; i < candylandSquares.length; i++) {
	if (whatToDo[candylandSquares[i]].charAt(0) == 'f') {
		i = i + parseInt(whatToDo[candylandSquares[i]].charAt(1));
	}
}

