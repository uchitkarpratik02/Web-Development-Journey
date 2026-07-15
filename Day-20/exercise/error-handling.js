let age = parseInt(prompt("Enter your age:"));

try {
  if (age < 0 || isNaN(age)) {
    throw new Error("Invalid age"); 
  }
  
  console.log(`Your age is: ${age}`);

} catch (error) {
  console.log("Invalid age entered. Please enter a positive number.");
}
