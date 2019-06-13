const myArray = [22, 9, 60, 12, 4, 56];
const sum = (x, y) => (x - ((22+9+60+12+4+56)/6)) / y;
let mySum = (myArray.reduce(sum, 0) / 6);