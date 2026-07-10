const studentProfile = {
  name: "Pratik Uchitkar",
  age: 23,
  college: "GNIT",
  course: "Computer Science and Engineering",
  skills: ["JavaScript", "Python", "React", "Node.js"],
  city: "Nagpur"
};
console.log(`
Name   : ${studentProfile.name}
Age    : ${studentProfile.age} years old
College: ${studentProfile.college}
Course : ${studentProfile.course}
City   : ${studentProfile.city}
Skills : ${studentProfile.skills}
`);
studentProfile.city="Pune";
console.log(`
Name   : ${studentProfile.name}
Age    : ${studentProfile.age} years old
College: ${studentProfile.college}
Course : ${studentProfile.course}
City   : ${studentProfile.city}
Skills : ${studentProfile.skills}
`);
