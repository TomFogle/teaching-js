let nums = [1,3,4,5,6,2,3,4,6,7,9,8,0,1,2];
let nums2 = [];

function reverse(nums){
	let i;
	for(i = nums.length; i>-1; i--){
		nums2.push(nums[i]);
	}
	nums2.shift();
	console.log("nums2: " + nums2);
}
