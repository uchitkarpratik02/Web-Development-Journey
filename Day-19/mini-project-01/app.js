let name = prompt("Enter Name"); 
let marks = parseInt(prompt("Enter Marks")); 

function getGrade(num) { 
  if (num >= 90) { 
    return "A+"; 
  } else if (num >= 80) { 
    return "A"; 
  } else {
    return "B or below"; 
  }
} 
function getStatus(num) { 
  if (num >= 45) { 
    return "Pass"; 
  } else {
    return "Next Time"; 
  }
}


console.log(`Name: ${name} | Marks: ${marks} | Grade: ${getGrade(marks)} | Status: ${getStatus(marks)}`);


