
// 1 Values and Variables
const country = 'Australia';
const continent = 'Australia';
let population = 26;
console.log(country, continent, population);

// 2 Data Types
const isIsland = true;
let language;
console.log(isIsland, population, country, language);

// 3 let, const and var
language = 'English';
// isIsland = false; Cannot change value as it is a constant variable

// 4 Basic Operators
let halfAustraliaPopulation = (population * 1000000) / 2;
console.log(halfAustraliaPopulation + 1);
let australiaPopulation = 26000000;
const higherPopThenFinland = australiaPopulation > 6000000;
console.log(`It is ${higherPopThenFinland} that ${country} has a higher population then Finland.`);

const averagePopulation = 33000000;
const belowAveragePopulation = australiaPopulation < 33000000;
console.log(`It is ${belowAveragePopulation} that Australia has less then 33000000 people.`)
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

// Already did 5

// 6 Taking Decisions: if / else Statements
/* australiaPopulation = 13; */
if(australiaPopulation > 33000000) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33000000 - australiaPopulation} below average.`)
}

// 7 Type Conversion and Coercion
// Predict results without executing

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 198. wrong, it concatenates it on the right.
// answer = 1143


