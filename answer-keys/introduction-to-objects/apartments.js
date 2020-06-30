/*
Make 2 classes:
First class is Apartment
Second class is Building

**Building has apartments, every apartment has its own array with outlets.** 

The apartment class should have an array of outlets, called "outlets".
The array should have 6 strings called "off".

The building class should have an array of apartment objects. Should be empty to start.


Make one building object. 


In the code underneath both classes, you will populate the Building object's apartments array by pushing new apartment objects. 

Make a function in the Building class that takes in 2 integers,
the first one being the index of the Apartments array, 
the second one being the index of the corresponding apartment's outlets array.
Edit that value to "on" and print the new array.
*/


class Integer {
	integer;
	constructor() {}

	setInt(num) {
		this.integer = num;
	}
	parseInt(someString) {
		let ascii, intToReturn = 0;
		let zero = "0".charCodeAt(0);
		for (let i = 0; i < someString.length; i++) {
			ascii = someString.charCodeAt(i);

			if (ascii - zero >= 0 && ascii - zero < 10) {
				intToReturn += ascii - zero;
				intToReturn *= 10;
			}
			else {
				throw "String cannot be parsed into an Integer."
				return;
			}
		}
		this.integer = intToReturn/10;
	}
}

myInt = new Integer();
myInt.setInt(12);
console.log("myInt: " + myInt.integer);
myInt.parseInt("256");
console.log("myInt: " + myInt.integer);
myInt.parseInt("267h4");
console.log("myInt: " + myInt.integer);


/*********/
/** ans **/
/*********/

// Make Apartments class first. In this case, it wouldn't break
// the code to do so the other way around, but
// 
class Apartment {
	outlets = [];
	constructor(numOutlets){
		for(let i=0; i<numOutlets; i++){
			this.outlets.push("off");
		}
	}
}

class Building {
	apartmentsArray = [];
	constructor(){}
}

myBuilding = new Building();

tempApt = new Apartment(3);	
myBuilding.apartmentsArray.push(tempApt);

tempApt = new Apartment(5);	
myBuilding.apartmentsArray.push(tempApt);

tempApt = new Apartment(1);	
myBuilding.apartmentsArray.push(tempApt);

tempApt = new Apartment(8);	
myBuilding.apartmentsArray.push(tempApt);

tempApt = new Apartment(6);	
myBuilding.apartmentsArray.push(tempApt);


for (let i=0; i < myBuilding.apartmentsArray.length; i++) {
    console.log(myBuilding.apartmentsArray[i].outlets.length);
}

//////////////////
function turnOn(someBuilding, aptNumber, outletNumber){
	someBuilding.apartmentsArray[aptNumber-1].outlets[outletNumber-1] = "on";
	console.log(someBuilding.apartmentsArray[aptNumber-1]);
}

function turnOff(someBuilding, aptNumber, outletNumber){
	someBuilding.apartmentsArray[aptNumber-1].outlets[outletNumber-1] = "off";
	console.log(someBuilding.apartmentsArray[aptNumber-1]);
}

function allOn(someBuilding, aptNumber){
	someBuilding.apartmentsArray[aptNumber-1].outlets[i] = "on";
}

/*
Make a menu that looks like:

	What would you like to do? Enter '1', '2', '3', or 'q'.
	(1) Turn on an outlet
	(2) Turn off an outlet
	(3) Turn all of an aparment's outlets on/off
	(q) quit


*/

// Make some buildings
let numBuildings = prompt("How many buildings?");
let buildings = [];

let numApartments, numOutlets, onOff;

for (let i = 0; i < numBuildings; i++) {
	buildings.push(new Building());

	numApartments = prompt("How many apartments for Building " + i + "?");
	for (let j = 0; j < numApartments; j++) {
		numOutlets = Number(prompt("How many outlets for Apartment " + j + "?"));
		buildings[i].apartmentsArray.push(new Apartment(numOutlets));
	}
}

let whichBuilding, whichApartment, whichOutlet;
let ans = prompt("What would you like to do? Enter '1', '2', '3', or 'q'.\n(1) Turn on an outlet\n(2) Turn off an outlet\n(3) Turn all of an aparment's outlets on/off\n(q) quit");

while (ans != "q") {
	if (ans == 1) {
		whichBuilding = Number(prompt("Which building? Enter a value between 0 and " + (buildings.length-1)));
		whichApartment = Number(prompt("Which apartment? Enter a value between 0 and " + (buildings[whichBuilding].apartmentsArray.length-1)));
		whichOutlet = Number(prompt("Which outlet? Enter a value between 0 and " + (buildings[whichBuilding].apartmentsArray[whichApartment].outlets.length-1)));
		
		buildings[whichBuilding].apartmentsArray[whichApartment].outlets[whichOutlet] = "on";
	}

	else if (ans == 2) {
		whichBuilding = Number(prompt("Which building? Enter a value between 0 and " + (buildings.length-1)));
		whichApartment = Number(prompt("Which apartment? Enter a value between 0 and " + (buildings[whichBuilding].apartmentsArray.length-1)));
		whichOutlet = Number(prompt("Which outlet? Enter a value between 0 and " + (buildings[whichBuilding].apartmentsArray[whichApartment].outlets.length-1)));
		
		buildings[whichBuilding].apartmentsArray[whichApartment].outlets[whichOutlet] = "off";
	}

	else if (ans == 3) {
		whichBuilding = Number(prompt("Which building? Enter a value between 0 and " + (buildings.length-1)));
		whichApartment = Number(prompt("Which apartment? Enter a value between 0 and " + (buildings[whichBuilding].apartmentsArray.length-1)));
		
		onOff = prompt("On or off? Enter 'on' or 'off'");
		for (let i = 0; i < buildings[whichBuilding].apartmentsArray[whichApartment].outlets.length; i++) {
			buildings[whichBuilding].apartmentsArray[whichApartment].outlets[i] = onOff;
		}
	}

	ans = prompt("What would you like to do? Enter '1', '2', '3', or 'q'.\n(1) Turn on an outlet\n(2) Turn off an outlet\n(3) Turn all of an aparment's outlets on/off\n(q) to quit");
}















