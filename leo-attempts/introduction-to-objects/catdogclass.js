class HousePet {
	
	legs = 4;
	fur = true;
	ears;
	catOrDog;
	
	constructor(earsObj, catOrDogObj){
		this.ears = earsObj;
		this.catOrDog = catOrDogObj;
	}
	

	breathe(){
		if(this.catOrDog == "cat"){
			return "Puff";
		}
		else if(this.catOrDog == "dog"){
			return "Pant";
		}
		else{
			return "Cat or Dog expected.";
		}
	}

	poop(){
		if(this.catOrDog == "cat"){
			return "litter box";
		}
		else if(this.catOrDog == "dog"){
			return "poops outside";
		}
		else{
			return "shit everywhere";
		}
	}

	log(){
		alert("Ears: " + this.ears + "\nBreathe: " + this.breathe()+ "\nPoop: " + this.poop());
	}


}

///////////////////////////////
let petType = prompt("Cat or Dog?");
while(petType!="quit" && petType!="Quit"){

	if(petType == "Cat"||petType =="cat"){
		cat = new HousePet("sharp", "cat");
		cat.log();
	}
	else if(petType == "Dog" || petType =="dog"){
		dog = new HousePet("floppy", "dog");
		dog.log();
	}
	else{
		alert("Cat or dog, smooth-brain?")
	}
	petType = prompt("Cat or Dog?");
}

alert("kys");




