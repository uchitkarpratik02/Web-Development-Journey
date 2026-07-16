const student = {
    name: "Pratik",
    age: 22
};

const updatedStudent = {
    ...student,
    city: "Nagpur",
    email:"12345@gmmail.com",
    course: "B.Tech",
    skills:["Html","Css","JavaScript","Mongo"] 
};
console.log(updatedStudent);