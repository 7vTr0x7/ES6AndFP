const items = ["apple", "banana", "orange"];

const formatArray = (items) =>
  `The array has ${items.length} items, and the first item is "${
    items[0]
  }", and the last item is "${items[items.length - 1]}".`;

const message = formatArray(items);
console.log(message);

console.log("----------------------");

const product = {
  name: "Socks",
  price: 249,
  inStock: true,
};

const formatProduct = (product) =>
  `${product.name} costs INR ${product.price} and is ${
    product.inStock ? "in stock" : "not in stock"
  }`;

const msg = formatProduct(product);
console.log(msg);
// Output: Socks costs INR 249 and is in stock.

console.log("----------------------");

const findPerson = (peoples, name) =>
  peoples.find((person) => person.name === name) || null;
console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil"
  )
);

console.log("----------------------");

const pickFirstAndSecond = (arr) => {
  const [first, second] = arr;
  return { first, second };
};

console.log(pickFirstAndSecond(["grapes", "banana", "apple"]));
// {first: 'grapes', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]));
// {first: 'red', second: 'blue'}

console.log("----------------------");

const startsWithA = (str) => str.charAt(0) === "A";

console.log(startsWithA("Akshita"));
// true
console.log(startsWithA("Jeena"));
// false

console.log("----------------------");

const printFirstCharacter = (arr) => arr[0];
console.log(printFirstCharacter([1, 2, 3, 5, 8]));
// 1
console.log("----------------------");

const printLastFive = (arr) => arr.splice(arr.length - 5, arr.length - 1);
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
// [1, 2, 3, 5, 8]
console.log("----------------------");

const printSecondCharacter = (arr) => arr[1] * 20;
console.log(printSecondCharacter([1, 2, 3, 5, 8]));
// 40
console.log("----------------------");

const sayHello = (arr) => `Hello ${arr[1]}`;

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]));
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]));
// Hello Rakesh

console.log("----------------------");

const sumOfEvenIndices = (arr) => {
  const even = arr.filter((num, index) => index % 2 === 0);
  return even.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30

console.log("----------------------");
const sumFirstTwoElements = (arr) => arr[0] + arr[1];
console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])); // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])); // 26

console.log("----------------------");

const printMultipleOfFive = (arr) => arr.find((num) => num % 5 === 0);
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])); // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])); // 5

console.log("----------------------");

const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany",
};

const getAddress = (user) => ({ postalCode: user.postalCode, city: user.city });

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}

console.log("----------------------");

const printData = (obj) => `${obj.name} lives in ${obj.country}`;

const userData1 = {
  name: "Gaurav",
  postalCode: "12134",
  country: "Japan",
};
console.log(printData(userData1)); // Gaurav lives in Japan

const userData2 = {
  name: "Pritam",
  postalCode: "560223",
  country: "India",
};
console.log(printData(userData2)); // Pritam lives in India

console.log("----------------------");

const product3 = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};

const printProductDetails = (product) =>
  `${product.name} which is of ${product.specification.size}, has a capacity of ${product.specification.capacity}`;

console.log(printProductDetails(product3)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.
