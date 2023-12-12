function getRandomIntegerNumber(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let option = 0;

while (option != -1) {
    option = getRandomIntegerNumber(-1, 10);
    console.log(`The choosed option was: ${option}.`);
}

console.log('Until next time!');