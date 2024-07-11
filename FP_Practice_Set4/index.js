const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here
const totalLength = (strings) =>
  strings.reduce((acc, curr) => acc + curr.length, 0);

console.log(totalLength(strings));
// Output: 30

console.log("------------------------------");

const numbers = [1, 2, 3, 4, 5];
// Your code here
const sumSquares = (numbers) =>
  numbers.reduce((acc, curr) => acc + curr * curr, 0);
console.log(sumSquares(numbers));
// Output: 55

console.log("------------------------------");
