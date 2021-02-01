const friend = ['bolto', 'colto', 'lalto', 'polto'];
// const [firstFnd, secondFnd] = friends; // friestFnd = [0] secondFnd = [1] .. .... ...
const [firstFnd, secondFnd, ...remainingFnd] = friend;
console.log(remainingFnd);