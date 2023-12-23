let double = function(a) {
    return a * 2; 
}
console.log(`Standard function: ${double(5.231)}`);

double = (a) => { return 2 * a};
console.log(`Arrow function 1: ${double(Math.PI)}`);

double = (a) =>  2 * a;
console.log(`Arrow function 2: ${double(4)}`);

double = a => 2 * a;
console.log(`Arrow function 3: ${double(5)}`);

