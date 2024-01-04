// First way to create an object in js
const product1 = {};
// Creating attributes by using dot notation
product1.name = '16" MacBook Pro M3 Max'
product1.price = 4000.0;
// Creating attributes by using square brackets
/* Do not separate the attribute name, use a dash '-' 
or underscore '_' or use camelCase convention */
product1['Big discount'] = 0.30 

console.log(product1);

// Second way to create an object in js
const product2 = {
    name: 'T-shirt',
    price: 15.0,
    object2: {
        something: 1,
        object3: {
            something: 20
        }
    }
}

console.log(product2);

// Converting product2 to json:
const product2JSON = JSON.stringify(product2, null, 2);
console.log(product2JSON)