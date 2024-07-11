const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here
const totalLength = (strings) =>
  strings.reduce((acc, curr) => acc + curr.length, 0);

console.log(totalLength(strings));
// Output: 30

console.log("------------------------------");
