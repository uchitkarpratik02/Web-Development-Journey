let nums = [10,20,30,40,50];
let sum = 0; 

for (let count = 0; count < nums.length; count=count+1) {
    sum = sum + nums[count]; 
}
console.log("Average:",sum/nums.length)

console.log("Sum:", sum);