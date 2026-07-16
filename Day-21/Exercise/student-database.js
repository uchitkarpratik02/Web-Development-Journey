const students = [
    { name: "Alex", age: 20, grade: 85, passed: true },
    { name: "Blake", age: 22, grade: 92, passed: true },
    { name: "Charlie", age: 19, grade: 58, passed: false },
    { name: "Dana", age: 21, grade: 74, passed: true },
    { name: "Evan", age: 23, grade: 45, passed: false }
];

const studentNames = students.map(s => s.name);

const passingStudents = students.filter(s => s.passed);

const allAdults = students.every(s => s.age >= 18);

const hasExcellentStudent = students.some(s => s.grade > 90);

const averageGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
