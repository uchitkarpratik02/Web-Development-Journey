let studentCollection = [
  { id: 1, name: "Alice", marks: 85 },
  { id: 2, name: "Bob", marks: 42 },
  { id: 3, name: "Charlie", marks: 95 },
  { id: 4, name: "Diana", marks: 58 }
];

const showStudentList = () => {
  console.log("Student List:");
  const formattedStudents = studentCollection.map(student => `${student.name} (ID: ${student.id}) - Marks: ${student.marks}`);
  formattedStudents.forEach(str => console.log(str));
};

const calculateAverage = () => {
  if (studentCollection.length === 0) return 0;
  const totalMarks = studentCollection.reduce((sum, student) => sum + student.marks, 0);
  const average = totalMarks / studentCollection.length;
  console.log(`Average Marks: ${average.toFixed(2)}`);
  return average;
};

const getHighestMarks = () => {
  if (studentCollection.length === 0) return 0;
  const highest = studentCollection.reduce((max, student) => student.marks > max ? student.marks : max, studentCollection[0].marks);
  console.log(`Highest Marks: ${highest}`);
  return highest;
};

const getLowestMarks = () => {
  if (studentCollection.length === 0) return 0;
  const lowest = studentCollection.reduce((min, student) => student.marks < min ? student.marks : min, studentCollection[0].marks);
  console.log(`Lowest Marks: ${lowest}`);
  return lowest;
};

const checkPassFailStatus = (passingMark = 50) => {
  console.log(`\n--- Pass/Fail Analysis (Passing Mark: ${passingMark}) ---`);
  
  const studentStatus = studentCollection.map(student => {
    const passed = student.marks >= passingMark;
    return `${student.name}: ${passed ? "PASSED" : "FAILED"}`;
  });
  studentStatus.forEach(status => console.log(status));

  const allPassed = studentCollection.every(student => student.marks >= passingMark);
  console.log(`Did every student pass? ${allPassed ? "Yes" : "No"}`);

  const anyFailed = studentCollection.some(student => student.marks < passingMark);
  console.log(`Did any student fail? ${anyFailed ? "Yes" : "No"}`);
};

const getGradeDistribution = () => {
  console.log("\n--- Grade Distribution ---");
  const distribution = studentCollection.reduce((acc, student) => {
    let grade;
    if (student.marks >= 90) grade = "A";
    else if (student.marks >= 75) grade = "B";
    else if (student.marks >= 50) grade = "C";
    else grade = "F";

    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
  }, {});

  console.log(distribution);
  return distribution;
};

showStudentList();
calculateAverage();
getHighestMarks();
getLowestMarks();
checkPassFailStatus(50);
getGradeDistribution();
