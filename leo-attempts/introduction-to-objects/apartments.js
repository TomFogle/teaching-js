/*
Make 2 classes:
first class is Apartment
second class is Building

**Building has apartments, every apartment has its own array w outlets.** 

The apartment class should have an array of outlets, called "outlets". The array should have 6 strings called "off".

The building class should have an array of apartment objects. Should be empty to start.


Make one building object. 


In the code underneath both classes, you will populate the Building object's apartments array by pushing new apartment objects. 

Make a function in the Building class that takes in 2 integers, the first one being the index of the Apartments array, 
the second one being the index of the corresponding apartment's outlets array. Edit that value to "on" and print the new array.
*/

class Building {
	apartmentsArray = [];
	constructor(){}
}
/////////////////
class Apartment {
	outlets = [];
	constructor(numOutlets){
		for(let i=0; i<numOutlets; i++){
			this.outlets.push("off");
		}
	}
}
////////////////

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


