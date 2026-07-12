let nums = [10, 20, 30, 40, 50];
const findLargest = arr => Math.max(...arr);
const findSmallest = arr => Math.min(...arr);
const findSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
const findAverage = arr => arr.length === 0 ? 0 : findSum(arr) / arr.length;

console.log("Largest:", findLargest(nums));   // 50
console.log("Smallest:", findSmallest(nums)); // 10
console.log("Sum:", findSum(nums));           // 150
console.log("Average:", findAverage(nums));   // 30
