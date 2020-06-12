/*2) 

16 people in a race. PLace finishes stored in array, where element 0 finished 1st and element 15 finished last. (Give them all "names".) 

a)
	Print all names in order. 	

b)
	Print everyone who finished in place that is a perfect square.

*Bonus: Try to make all solutions use a function*
*/



let racers = ["Alan", "Bob", "Cathy", "Donald","Edward", "Frank", "George", "Harry", "Isabelle","Jake", "Kathy", "Leo", "Matt", "Nathan", "Olivia", "Penelope", "Alan", "Bob", "Cathy", "Donald","Edward", "Frank", "George", "Harry", "Isabelle","Jake", "Kathy", "Leo", "Matt", "Nathan", "Olivia", "Penelope", "Alan", "Bob", "Cathy", "Donald","Edward", "Frank", "George", "Harry", "Isabelle","Jake", "Kathy", "Leo", "Matt", "Nathan", "Olivia", "Penelope"];

function printNames(racers){
	for(i=0; i<racers.length; i++){
		console.log(racers[i]);
	}
}

function printSquares (racers){
	for(i=0; i<racers.length; i++){
		if(Number.isInteger(Math.sqrt(i+1))){
			console.log(racers[i]);
		}
	}
}

