// Void function
function printSum(a, b) {
    console.log(a + b);
} 

printSum(2, 3);
printSum(2, 3, 4, 5, 6); // JS ignore the rest of the numbers
printSum(2); // NaN
printSum(); // NaN

// Function with return
function sum(a, b = 0 ) { // b = 0 is the default value
    return a + b;
}

console.log(sum(2, 3));
console.log(sum(2));
console.log(sum()); // NaN


