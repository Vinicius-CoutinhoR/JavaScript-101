// Question 01:
console.log('\nQuestion 01:');
const operator = (a, b) => {
    console.log(`Sum: ${a + b}`);
    console.log(`Subtraction: ${a - b}`);
    console.log(`Multiplication: ${a * b}`);
    console.log(`Division: ${(a / b).toPrecision(4)}`);
}
operator(2, 3);

// Question 02:
console.log('\nQuestion 02:');
triangleType = (a, b, c) => {
    if (a === b && a == c) {
        console.log('Equilateral Triangle');
    } else if (a === b || a === c || b === c ) {
        console.log('Isosceles Triangle');
    } else {
        console.log('Scalene Triangle');
    }
}
triangleType(1,1,1);

// Question 03:
console.log('\nQuestion 03:');
power = (base, exponent) => {
    return base ** exponent;
}
console.log(`The result is: ${power(2,3)}`);

// Question 04:
console.log('\nQuestion 04:');
divisionRest = (dividend, divsor) => {
    return dividend % divsor;
}
console.log(`The result is: ${divisionRest(5,3)}`);

// Question 05:
console.log('\nQuestion 05:');
let input = (0.30000000000000004).toPrecision(2);
currencyFormat = (input) => {
    input.toString();
    let newInput = "R$" + input.replace('.',',');

    console.log(newInput);
}
currencyFormat(input);

// Question 06:
console.log('\nQuestion 06:');
simpleInterest = (startingCapital, interestRate, time) => {
    simpleInterest = startingCapital * interestRate * time;
    return amount = startingCapital + simpleInterest;
} 
console.log(simpleInterest(1000, 10, 1));

// Função JurosCompostos(capitalInicial, taxaJuros, tempo):
//     montante = capitalInicial * (1 + taxaJuros)^tempo
//     Retorne montante

compoundInterest = (startingCapital, interestRate, time) => amount = startingCapital * Math.pow((1 + interestRate), time);
console.log(compoundInterest(1000, 10, 1));


// Question 07:
// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
//  Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 
//  Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam 
//  respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado,
//   mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
console.log('\nQuestion 07:');
secondGradeEquation = (a,b,c) => {
    delta = (b ** 2) - (4 * a * c);
    if (delta < 0) {
        return 'Delta é negativo';
    } else if (delta == 0) {
        return (-b/(2 * a));
    } else {
        negativeValue = ((-b - Math.sqrt(delta)) / (2 * a));
        positiveValue = ((-b + Math.sqrt(delta)) / (2 * a));
        
        return {
            Positive: positiveValue,
            Negative: negativeValue
        };
    }
} 
console.log(secondGradeEquation(1,-4,2));