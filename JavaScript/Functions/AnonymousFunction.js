const sum = function (a, b) {
    return a + b;
}

const printResult = function (a = 0, b = 0, operation = sum) {
    console.log(operation(a, b));
}

printResult(3, 4);
printResult();
printResult(3, 4, (a, b) => { return a - b; });
printResult(3, 4, (a, b) => a * b);
printResult(3, 4, (a, b) => a / b);
printResult(3, 4, (a, b) => a ** b);

const person = {
    talk: function () {
        console.log('Hi!');
    },
    talk2: () => console.log('Hello!')
}

person.talk();
person.talk2();
