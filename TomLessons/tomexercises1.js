let racers = ["Alan", "Bob", "Cathy", "Donald","Edward", "Frank", "George", "Harry", "Isabelle","Jake", "Kathy", "Leo", "Matt", "Nathan", "Olivia", "Penelope", "Alan", "Bob", "Cathy", "Donald","Edward", "Frank", "George", "Harry", "Isabelle","Jake", "Kathy", "Leo", "Matt", "Nathan", "Olivia", "Penelope", "Alan", "Bob", "Cathy", "Donald","Edward", "Frank", "George", "Harry", "Isabelle","Jake", "Kathy", "Leo", "Matt", "Nathan", "Olivia", "Penelope"];



function printInOrder (racers){
	for(let i=0; i<racers.length; i++){	
		console.log(racers[i]);
	}
}

function findPerfectSquares (racers){
	for(let i=0; i<racers.length; i++){
		if(Number.isInteger(Math.sqrt(i+1))){
			console.log(racers[i]);	
		}
	}
}


