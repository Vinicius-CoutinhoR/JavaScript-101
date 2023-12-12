function getRandomIntegerNumber(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let option;

do {
    option = getRandomIntegerNumber(-1, 10);
    console.log(`The choosed option was: ${option}.`);
} while (option != -1);

console.log('Until next time!');