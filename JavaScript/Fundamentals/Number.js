const weight1 = 1.0;
const weight2 = Number('2.0');

console.log(weight1, weight2);
console.log(Number.isInteger(weight1));
console.log(Number.isInteger(weight2));

const grade1 = 9.871;
const grade2 = 6.871;

const total = (weight1 * grade1) + (weight2 * grade2);
const average = total / (weight1 + weight2);

console.log(average.toFixed(2));
console.log(average.toString(16));
console.log(typeof average);
console.log(typeof Number);

