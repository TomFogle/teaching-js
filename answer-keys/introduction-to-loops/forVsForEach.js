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

snacks_list.forEach( (snack, index, snacks_list) => {
	if (snack == "fudge") {
		console.log(snack + " has now melted.");
		snacks_list[index] = "chocolate soup";
		console.log("It is now " + snacks_list[index]);
	}
});
*/



