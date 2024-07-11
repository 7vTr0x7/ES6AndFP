const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const findToyotaCar = (cars) =>
  cars.find((car) => car.make === "Toyota" && car.year > 2010);
const toyotaCar = findToyotaCar(cars);
console.log(toyotaCar);
// Output: { make: "Toyota", model: "Camry", year: 2015 }

console.log("-------------------------------------");

const carsArray = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarDetails = (cars) => cars.filter((car) => car.year > 2012);

const getCars = getCarDetails(carsArray);
console.log(getCars);
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]

console.log("-------------------------------------");

const products = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

const findElectronicsProduct = (products) =>
  products.find((prod) => prod.category === "electronics");

const electronicsProduct = findElectronicsProduct(products);
console.log(electronicsProduct);
// Output: { name: "iPad", price: 799, category: "electronics" }

console.log("-------------------------------------");

const productsArray = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];
const getAllElectronicProducts = (products) =>
  products.filter((prod) => prod.category === "electronics");
const electronicProducts = getAllElectronicProducts(productsArray);
console.log(electronicProducts);
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]

console.log("-------------------------------------");

const students = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];
const filterStudentsByGrade = (students, grade) =>
  students.filter((student) => student.grade > grade);

const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents);
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

console.log("-------------------------------------");

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const findBookWithMoreThan500Pages = (books) =>
  books.find((book) => book.pageCount > 500);

const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
console.log(bookWithMoreThan500Pages);

console.log("-------------------------------------");

const customers = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  { name: "Bob", age: 40, gender: "Male" },
  { name: "Alice", age: 35, gender: "Female" },
];
const getMaleCustomers = (customers) =>
  customers.filter((cus) => cus.gender === "Male");

const maleCustomers = getMaleCustomers(customers);
console.log(maleCustomers);
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]
console.log("-------------------------------------");

const games = [
  {
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "RPG",
  },
  { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
  { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Adventure",
  },
];
const filterByGenre = (games, genre) =>
  games.filter((game) => game.genre === genre);

const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]

console.log("-------------------------------------");

const newCarsArray = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarModel = (cars) => {
  const filteredCars = cars.filter((car) => car.year > 2012);
  return filteredCars.map((car) => car.model);
};

const carModels = getCarModel(newCarsArray);
console.log(carModels);
// Output: ["Camry", "Mustang"]

console.log("-------------------------------------");

const booksArray = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const getTitlesWithMoreThan700Pages = (books) => {
  const filteredBooks = books.filter((book) => book.pageCount > 700);
  return filteredBooks.map((book) => book.title);
};
const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(booksArray);
console.log(booksWithMoreThan700Pages);
// Output: ["The Lord of the Rings"]

console.log("-------------------------------------");

const numbers = [12, 23, 4, 2, 11, 21];
// Your code here
const sumOfEvenNumbers = (numbers) => {
  const filteredNumbers = numbers.filter((num) => num % 2 === 0);
  return filteredNumbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfEvenNumbers(numbers));
// Output: 18

console.log("-------------------------------------");

const studentsArray = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Alice", score: 85 },
];

const getAverageScore = (students) =>
  students.reduce((acc, curr) => acc + curr.score, 0) / students.length;
console.log(getAverageScore(studentsArray));
// Output: 82.5

console.log("-------------------------------------");

const newProductsArray = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

const getTotalCost = (products) =>
  products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

console.log(getTotalCost(newProductsArray));
// Output: 150

console.log("-------------------------------------");

const strings = ["Hello", " ", "world", "!"];
const concatenateStrings = (strings) =>
  strings.reduce((acc, curr) => acc + curr, "");
console.log(concatenateStrings(strings));
// Output: "Hello world!"

console.log("-------------------------------------");

const numbersArray = [10, 5, 8, 3, 6];

const getMinimumNumber = (numbers) =>
  numbers.reduce((acc, curr) => (acc < curr ? acc : curr));
console.log(getMinimumNumber(numbersArray));
// Output: 3
