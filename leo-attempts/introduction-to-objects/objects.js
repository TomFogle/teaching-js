// property is a class/object variable
//method is a class/object function




let leoHuman = {
	eyes: "brown",
	hands: "small",
	hair: "N/A"
}

console.log("Leo's hands: " + leoHuman.hands);

let benjiHuman ={
	eyes: "green",
	hands: "claws",
	hair: "jew"
}

console.log("Ben's hands: " + benjiHuman.hands);

////////////////////////////////////////////////

class Human { 	
	alive = true;
	constructor(eyesObj, handsObj, hairObj){
		this.eyes = eyesObj;
		this.hands = handsObj;
		this.hair = hairObj;
	}
	breathe(){
		if(this.alive == true){
			console.log("It's aliiiiiiive...");
		}else{
			console.log("o he ded");
		}
	} 
}

/////////////////////////////////////////////

Benji = new Human("blue", "claws", "jew");
Leo = new Human("brown", "smol", "N/A");
Tom = new Human("brown", "palms", "unkempt");
Alex = new Human("brown", "paws", "fro");
Jaelin = new Human("blue", "nails", "str8");

////////////////////////////////////////////
console.log("Is Benji alive?");
Benji.breathe();
console.log("Benji was born and had ambitions and dreams.");
console.log("He was sad about his height so he made up his own fighting style called Haganah.");
console.log("He kicked tall Brandon off his feet and was crushed by the weight of the torso.");

Benji.alive = false;
console.log("Is Benji alive?");
Benji.breathe();
console.log("Is Leo alive?");
Leo.breathe();
console.log("Is Tom alive?");
Tom.breathe();
Jaelin.alive = false
console.log("Is Jaelin alive?");
Jaelin.breathe();