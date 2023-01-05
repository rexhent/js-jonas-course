
// 5 falsy values: 0, '', undefined, null, NaN
// (will become false when converted to boolean)

// Any numbers not 0, and any strings that aren't empty are truthy

// Empty objects are also true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Dominic'));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(3));
console.log(Boolean({}));

const money = 0; // 0 is falsy
// const money = 100; // 100 is truthy
if(money) { // if money == true
    console.log("Don't spend it all.");
} else {
    console.log('You should get a job.');
}

// Check if variable is defined or not

let height = 0; // height == undefined which is falsy so height is false
if(height) {
    console.log('YAY! Height is defined.');
} else {
    console.log('Height is undefined :(');
}
