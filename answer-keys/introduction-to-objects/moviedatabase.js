





class Movie {
	constructor(titleObj, ratingObj, hasWatchedObj){
		this.title = titleObj;
		this.rating = ratingObj;
		this.hasWatched = hasWatchedObj;
	}

}
let movieDB = [];

thePhantomMenace = new Movie("The Phantom Menace", 3.5, true);
attackOftheClones = new Movie("Attack of the Clones", 3.75, true);
revengeOfTheSith = new Movie("Revenge of the Sith", 4, true);
rogueOne = new Movie("Rogue One", 4, false);
cars2 = new Movie("Cars 2", 5, true);

movieDB.push(thePhantomMenace, attackOftheClones, revengeOfTheSith, rogueOne, cars2);


for(let i=0; i<movieDB.length; i++){
	if(movieDB[i].hasWatched == true){
		console.log("I've watched " + movieDB[i].title + " - "+movieDB[i].rating+" stars");
	}else{
		console.log("I haven't watched " + movieDB[i].title+" - "+movieDB[i].rating+" stars");
	}
}

console.log(movieDB); 
