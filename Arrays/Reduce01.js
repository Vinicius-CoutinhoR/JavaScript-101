const students = [
    { name: 'Tom', grade: 7.3, scholarship: false },
    { name: 'Mary', grade: 9.3, scholarship: true },
    { name: 'Anna', grade: 9.8, scholarship: false },
    { name: 'Peter', grade: 8.7, scholarship: true },
]

const allScholarship = (result, scholarship) => result && scholarship;
console.log(students.map(a => a.scholarship).reduce(allScholarship));

const someScholarship = (result, scholarship) => result || scholarship;
console.log(students.map(a => a.scholarship).reduce(someScholarship));
