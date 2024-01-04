const students = [
    { name: 'John', grade: 9.5 },
    { name: 'Mary', grade: 7.5 },
];

// Imperative
let total1 = 0;
for (let i = 0; i < students.length; i++) {
    total1 += students[i].grade;
}
console.log(total1 / students.length);

// Declarative
const getGrade = (student) => student.grade;

const sum = (total, current) => total + current;

const total2 = students.map(getGrade).reduce(sum);
console.log(total2 / students.length);

const total3 = students
     .map(getGrade)
    .reduce((total, current) => total + current);
console.log(total3 / students.length);
