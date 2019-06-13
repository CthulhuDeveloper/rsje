const myArray = [2, 4, 2, 4, 10, 2];
const sum = (x, y) => x + y;
const avg = myArray => myArray.reduce(sum, 0) / myArray.length;
console.log(avg(myArray))