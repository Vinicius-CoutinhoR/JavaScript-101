const grades = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in grades) {
    console.log(i, grades[i]);
}

const person = {
    name: 'Ana',
    lastName: 'Silva',
    age: 29,
    Weight: 64
}

for(let attribute in person) {
    console.log(`${attribute} = ${person[attribute]}`);
}