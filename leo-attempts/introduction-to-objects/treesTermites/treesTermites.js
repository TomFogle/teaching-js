/*
There are x number of termites per tree. 
Termites eat away at tree, tree replenishes itself using leaves. 
Leaves do photosynthesis.

Termites, trees, leaves. 

Trees have multiple termites and multiple leaves. Termites no array, leaf array. 

Some leaves can do more/less photosynthesis than others. 

In leaf class, there is a field/variable called size and a function called "photosynthesize."

Photosynthesize will return the square root of the leaf's size field. This is the 
mass in kg it can add to its tree.  

A tree has a field/variable called mass in kg. The initial mass is determined upon 
the creation of the tree object. 

Add functions that let you add/remove termites and add/remove leaves.

A termite will remove the same amount of mass as any other termite. 

The tree will now have a function dayPasses. No parameters. In this function,
your tree will gain the mass returned by every leaf's photosynthesize function
and lose .1 kg * the number of termites.

Make a shitload of leaves. 

To add a bunch of leaves quickly: 4 for loops in this style for .1 .2 .3 .4kg
for(let i = 0; i<40; i++){
	myTree.leaves.push(new Leaf(.3));
}
/////////////////////////////
Trees have termites and leaves. 
Trees and leaves have mass(kg).
Termites eat .1kg of tree mass every day. 
Leaves add mass to the tree every day via photosynthesis.
The amount of mass a leaf adds to its tree is equal to the square root of its own mass.
Every time a day function passes, trees gain/lose mass. 
I can add/remove as many leaves per tree as I want. Termites is a variable per tree. 
*/

//Leaf Class
	//Mass
	//Photosynthesis Function
class Leaf{
	constructor(leafMass){
		this.mass = leafMass;
	}
	photosynthesis(){
		let massToTree = Math.sqrt(this.mass);
		return massToTree;
	}
}

//Tree Class
	//Leaves array
	//Termites
	//Mass
class Tree{
	leaves = [];
	constructor(treeName, treeMass, numTermites){
		this.name = treeName;
		this.mass = treeMass;
		this.termites = numTermites;
	}
	ogMass(){
		console.log(this.name + "'s mass is " + this.mass + "kg.");
	}
	day(wordy){//All wordy does is make it so the year function wont print 365 day values if I make wordy false.
		let ogMass = this.mass;//ogMass will not change. Tom will explain. This works. 
		this.mass = this.mass - this.termites*.1;
		for(let i =0; i<this.leaves.length; i++){
			this.mass = this.mass+this.leaves[i].photosynthesis();
		}
		if (wordy){
			console.log("////////////////////////////////////////////////////////////////////")
			console.log("///////////////////////////////////////////////")
			console.log(this.name + "'s Mass was " + ogMass + "kg." + " Now it's " + this.mass + "kg." );
			console.log(this.name + " lost " + this.termites*.1+ "kg from termites.");
			console.log(this.name + " gained " + (this.mass+this.termites*.1-ogMass)+ "kg from photosynthesis.");
			console.log("//////////////////////////////////////////////////")
			console.log("//////////////////////////////////////////////////////////////////////")
		}
	}
	year(){
		let ogMass = this.mass;
		for(let i=0; i<365; i++){
			this.day(false);
		}
		console.log("////////////////////////////////////////////////////////////////////")
		console.log("////////////////////////////////////////////////////////////////////")
		console.log(this.name + "'s Mass was " + ogMass + "kg." + " Now it's " + this.mass + "kg." );
		console.log("This year, " + this.name +"("+name+")" + " gained " + (this.mass-ogMass) + "kg.");
		console.log("This year, " + this.name + " lost " + (this.termites*.1)*365 + "kg from termites.");
		console.log("This year, " + this.name + " gained " + (this.mass+((this.termites*.1)*365)-ogMass)+ "kg from photosynthesis.");
		console.log("/////////////////////////////////////////////////////////////////////")
		console.log("//////////////////////////////////////////////////////////////////////")
	}
}

class Forest{
	trees = [];
	constructor(){}
	day(wordy){
		for(let i=0; i<this.trees.length; i++){
			this.trees[i].day(wordy);
		}
	}
	year(){
		for(let i=0; i<this.trees.length; i++){
			this.trees[i].year();
		}
	}
}

