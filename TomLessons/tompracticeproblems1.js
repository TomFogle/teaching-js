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

let nums = [2,4,5,6,7,56,5,2,1,5,7,6,8,9];

function avg (nums) {
	let sums = 0
	for(let i = 0; i<nums.length; i++){
		sums = sums + nums[i];
	}
	console.log(sums/nums.length);
}