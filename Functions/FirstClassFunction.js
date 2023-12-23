// JavaScript function is a First-Class Object (Citizens)
// Higher-order function

// Can be created in a litral form
function fun1() { }

// Can be stored into a variable
const fun2 = function () { }

// Can store an array
const array = [function (a, b) { return a + b; }, fun1, fun2]
console.log(array[0](2, 3));

// Can store an object attribute
const obj = {}
obj.talk = function () { return 'Hi'; }
console.log(obj.talk());

// Can pass a function as a param
function run(fun) {
    fun();
}

run(function () { console.log('Exec...'); })

// A function can return another function:
function sum(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

sum(2, 3)(4);
const fivePlus = sum(2, 3);
fivePlus(4);