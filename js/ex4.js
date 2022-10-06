let studentList = [
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

    const scoreAdd5 = (array) => {
        array.forEach((elem,indx,arr) => arr[indx] += 5);
        return array;
    }
    studentScoreUpdate = studentList.map(student => {
        return {
            firstName: student.firstName,
            lastName: student.lastName,
            scores: scoreAdd5(student.scores),
            avgScore: student.scores.reduce((tot,x) => tot + x, 0) /student.scores.length
        }
    });
    studentScoreUpdate.forEach(student => {
        console.log(`Full name (last,first): ${student.lastName}, ${student.firstName}`);
        console.log(`Updated scores are: ${student.scores},${student.avgScore}`)
    });