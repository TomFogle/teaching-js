jobRoles = {
	Brandon : "Director",
	Leo : "squeak squawk parrot whisperer",
	Tom : "AHNG ANG AHNG I GUARD VENDING MACHINE",
	Veena : "Banana bread no work bread bread bread",
	"Alice Garfunkel" : "useless"
}


console.log(jobRoles.Brandon);
console.log(jobRoles.Tom);

/*
Try running the following commented out line:
	
	console.log(jobRoles."Alice Garfunkel");
	
You should get:

	SyntaxError: missing name after . operator
*/

// Now try this line
console.log(jobRoles["Alice Garfunkel"]);


// You could also do this with key names that don't necessarily need the ""
console.log(jobRoles["Leo"]);

/*
Think of the "Alice Garfunkel" key name as a vegan, the Leo key name as a meat eater,
the [""] as a vegan diet, and .name as meat.

While vegans can only eat plants,
meat eaters can eat both meat and plants.

While "Alice Garfunkel" can only be accessed using the [""] notation,
Leo can be accessed using both the . notation and the [""] notation.
*/



