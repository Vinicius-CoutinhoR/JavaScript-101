const cart = [
    '{ "name": "Eraser", "price": 3.45 }',
    '{ "name": "Notebook", "price": 5.50 }',
    '{ "name": "Pen", "price": 0.50 }',
    '{ "name": "Sharpener", "price": 0.80 }',
];

const toObject = e => JSON.parse(e);

console.log(cart.map(toObject));

const toPriceArray = ((e) => e.price);

console.log(cart.map(toObject).map(toPriceArray));

const priceArrayFromJSON = cart.map((e) => {
    const obj = JSON.parse(e);
    return obj.price;
})

//console.log(priceArray);

