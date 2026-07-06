//Find large number using a loop.
let nums = [12, 45, 7, 89, 33];
let largest = nums[0]; 
for (let i = 1; i < nums.length; i++) {    
    if (nums[i] > largest) {
        largest = nums[i];
    }
}
console.log(largest);

//Find Small number using a loop.
let num = [12, 45, 7, 89, 33];
let Small = num[0]; 
for (let i = 1; i < num.length; i++) {    
    if (num[i] < Small) {
        Small = num[i];
    }
}
console.log(Small);