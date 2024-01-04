const products = [
    { name: 'Xbox Series X', price: 1500, fragile: true },
    { name: 'MacBook Pro M3 Pro 16"', price: 3500, fragile: true },
    { name: 'iPad Pro', price: 2500.20, fragile: true },
    { name: 'Glass Cup', price: 10.20, fragile: true },
    { name: 'Plastic Cup', price: 5.00, fragile: false },
]

console.log(products.filter((p) => p.price > 2000 && p.fragile === true));

const filterByPrice = (product) => { return product.price >= 2000 };

const filterByFragile = (product) => product.fragile;

console.log(products.filter(filterByPrice).filter(filterByFragile));

