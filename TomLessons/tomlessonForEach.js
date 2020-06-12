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

let arrpenis = [2,5,3,1,8,4];
let arrfag = [5,5,5,5,5,5,5];
let arrbutthole = [5,5,5,5,5,7,5,5,5];
isTheSame(arrfag);
isTheSame(arrbutthole);

