const defaultStudents = [
    { id: 1, name: "Liam", scores: [99, 95, 92], status: "active" },
    { id: 2, name: "Mia", scores: [98, 90, 88], status: "active" },
    { id: 3, name: "Noah", scores: [91, 85, 80], status: "suspended" }
];

function processDatabase(database = defaultStudents, ...newStudents) {
    const completeDatabase = [...database, ...newStudents];

    return completeDatabase
        .filter(({ status }) => status === "active")
        .map(({ name, scores }) => {
            const total = scores.reduce((sum, score) => sum + score, 0);
            const average = total / scores.length;
            return { name, average };
        });
}
const updatedReport = processDatabase(
    undefined, 
    { id: 4, name: "Olivia", scores: [100, 96, 94], status: "active" }
);
console.log(updatedReport);
