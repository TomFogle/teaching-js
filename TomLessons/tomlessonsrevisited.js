/*
1) Make a list of 10+ numbers.

a)
	Calculate the average.
b)  
	Print the index of every odd number.
	Index: {index}, value: {value}
	Index: 5, Value: 7

************************

2) 

16 people in a race. PLace finishes stored in array, where element 0 finished 1st and element 15 finished last. (Give them all "names".) 

a)
	Print all names in order. 	

b)
	Print everyone who finished in place that is a perfect square.

*Bonus: Try to make all solutions use a function*


**********************************/
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


let apartments = [
	new Apartment(3),
	new Apartment(4),
	new Apartment(1)
];

/*
userApartments = new Apartments(prompt("How many apartments?"));


let onOff = prompt("How many buildings?");
///////////
onOff = prompt("Do you want the power on or off?");
while(onOff !== "quit" || onOff !== "Quit"){
	if(onOff == "on" || onOff == "On"){
		onOff = prompt("Which number apartment?")
		prompt("The power is on in Apartment " + outlets[onOff-1]);
		onOff = prompt("Do you want the power on or off?")
}
alert("See ya!");


		}else if(onOff == "off" || onOff=="Off"){

		}
		else{

		}
	Alert("See ya!");

// /////////////////////////
// apt1 = new Apartment("off");
// apt2 = new Apartment("off");
// apt3 = new Apartment("off");
// apt4 = new Apartment("off");
// apt5 = new Apartment("off");
// apt6 = new Apartment("off");
// /////////////////////////

// Building.apartmentsArray.push(apt1, apt2, apt3, apt4, apt5, apt6);


















