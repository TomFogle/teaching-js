function isTheSame(nums) 
//nums is the same as "insert array here"
{ 
    let same = nums[0];
    let i;
/////////
	for(i=0; i<nums.length; i++){
    	if(nums[i]!=same){
        	return "NOT THE SAME!";
        }
    }
    return "SAME!";
////////
}

let arrLove = [5,5,5,5,5,5,5];
let arrBooty = [5,5,5,5,5,7,5,5,5];
isTheSame(arrLove);
isTheSame(arrBooty);