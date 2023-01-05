

const firstName = 'Dominic';
const job = 'programmer';
const birthYear = 2007;
const currentYear = new Date().getFullYear();

// Traditional Strings

const dominic = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
console.log(dominic);

// Template Literals

const dominicNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(dominicNew);

console.log(`Hey, I'm Dominic!`);

// Multi line strings

// Traditional

console.log('String with \n\
multiple \n\
lines');

// Template strings

console.log(`String
multiple
lines`);
