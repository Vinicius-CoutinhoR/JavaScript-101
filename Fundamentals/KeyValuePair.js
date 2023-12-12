// Key/value pair
const greetings = 'Hello!';

function exec() {
    const greetings = 'Hey!';
    return greetings;
}

// Objects are nested key/value pairs
const Customer = {
    name: 'Victor',
    age: 32,
    weight: 70.0,
    address: {
        street: 'Best Street',
        number: 912
    }
}
console.log(greetings);
console.log(exec());
console.log(Customer);
