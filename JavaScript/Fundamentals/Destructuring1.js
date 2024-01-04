// new resource of ES2015

const person = {
    name: 'Anna',
    age: 5,
    address: {
        streetName: 'ABC Street',
        number: 1000
    }
}

const { name, age } = person;
console.log(name, age);

const { name: n, age: a } = person;
console.log(n, a);

const { lastName, height = true } = person;
console.log(lastName, height);

const { address: { streetName, number, cep } } = person;
console.log(streetName, number, cep);

// const { account: { ag, num } } = person;
// console.log(ag, num);