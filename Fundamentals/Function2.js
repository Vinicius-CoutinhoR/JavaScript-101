// Storing a function inside a variable
const printSum = function (a, b) { 
    console.log(a + b);
}

printSum(2, 3);

// Storing an Arrow function inside a variable
const sum = (a, b) => { return a + b };
console.log(sum(2,3));

// Reduced arrow function, when is a single line, the return keyword isn't necessary
const subtraction = (a, b) => a - b;
console.log(subtraction(2, 3));

// When a function only have a single param
const print = a => console.log(a);
console.log(print(2));
