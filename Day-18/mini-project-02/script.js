const employees = [
  {
    name: "Rahul Sharma",
    department: "Engineering",
    salary: 85000,
    city: "Mumbai"
  },
  {
    name: "Priya Patel",
    department: "HR",
    salary: 60000,
    city: "Bangalore"
  },
  {
    name: "Amit Verma",
    department: "Marketing",
    salary: 55000,
    city: "Delhi"
  }
];
let opt = parseInt(prompt("Choose an Option:\n1. Show Employees\n2. Add Employee\n3. Update Salary\n4. Delete Employee"), 10);

switch (opt) {
    case 1:
        console.log(employees);
        break;

    case 2:
        employees.push({
            name: prompt("Enetr Employee Name"),
            department: prompt("Enetr Employee department"),
            salary: prompt("Enetr Employee salary"),
            city: prompt("Enetr Employee city"),
        })        
        break;

    case 3:
        Emp = prompt("Enter Employee Name"),
        IndEmp =employees.indexOf("Emp"),
        console.log(IndEmp);
        break;
    case 4:
        console.log("Delete Employee");
        break;

    default:
        console.log("Invalid Option");
}