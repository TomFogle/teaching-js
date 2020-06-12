//////////Without inheiritance:
class Monkey{
	lenTail;
	mass;
	climb;
	constructor(tailLength, mass, climbSpeed){
		this.lenTail = tailLength;
		this.mass = mass;
		this.climb = climbSpeed;
	}
	breathe(){
		return "breathe breathe";	
	}
	poop(){
		return "schplüüp";
	}
	throwPoop(){
		return "Money throws poop. It's super-effective!";
	}
}


class Lizard{
	constructor(tailLength, mass, crawlSpeed){
		this.lenTail = tailLength;
		this.mass = mass;
		this.crawl = crawlSpeed;
	}
	breathe(){
		return "breathe breathe";	
	}
	poop(){
		return "schplüüp";
	}
	chill(){
		return "I'm chillin";
	}
}

class Fish{
	constructor(tailLength, mass, swimSpeed){
		this.lenTail = tailLength;
		this.mass = mass;
		this.swim = swimSpeed;
	}
	breathe(){
		return "breathe breathe";	
	}
	poop(){
		return "schplüüp";
	}
	isStupid(){
		return "AAAA im drowning o wait i can breathe underwater";
	}
}

class Human{
	constructor(tailLength, mass, runSpeed){
		this.lenTail = tailLength;
		this.mass = mass;
		this.run = runSpeed;
	}
	breathe(){
		return "breathe breathe";	
	}
	poop(){
		return "schplüüp";
	}
	tickle(){
		return "hehehehehe";
	}
}

monkey1 = new Monkey(3,23,33);
lizard1 = new Lizard(2, 5, 25);
fish1 = new Fish(1, 3, 500);
human1 = new Human(0, 180, 15);


///////////////With inheiritance:
class Animal{
	constructor(tailLength, mass){
		this.lenTail = tailLength;
		this.mass = mass;
	}
	breathe(){
		return "breathe breathe";	
	}
	poop(){
		return "schplüüp";
	}
}

class Monkey extends Animal{
}

class Lizard extends Animal{//Same functions, different constructor. 
	constructor(lizardTailLength, lizardMass, crawlSpeed){
		super(lizardTailLength, lizardMass);//Only for constructor functions. Use .this to call them. Super is basically Animal.constructor
		this.crawl = crawlSpeed;
		console.log("Lizard Tail: " + this.lenTail);//Call the value from Animal/parent class
	}
}

class Fish extends Animal{
	constructor(fishTailLength, fishMass, swimSpeed){
		super(fishTailLength, fishMass);
		this.swim = swimSpeed;
		console.log("Fish Tail: " + this.lenTail);
	}
}


class Human extends Animal{
	constructor(humanTailLength, humanMass, runSpeed){
		super(humanTailLength, humanMass);
		this.run = runSpeed;
		console.log("Human Tail Length: " + this.lenTail);
	}
}


class Tom extends Human{
	constructor(tomTailLength, tomMass, tomSpeed, canTeach){
		super(tomTailLength, tomMass, tomSpeed);
		this.goodTeacher = canTeach;
		console.log("Tom Tail Length: " + this.lenTail);
	}
}

class tomSpawn extends Tom{
	constructor(spawnTailLength, spawnMass, spawnSpeed, canTeach, acidSpitDistance){
		super(spawnTailLength, spawnMass, spawnSpeed, canTeach);
		this.acidSpit = acidSpitDistance;
		console.log("Spawn Tail Length: " + this.lenTail);
		console.log("Its power cannot be contained.");
	}
}



monkey1 = new Monkey(5, 25);
lizard1 = new Lizard(3, 10, 30);
fish1 = new Fish(1, 3, 500);
human1 = new Human(0, 180, 15);
tom1 = new Tom(0, 160, 20, true);
tomSpawn1 = new tomSpawn(0, 10, 25, true, 25);

















































