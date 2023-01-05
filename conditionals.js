
//const currentYear = new Date().getFullYear();
//const birthYear = 2007;
//const age = currentYear - birthYear;
const age = 15;

const isOldEnough = age >= 16;
console.log(isOldEnough);

if(isOldEnough == true) {
    console.log('yay!');
}
else if(isOldEnough == false) {
    const yearsLeft = 16 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years.`);
}

// if(condition)

let century;
const birthYear = 2007;
if(birthYear <= 2000 >= 1900) {
    century = 20;
}
else if(birthYear >= 2000) {
    century = 21;
}
else {
    console.log('You are very old!')
}

console.log(century);
