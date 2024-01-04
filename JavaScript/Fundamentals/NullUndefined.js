let value; // Not initialized
console.log(value); // Undefined
// console.log(value2); Is not defined

value = null; // Initialized, but without a value
console.log(value);
// console.log(value.toString()); Bang! Java null pointer exception flashbacks!

const product = {} 
console.log(product.price);
console.log(product);

product.price = 3.50;
console.log(product);

product.price = undefined; // Avoid assigning undefined in variables or objects!
console.log(!!product.price);
// instead use delete keyword
// delete product.price
console.log(product);

product.price = null; // Without a price
console.log(!!product.price);
console.log(product);



