//1st way to set defult parameter / [Old way]
function add(num1, num2) {
    if (num2 == undefined) { // defult value valitation
        num2 = 0;
    }
    return num1 + num2;
}
const sum = add(20);
console.log(sum);


//2nd way to set defult parameter / es6 old
function add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
const sum2 = add(50);
console.log(sum2);

//3nd way to set defult parameter / es6 new
function add(num1, num2 = 0) {
    return num1 + num2;
}
const sum3 = add(40);
console.log(sum3);