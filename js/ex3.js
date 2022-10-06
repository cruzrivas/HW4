const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
const cLastNameResults = studentList.filter(student => student.lastName[0] === "C")
    .map(student => {
        return {
            firstName: student.firstName,
            lastName: student.lastName,
            minScore: student.scores.reduce((acc,cv) => acc < cv ? acc : cv),
            maxScore: student.scores.reduce((acc,cv) => acc > cv ? acc : cv),
            avgScore: student.scores.reduce((tot,x) => tot + x, 0) /student.scores.length
        }
    });
    console.log(cLastNameResults)
