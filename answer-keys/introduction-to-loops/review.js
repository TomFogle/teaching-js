/* for, foreach, or while?
1) Array of runners – print out all names that start with letters from A-J.


2) Counting to 100, print out all multiples of 6.


3) Given a number, what is the biggest power of 2 that is less than the given number.


4) Bonus. Counting 100, print out all primes.
*/

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



let snacks_list = ["fudge", "granola", "crackers", "chips", "peaches"];

let counter = 0;

for (let i = 0; i < snacks_list.length; i++) {
	if (counter > 20) break;

	console.log(snacks_list[i]);

	if (snacks_list[i].charAt(0) == 'c') {
		i--;
	}

	counter += 1;
}


args kwargs






/*

function printSnack(snack, index) {
	if (snack == "fudge") {
		console.log(snack);
	}
}


console.log("using defined function.\k")
snacks_list.forEach(printSnack);


console.log("\nUsing anonymous function.\\n")
snacks_list.forEach(snack => console.log(snack));


snacks_list.forEach(printSnack);

console.log("\nspathe\n")

snacks_list.forEach( (snack, index) => {
	if (snack == "fudge") {
		console.log(snack);
	}
});
*/
