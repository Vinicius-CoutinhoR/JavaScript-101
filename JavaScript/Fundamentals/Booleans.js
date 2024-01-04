let isActive = false; 
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive)

console.log('True boolean situations: ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('False boolean situations: ');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('Finnaly: ');
console.log(!!('' || null || 0 || ' '));
 
let name = 'Peter';
console.log(name || 'Unknown');
