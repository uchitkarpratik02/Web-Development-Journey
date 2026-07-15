const employee1 = {
    name:"pratik",
    salary:"12 LPA",
    department: "Front-end",
    details() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }    
    };
const employee2 = {
    name:"uchitkar",
    salary:"6 LPA",
    department: "Back-end",
    details() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
    }




