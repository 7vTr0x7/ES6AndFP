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
