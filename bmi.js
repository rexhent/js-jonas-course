
// Challenge #1

// Data set 1


const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// Data set 2

const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI2, johnBMI2, markHigherBMI2);

// Challenge #2

if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher then John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher then Mark's (${markBMI})!`);
}