console.log(typeof Array, typeof new Array, typeof []);

// This way to instantiate a array isn't recommended.
let approved = new Array('Joe', 'Carl', 'Anna');
console.log(approved);

approved = ['Joe', 'Carl', 'Anna'];
console.log(approved);
console.log(approved[0]);
console.log(approved[1]);
console.log(approved[2]);
console.log(approved[3]); // Undefined

approved[3] = 'Paul';
approved.push('Martin');
console.log(approved.length);

approved[9] = 'Bob';
approved[6] = 'Jennie';
console.log(approved.length);
console.log(approved[8] === undefined);
console.log(approved[8] === null);

console.log(approved);
approved.sort();
console.log(approved);

delete approved[1];

console.log(approved[1]);
console.log(approved[2]);

approved = ['Joe', 'Carl', 'Anna'];
approved.splice(1, 1);
console.log(approved);