function isTheSame(numbers){
//nums is the same as "insert array here"
    let same = numbers[0];
    let i;
/////////

	forEach(num : numbers){ //num is an element of numbers (iterable); 
    	if(num!=same){
        	return "NOT THE SAME!";
        }
    }
    return "SAME!";
////////
}

let arrBloop = [2,5,3,1,8,4];
let arrBeans = [5,5,5,5,5,5,5];
let arrBooty = [5,5,5,5,5,7,5,5,5];
isTheSame(arrBeans);
isTheSame(arrBooty);


/*

function printSnack(snack, index) {
	if (snack == "fudge") {
		console.log(snack);
	}
}


console.log("using defined function.\k")
snacks_list.forEach(printSnack);


console.log("\nUsing anonymous function.\\n")
snacks_list.forEach(snack => console.log(snack));


snacks_list.forEach(printSnack);

console.log("\nspathe\n")

snacks_list.forEach( (snack, index) => {
	if (snack == "fudge") {
		console.log(snack);
	}
});
*/
