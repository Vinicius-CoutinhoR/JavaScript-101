const array1 = ['a','b'];
const array2 = ['c','d'];

const allArrays = array1.concat(array2, 'z');

console.log(allArrays, array1, array2);

console.log([].concat([1,2]), [3,4]);