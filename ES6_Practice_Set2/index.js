const person = {
  name: "Non",
  age: 30,
};

person.age = 35;

console.log(person.age);
console.log("---------------------");

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

const isSportsCar = (car) => {
  return car.horsepower >= 300;
};

console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false
console.log("---------------------");

const person1 = { name: "Ajay", age: 20 };

const isEligible = (person, num) => {
  return person.age + num > 21;
};

console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true
console.log("---------------------");

const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};
const getViews = (blog) => blog.views > 1000;
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false

console.log("---------------------");

let a = 1;
let b = 2;

[b, a] = [a, b];

console.log(a); // 2
console.log(b); // 1

console.log("---------------------");

const add = (a = 30, b = 0) => a + b;

console.log(add(2, 3));

console.log("---------------------");

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}

console.log("---------------------");

const getData = (person) => {
  const { name, address } = person;
  console.log(name); // John Doe
  console.log(address.city); // New York
};

const person2 = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
getData(person2);
console.log("---------------------");

const stringToUpperCase = (str) => str.toUpperCase();

console.log(stringToUpperCase("hello")); // "HELLO"

console.log("---------------------");

const concatenateStrings = (str1, str2) => `${str1}${str2}`;

console.log(concatenateStrings("hello", "world")); // "helloworld"

console.log("---------------------");

const lastElement = (arr) => arr[arr.length - 1];
console.log(lastElement([1, 2, 3, 4, 5])); // 5

const firstElement = (arr) => arr[0];

console.log(firstElement([1, 2, 3, 4, 5])); // 1

console.log("---------------------");

const sumFirstElement = (arr, num) => arr[0] + num;
console.log(sumFirstElement([1, 2, 3], 5)); // 6

console.log("---------------------");

const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];
console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

console.log("---------------------");

const newPerson1 = { name: "John", age: 25, occupation: "Software Engineer" };
const newPerson2 = { name: "Jane", age: 45, occupation: "Data Analyst" };

const personInfo = (obj) => `"${obj.name} is ${obj.age} years old"`;

console.log(personInfo(newPerson1)); // Expected output: "John is 25 years old."
console.log(personInfo(newPerson2)); // Expected output: "Jane is 45 years old."
