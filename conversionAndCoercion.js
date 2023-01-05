
// Conversion and Coercion in JavaScript

// type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old');
// Same as console.log('I am ' + '23' + ' years old');
// Same as console.log('I am ' + String(23) + ' years old);

// Addition converts numbers to strings when concatenating strings with numbers

// Not all operators do type coercion to string

console.log('23' - '10' - 3); // Subtraction converts strings to numbers

console.log('23' * '2'); // Multiplication converts to numbers
console.log('23' / '2'); // Same with numbers

// Guess the output

let n = '1' + 1; // 11
n = n - 1; // 11 - 1 = 10
console.log(n);

/* My guess is that when adding they will be converted into strings,
then concatenated, therefore becoming 11 instead of 2.

Then when subtracting n will be converted from a string into a number,
therefore n (11) - 1 = 10.
*/

