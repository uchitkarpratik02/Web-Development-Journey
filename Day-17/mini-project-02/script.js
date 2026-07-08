let marks = [75,82,91,67,55,88];
//Find:Highest Marks
let largest = marks[0]; 
for (let i = 1; i < marks.length; i++) {    
    if (marks[i] > largest) {
        largest = marks[i];
    }
}
console.log(`largest Marks: ${largest}`);

//Find: Lowest Marks
let smallest = marks[0]; 
for (let i = 1; i < marks.length; i++) {    
    if (marks[i] < smallest) {
        smallest = marks[i];
    }
}
console.log(`smallest Marks: ${smallest}`);

//Find: Average
let sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
let average = sum/marks.length;
console.log (`Average: ${average}`)

//Find: Passed Students (≥45)
let Passed = 0; 
for (let i = 0; i < marks.length; i++) {
    if (marks[i]>45) {
        Passed = Passed + 1;
    }
}
console.log(`No of Student Passed: ${Passed}`);

//Find: Failed Students
let Failed = 0; 
for (let i = 0; i < marks.length; i++) {
    if (marks[i]<45) {
        Failed = Failed + 1;
    }
}
console.log(`No of Student Failed: ${Failed}`);