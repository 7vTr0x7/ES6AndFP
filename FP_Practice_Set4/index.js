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

const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];
const totalValue = (items) => items.reduce((acc, curr) => acc + curr.price, 0);

console.log(totalValue(items));
// Output: 60

console.log("------------------------------");

const concatStrings = (strings) =>
  strings.reduce((acc, curr) => acc + curr, "");
console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun

const numbersArray = [1, 2, 3, 4, 5];
// Your code here
const product = (numbers) => numbers.reduce((acc, curr) => acc * curr);

console.log(product(numbersArray));
// Output: 120

console.log("------------------------------");

const stringsArray = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here
const longestString = (strings) =>
  strings.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));

console.log(longestString(stringsArray));
// Output: 'Haule Haule'

console.log("------------------------------");

const people = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];

// Your code here
const oldestPersonName = (peoples) =>
  peoples.reduce((acc, curr) => (acc.age > curr.age ? acc.name : curr.name));

console.log(oldestPersonName(people));
// Output: 'Naina

const peopleArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
// Your code here

const getAverageAge = (people) =>
  people.reduce((acc, curr) => acc + curr.age, 0) / people.length;

console.log(getAverageAge(peopleArray));
// Output: { averageAge: 32.5 }
