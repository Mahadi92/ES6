// Tamplate String 
const firstName = "Mahadi";
const lastName = "Hasan";

const fullName = firstName + " " + lastName + " is a good boy"; // Old way to concate / tamplate string
console.log(fullName);

const fullName2 = `${firstName} ${lastName} is a good boy`; // New way to concate / tamplate string
const fullName2 = `${firstName} ${(50+30+20)*2} is a good boy`; // New way to concate / tamplate string and math
console.log(fullName2);

const multiLine = "I love you\n" + // Old way to concate / tamplate multiple string 
    "I miss you\n" +
    "I need you";
console.log(multiLine);

// New way to concate / tamplate multiple string
const multiLine2 = `I love you  
I miss you
I need you`;
console.log(multiLine2);