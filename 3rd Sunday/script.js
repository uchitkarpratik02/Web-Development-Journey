let fname = prompt("Enter Student Name:");
let age = Number(prompt("Enter Age:"));
let city = prompt("Enter City:");
let course = prompt("Enter Course:");
let marks = Number(prompt("Enter Marks:"));


if (!fname || fname.trim() === "") { 
    console.log("Invalid Name");
} else if (age < 0 || isNaN(age)) { 
    console.log("Invalid Age");
} else if (marks > 100 || marks < 0 || isNaN(marks)) { 
    console.log("Invalid Marks");
} 
else {

    fname = fname.toUpperCase(); 
    city = city ? city.toLowerCase() : "";
    let cities = ["mumbai", "delhi", "nagpur", "pune", "hyderabad"];
    if (cities.includes(city)) {
        console.log("City is Available.");
    } else {
        console.log("City is Not Available.");
    }

    let grade;
    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else {
        grade = "Better Luck Next Time";
    }
    
    let skills = ["html","css","java"];
choice_option = Number(prompt(
`Skills Menu

1. Add Skill
2. Remove Skill
3. Search Skill
4. Show Skills

Enter Choice:`
        ));
        switch (choice_option) {
            case 1:
                let addSkill = prompt("Enter Skill to Add:");
                skills.push(addSkill);
                console.log("Skill Added Successfully.");
                break;

            case 2:
                let removeSkill = prompt("Enter Skill to Remove:");
                let index = skills.indexOf(removeSkill);
                break;

            case 3:
                let searchSkill = prompt("Enter Skill to Search:");

                if (skills.includes(searchSkill)) {
                    console.log("Skill Found.");
                } else {
                    console.log("Skill Not Found.");
                }
                break;

            case 4: 
    alert(`Current Skills: ${skills}`); 
    break; 
    
  default: 
    console.log("Invalid Choice"); 
}
console.log(`Name : ${fname} ,Age : ${age} ,City : ${city} ,Course : ${course} ,Marks : ${marks} ,Grade : ${grade},Skills : ${skills}`);
}
