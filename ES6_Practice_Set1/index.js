const isEligibleToVote = (age) => {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
};

console.log(isEligibleToVote(20)); // Eligible to vote
console.log(isEligibleToVote(18)); // Eligible to vote
console.log(isEligibleToVote(17)); // Not eligible to vote

console.log("------------------------------");

const isGreater = (a, b) => {
  return a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
};
console.log(isGreater(2, 5)); // 5 is greater than 2
console.log(isGreater(10, 5)); // 10 is greater than 5

console.log("------------------------------");

const checkNum = (num) => {
  return num > 0 ? "Positive Number" : "Negative Number";
};

console.log(checkNum(9)); // Positive Number
console.log(checkNum(-8)); // Negative Number
console.log(checkNum(22)); // Positive Number
console.log("------------------------------");

const isEvenOdd = (num) => {
  return num % 2 === 0 ? "Even Number" : "Odd Number";
};

console.log(isEvenOdd(5)); // Odd Number
console.log(isEvenOdd(8)); // Even Number
console.log(isEvenOdd(10)); // Even Number

console.log("------------------------------");

const checkForAlphabetA = (value) => {
  return value.includes("a" || "A") ? "Includes a " : "Does not include a";
};
console.log(checkForAlphabetA("Tanay")); // Includes a
console.log(checkForAlphabetA("Jeep")); // Does not include a
console.log(checkForAlphabetA("Jane")); // Includes a

console.log("------------------------------");

const checkLength = (word) => {
  return word.length > 5
    ? "more than 5 characters "
    : "less than 5 characters ";
};
console.log(checkLength("Programming")); // more than 5 characters
console.log(checkLength("Jeep")); // less than 5 characters

console.log("------------------------------");

const isBetweenOneAndTen = (num) => {
  return num >= 1 && num <= 10;
};

console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false

console.log("------------------------------");

const isHelloPresent = (value) => {
  return value.includes("Hello");
};
console.log(isHelloPresent("Hello World")); // true
console.log(isHelloPresent("World")); // false

console.log("------------------------------");

const isMultipleOfThree = (num) => {
  return num % 3 === 0;
};

console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true

console.log("------------------------------");
const multiplyByTen = (num) => {
  return num * 10;
};

console.log(multiplyByTen(20)); // 200
console.log(multiplyByTen(40)); // 400
console.log("------------------------------");

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

const { title, price, description } = product;

console.log(title); // iPhone
console.log(price); // 5999
console.log(description); // The iPhone is a smartphone developed by Apple
console.log("------------------------------");

const book1 = {
  title: "non",
  author: "me",
  pages: 120,
};

const book2 = { ...book1, pages: 90 };

const getBookDetails = (obj) => {
  return obj.pages > 100;
};

console.log(getBookDetails(book1)); // logs 'true' if the pages are above 100
console.log(getBookDetails(book2)); // logs 'false' if the pages are 100 or below

console.log("------------------------------");

const person = { name: "Amit", age: 25, occupation: "Software Engineer" };

const changeOccupation = (person, occupation) => {
  person.occupation = occupation;
};

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, "Product Manager");
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console

console.log("------------------------------");

const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console

console.log("------------------------------");

const defaultParamsFunc = (a, b, c = 4) => a * b *c
console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120
