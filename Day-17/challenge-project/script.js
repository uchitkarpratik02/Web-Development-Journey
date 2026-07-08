let names = ["Pratik", "Rahul", "Amit"]; 
let marks = [95, 81, 67]; 
let cities = ["Nagpur", "Pune", "Mumbai"]; 

// Added 'let' to i to prevent global scope pollution
for (let i = 0; i < names.length; i++) { 
    console.log("------------------------------------------------------------------------------------"); 
    console.log(`Student Name: ${names[i]}`); 
    console.log(`Marks: ${marks[i]}`); 
    console.log(`City: ${cities[i]}`); 
    
   
    let grade; 
    if (marks[i] >= 90) {
        grade = "O (Outstanding)";
    } else if (marks[i] >= 80) {
        grade = "A+";
    } else {
        grade = "A";
    }
    
    console.log(`Grade: ${grade}`); 
    console.log("------------------------------------------------------------------------------------"); 
}
//Find:Highest Marks
let largest = marks[0]; 
for (let i = 1; i < marks.length; i++) {    
    if (marks[i] > largest) {
        largest = marks[i];
    }
}
console.log(`largest Marks: ${largest}`);


console.log(`smallest Marks: ${smallest}`);

//Find: Average
let sum = marks[0]+marks[1]+marks[2];
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
