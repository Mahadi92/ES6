// Concatenate Multipul Array
const age = [15, 22, 19, 20];
const age2 = [35, 21, 49, 17];
const age3 = [25, 11, 30, 26];
const allAge = age.concat(age2).concat(age3); // old way
console.log(allAge);

const allAge2 = [...age, ...age2, ...age3]; // ES6
console.log(allAge2);

// Max array with ES6
const number = [20, 30, 50, 80, 70];
const maxNumber = Math.max(...number);
console.log(maxNumber);