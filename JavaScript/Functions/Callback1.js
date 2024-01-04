const manufacturers = ['Honda', 'Mazda', 'Toyota', 'Nissan', 'Daihatsu', 'Suzuki', 'Mitsubishi'];

function print(manufacturer, index) {
    console.log(`${index + 1}, ${manufacturer} `);
}

manufacturers.forEach(print);
manufacturers.forEach(manufacturer => console.log(manufacturer));
