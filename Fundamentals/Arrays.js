const values = [7, 7, 8.9, 9.2];
console.log(values[0], values[3]);
console.log(values[4]);

values[4] = 10;
console.log(values[4]);
console.log(values.length);

values.push({id: 3}, false, null, 'Test'); // Avoid heterogenic arrays when it's possible
console.log(values);

console.log(values.pop()); // Removes the last value from the array
delete values[0];
console.log(values);
console.log(typeof values);

