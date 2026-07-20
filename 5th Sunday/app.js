const initialStudents = [
    { id: 1, name: "Rahul Sharma", course: "Web Development", age: 21, marks: 85, photo: "https://pravatar.cc" },
    { id: 2, name: "Anjali Gupta", course: "Python", age: 22, marks: 32, photo: "https://pravatar.cc" },
    { id: 3, name: "Amit Patel", course: "Java", age: 20, marks: 78, photo: "https://pravatar.cc" },
    { id: 4, name: "Priya Singh", course: "Web Development", age: 23, marks: 45, photo: "https://pravatar.cc" },
    { id: 5, name: "Vikram Sait", course: "Java", age: 22, marks: 92, photo: "https://pravatar.cc" },
    { id: 6, name: "Sneha Reddy", course: "Python", age: 21, marks: 28, photo: "https://pravatar.cc" },
    { id: 7, name: "Rohan Das", course: "Web Development", age: 20, marks: 64, photo: "https://pravatar.cc" }
];

const students = [...initialStudents].map(student => {
    const { marks } = student;
    return {
        ...student,
        result: marks >= 40 ? "Passed" : "Failed"
    };
});

const totalStudents = students.length;
const passedStudents = students.filter(s => s.result === "Passed").length;
const failedStudentsList = students.filter(s => s.result === "Failed");
const totalFailedCount = failedStudentsList.length;

const avgMarks = (students.reduce((acc, curr) => acc + curr.marks, 0) / totalStudents).toFixed(2);

const classTopper = students.reduce((max, student) => student.marks > max.marks ? student : max, students[0]);

const courseStats = students.reduce((acc, { course }) => {
    acc[course] = (acc[course] || 0) + 1;
    return acc;
}, {});

const app = document.getElementById("app");

const header = document.createElement("div");
header.classList.add("header");
const headerTitle = document.createElement("h1");
headerTitle.innerText = "📚 Student Management Dashboard";
header.appendChild(headerTitle);
app.appendChild(header);

const summaryContainer = document.createElement("div");
summaryContainer.classList.add("summary-container");

const summaryData = [
    { title: "👨‍🎓 Total Students", value: totalStudents },
    { title: "✅ Passed Students", value: passedStudents },
    { title: "❌ Failed Students", value: totalFailedCount },
    { title: "📊 Average Marks", value: `${avgMarks}%` }
];

summaryData.map(({ title, value }) => {
    const card = document.createElement("div");
    card.classList.add("sum-card");
    
    const h3 = document.createElement("h3");
    h3.innerText = title;
    
    const p = document.createElement("p");
    p.innerText = value;
    
    card.appendChild(h3);
    card.appendChild(p);
    summaryContainer.appendChild(card);
});
app.appendChild(summaryContainer);

const highlightSection = document.createElement("div");
highlightSection.classList.add("highlight-section");

const topperHeading = document.createElement("h2");
topperHeading.innerText = "🏆 Topper of the Class";
const topperText = document.createElement("p");
topperText.style.fontSize = "18px";
topperText.style.fontWeight = "bold";
topperText.innerText = `${classTopper.name} (${classTopper.course}) - Score: ${classTopper.marks}%`;

highlightSection.appendChild(topperHeading);
highlightSection.appendChild(topperText);

const statsHeading = document.createElement("h2");
statsHeading.style.marginTop = "20px";
statsHeading.innerText = "📊 Course Statistics";
highlightSection.appendChild(statsHeading);

Object.entries(courseStats).map(([courseName, count]) => {
    const p = document.createElement("p");
    p.innerText = `${courseName} → ${count} Students`;
    highlightSection.appendChild(p);
});

app.appendChild(highlightSection);

const createStudentCard = (student) => {
    const { name, course, age, marks, result, photo } = student;

    const card = document.createElement("div");
    card.classList.add("student-card");
    
    if (result === "Passed") {
        card.classList.add("pass-border");
    } else {
        card.classList.add("fail-border");
    }

    const img = document.createElement("img");
    img.src = photo;
    img.alt = name;

    const h3 = document.createElement("h3");
    h3.innerText = name;

    const pCourse = document.createElement("p");
    pCourse.innerText = `Course: ${course}`;

    const pAge = document.createElement("p");
    pAge.innerText = `Age: ${age}`;

    const pMarks = document.createElement("p");
    pMarks.innerText = `Marks: ${marks}%`;

    const badge = document.createElement("span");
    badge.classList.add("status-badge");
    badge.innerText = result;
    badge.classList.add(result === "Passed" ? "pass-badge" : "fail-badge");

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(pCourse);
    card.appendChild(pAge);
    card.appendChild(pMarks);
    card.appendChild(badge);

    return card;
};

const allStudentsTitle = document.createElement("h2");
allStudentsTitle.classList.add("section-title");
allStudentsTitle.innerText = "All Enrolled Students";
app.appendChild(allStudentsTitle);

const studentGrid = document.createElement("div");
studentGrid.classList.add("grid");
students.map(student => {
    const card = createStudentCard(student);
    studentGrid.appendChild(card);
});
app.appendChild(studentGrid);



