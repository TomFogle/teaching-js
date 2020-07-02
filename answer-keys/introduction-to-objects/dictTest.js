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