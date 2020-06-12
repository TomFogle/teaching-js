/*
1) Make a list of 10+ numbers.

a)
	Calculate the average.
b)  
	Print the index of every odd number.
	Index: {index}, value: {value}
	Index: 5, Value: 7

************************
*/

let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10,21,21,24,12,13,12,14];
// ****************************
function average(list){
	let sum=0;
	for(let i=0; i<list.length; i++){
		sum = sum + list[i]; // sum += list[i]
	}
	return (sum/(list.length));
}
//*******************************
function isOdd(num){
	if(num %2 === 1){
		return true;
	}
	else {
		return false;
	}
}
//*************************
function indexOdd (list){
	for(let i=0; i<list.length; i++){
		if(list[i]%2 === 1){
			console.log("Index: "+ i + " " + "Value: " + list[i]);
		}
	}
}

//Second Version using function:

//Array

let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10,21,21,24,12,13,12,14];

//Function to determine if number is odd

function isOdd(num){
	if(num %2 === 1){
		return true;
	}
	else {
		return false;
	}
}

//Function to give all odd numbers plus their index value

function indexOdd (list){
	for(let i=0; i<list.length; i++){
		if(isOdd(list[i]) === true){
			console.log("Index: "+ i + " " + "Value: " + list[i]);
		}
	}
}









