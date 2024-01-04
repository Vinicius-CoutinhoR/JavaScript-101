// It's implicit declared before
// var = a;
console.log(`'a' = ${a}`);
var a = 2;
// So the compiler will see:
// a = 2;
console.log(`'a' = ${a}`);

function hoistingTest() {
    // It's implicit declared before
    // var = a;
    console.log(`'a' = ${a}`);
    var a = 2;
    // So the compiler will see:
    // a = 2;
    console.log(`'a' = ${a}`);
}
hoistingTest();

// Hoisting only occurs with 'var' type
// In 'let' type the variable isn't declared before
// console.log(`'b' = ${a}`); Not defined exception
var b = 2;
console.log(`'b' = ${a}`);