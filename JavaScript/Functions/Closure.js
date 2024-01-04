// Closure is the scope when a function is created
// This scope allows to the function access and manipulate external variables.

// Lexical context in action:

const x = 'Global';

outside = () => { 
    const x = 'Local';
    inside = () => { return x };

    return inside;
 }

const myFunction = outside();
console.log(myFunction());