const incrementNumbers = (arr) => arr.map((num) => num + 3);

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]

console.log("----------------------------");

const capitalizeArray = (arr) => arr.map((word) => word.toUpperCase());

const myArray = ["apple", "banana", "cherry"];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]

console.log("----------------------------");

const getAges = (peoples) => peoples.map((people) => people.age);

const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];
const ages = getAges(people);
console.log(ages); // Output: [25, 24, 29]

console.log("----------------------------");

const getProductNamesInLowerCase = (products) =>
  products.map((prod) => prod.name.toLowerCase());

const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];
console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]

console.log("----------------------------");

const getCityNames = (cities) => cities.map((city) => city.name);

const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]

console.log("----------------------------");

const filterLongStrings = (fruits) =>
  fruits.filter((fruit) => fruit.length > 5);

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
console.log(filterLongStrings(fruits));
// Output: ["banana", "cherry", "watermelon", "pineapple"]

console.log("----------------------------");

const isDivisibleBy3and5 = (numbers) =>
  numbers.filter((num) => num % 3 === 0 && num % 5 === 0);

const numbersArray = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbersArray));
// Output: [30, 15]

console.log("----------------------------");

const filterByAge = (peoples) => peoples.filter((people) => people.age > 30);

const peoplesArray = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

console.log(filterByAge(peoplesArray));
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]
