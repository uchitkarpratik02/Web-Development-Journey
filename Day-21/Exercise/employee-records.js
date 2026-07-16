const employees = [
    {name:"Rahul",salary:25000},
    {name:"Aman",salary:40000},
    {name:"Neha",salary:55000}
];

//Employees earning >30000
let above_30000 = employees.filter(el => el.salary > 30000);
console.log(above_30000);
//Increase salary by 10%
let hike10 = employees.map(el => {
  return {
    ...el,
    salary: el.salary * 1.1
  };
});
console.log(hike10);

//Total salary
let total = employees.reduce((acc, el) => {
  return acc + el.salary;
}, 0);
console.log(total);
