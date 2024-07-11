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