//Day Function newMass = oldMass + photosynthesis - termites
// newMass + termites - oldMass
	//Trees gain/lose mass
//Tree loses .1 x termites mass, gains square root of leaf mass per leaf.



/////////////////////
tree1 = new Tree("Brutus", 100, 300);//This tree contains leaves = [];  
tree2 = new Tree("Domingo", 250, 500);//This tree contains leaves = [];  
tree3 = new Tree("Cassiopeia", 154, 350);//This tree contains leaves = [];  
tree4 = new Tree("Luna", 100, 300);//This tree contains leaves = [];  
tree5 = new Tree("Archimedes", 310, 650);//This tree contains leaves = [];  
tree6 = new Tree("Layla", 200, 400);//This tree contains leaves = [];  
tree7 = new Tree("Mark", 175, 375);//This tree contains leaves = [];  
tree8 = new Tree("Jeff", 115, 330);//This tree contains leaves = [];  
tree9 = new Tree("Geoff", 100, 300);//This tree contains leaves = [];  
tree10 = new Tree("Sasha", 150, 400);//This tree contains leaves = [];  

for(let i = 0; i<50; i++){
	tree1.leaves.push(new Leaf(.1));
	tree2.leaves.push(new Leaf(.1));
	tree3.leaves.push(new Leaf(.1));
	tree4.leaves.push(new Leaf(.1));
	tree5.leaves.push(new Leaf(.1));
	tree6.leaves.push(new Leaf(.1));
	tree7.leaves.push(new Leaf(.1));
	tree8.leaves.push(new Leaf(.1));
	tree9.leaves.push(new Leaf(.1));
	tree10.leaves.push(new Leaf(.1));
}
for(let i = 0; i<50; i++){
	tree1.leaves.push(new Leaf(.2));
	tree2.leaves.push(new Leaf(.2));
	tree3.leaves.push(new Leaf(.2));
	tree4.leaves.push(new Leaf(.2));
	tree5.leaves.push(new Leaf(.2));
	tree6.leaves.push(new Leaf(.2));
	tree7.leaves.push(new Leaf(.2));
	tree8.leaves.push(new Leaf(.2));
	tree9.leaves.push(new Leaf(.2));
	tree10.leaves.push(new Leaf(.2));
}
for(let i = 0; i<50; i++){
	tree1.leaves.push(new Leaf(.3));
	tree2.leaves.push(new Leaf(.3));
	tree3.leaves.push(new Leaf(.3));
	tree4.leaves.push(new Leaf(.3));
	tree5.leaves.push(new Leaf(.3));
	tree6.leaves.push(new Leaf(.3));
	tree7.leaves.push(new Leaf(.3));
	tree8.leaves.push(new Leaf(.3));
	tree9.leaves.push(new Leaf(.3));
	tree10.leaves.push(new Leaf(.3));
}
for(let i = 0; i<50; i++){
	tree1.leaves.push(new Leaf(.4));
	tree2.leaves.push(new Leaf(.4));
	tree3.leaves.push(new Leaf(.4));
	tree4.leaves.push(new Leaf(.4));
	tree5.leaves.push(new Leaf(.4));
	tree6.leaves.push(new Leaf(.4));
	tree7.leaves.push(new Leaf(.4));
	tree8.leaves.push(new Leaf(.4));
	tree9.leaves.push(new Leaf(.4));
	tree10.leaves.push(new Leaf(.4));
}

leoTomForest = new Forest();
for(let i =0; i<10; i++){
	leoTomForest.trees.push(tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10);
}



// day(){
// 		let i;
// 		let someTree = new Tree(this.mass, this.termites);
// 		totalLeafMass = someTree.leaves[i].mass;
// 		for(i=0; i<leaves.length; i++){
// 			totalLeafMass += leaves[i].mass;
// 		}
// 		this.mass = this.mass + (Math.sqrt(totalLeafMass))-(this.termites*.1); 
// 		console.log(this.mass);
// 	}
// let sothis.mass = (this.mass - (this.termites*.1) + (leaves.photosynthesis());
// 		console.log(this.mass);meTree = new Tree(this.mass, this.termites);


/*
1) Make a small ecosystem with one tree. 


2)Make the tree's mass fluctuate by adding/removing leaves and termites. 
3) Make a "year" function that does the day function 365 times.

































