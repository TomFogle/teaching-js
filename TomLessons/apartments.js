/*Building has apartments, every apartment has its own array w outlets.** 

The apartment class should have an array of outlets, called "outlets". The array should have 6 strings called "off".

The building class should have an array of apartment objects. Should be empty to start.


Make one building object. 


In the code underneath both classes, you will populate the Building object's apartments array by pushing new apartment objects. 

Make a function in the Building class that takes in 2 integers, the first one being the index of the Apartments array, 
the second one being the index of the corresponding apartment's outlets array. Edit that value to "on" and print the new array. 

*/







class Apartment {
	outlets= [];
	constructor(numOutlets){
		for(let i=0; i<numOutlets; i++){
			this.outlets.push("off");
		}
	}
}

class Building {
	apartments = [];
	constructor(){}
}


bleecker160 = new Building(); //Contains apartments = [{leoApartment}];
leonard630 = new Building(); //Contains apartments = [{leoApartment}];
stnick440 = new Building(); //Contains apartments = [{leoApartment}];

leoApartment = new Apartment(8);//Contains outlets = ["off", "off", "off", "off", "off", "off", "off", "off"];
tomApartment = new Apartment(5);//Contains outlets = ["off", "off", "off", "off", "off"];
alexApartment = new Apartment(10);//Contains outlets = ["off", "off", "off", "off", "off", "off", "off", "off","off","off"];
brandonApartment = new Apartment(4);//Contains outlets = ["off", "off", "off", "off"];
benjiApartment = new Apartment(6);//Contains outlets = ["off", "off", "off", "off", "off", "off"];
jaelinApartment = new Apartment(3);//Contains outlets = ["off", "off", "off"];

bleecker160.apartments.push(leoApartment, brandonApartment);
leonard630.apartments.push(tomApartment, jaelinApartment);
stnick440.apartments.push(alexApartment, benjiApartment);

function turnOn(buildingName, aptNum, outletNumber){
	buildingName.apartments[aptNum-1].outlets[outletNumber-1] = "on";
	console.log(buildingName.apartments[aptNum-1].outlets);
}
	
function turnOff(buildingName, aptNum, outletNumber){
	buildingName.apartments[aptNum-1].outlets[outletNumber-1] = "off";
	console.log(buildingName.apartments[aptNum-1].outlets);
}

function allOn(buildingName, aptNum){
	for(i=0; i<buildingName.apartments[aptNum-1].outlets.length; i++){
		buildingName.apartments[aptNum-1].outlets[i] = "on";
	}
	console.log(buildingName.apartments[aptNum-1].outlets);
}

function allOff(buildingName, aptNum){
	for(i=0; i<buildingName.apartments[aptNum-1].outlets.length; i++){
		buildingName.apartments[aptNum-1].outlets[i] = "off";
	}
	console.log(buildingName.apartments[aptNum-1].outlets);
}




