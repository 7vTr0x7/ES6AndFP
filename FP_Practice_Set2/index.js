const peoples = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];

const getNames = (peoples) => peoples.map((people) => people.name);
const names = getNames(peoples);
console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

const numbers = [1, 2, 3, 4];
// Your code here

console.log("------------------------------------");

const getMultiplyByFive = (numbers) => numbers.map((num) => num * 5);
const multiplyByFive = getMultiplyByFive(numbers);

console.log(multiplyByFive); // Output: [5, 10, 15, 20]
console.log("------------------------------------");

const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];

const getGreetEmployeeMessages = (employees) =>
  employees.map(
    (emp) => `Hi ${emp.name} we are glad to have you as a ${emp.dept}`
  );

const greetEmployeeMessages = getGreetEmployeeMessages(employeeData);
console.log(greetEmployeeMessages);

console.log("------------------------------------");

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

const getBookTitles = (books) => books.map((book) => book.title);

const titles = getBookTitles(books);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

console.log("------------------------------------");

const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];

const getStudentNames = (students) =>
  students.filter((student) => student.charAt(0).includes("A"));

const studentNames = getStudentNames(studentName);

console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

console.log("------------------------------------");

const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
// Your code here
const getProducts = (products) => products.filter((prod) => prod.price > 40);

console.log(getProducts(productData, 40));
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

console.log("------------------------------------");

const numbersArray = [1, 2, 3, 21, 14, 7];

const getDivisibleBy7 = (numbers) => numbers.find((num) => num % 7 === 0);

const isDivisibleBy7 = getDivisibleBy7(numbersArray);

console.log(isDivisibleBy7);
// Output: 21

console.log("------------------------------------");

const namesArray = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
  "shayam",
];
// Your code here

const isNamesGreaterThan8 = (names) => names.find((name) => name.length > 8);

console.log(isNamesGreaterThan8(namesArray));
// Output: "Geetanjali"

console.log("------------------------------------");

const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];
const findStudentWithGradeA = (students) =>
  students.find((stud) => stud.grade === "A");

const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA);
// Output: { name: "Mary", grade: "A" }

console.log("------------------------------------");

const studentsArray = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];
const findStudent = (students) =>
  students.find((stud) => stud.grade === "A" || stud.scholarship);

const student = findStudent(studentsArray);
console.log(student);
// Output: { name: "Mary", grade: "B", scholarship: true }

console.log("------------------------------------");

const newStudentsArray = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];

const findStudentDetails = (students) =>
  students.find((stud) => stud.grade === "B" && stud.scholarship);

const studentDetails = findStudentDetails(newStudentsArray);
console.log(studentDetails);
// Output: { name: "Sarah", grade: "B", scholarship: true }

console.log("------------------------------------");

const bollywoodMovies = [
  { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
  {
    title: "Amar Akbar Anthony",
    director: "Manmohan Desai",
    year: 1977,
    rating: 7.6,
  },
  { title: "Namak Halaal", director: "Prakash Mehra", year: 1982, rating: 7.4 },
  { title: "Mr. India", director: "Shekhar Kapur", year: 1987, rating: 7.8 },
  {
    title: "Qayamat Se Qayamat Tak",
    director: "Mansoor Khan",
    year: 1988,
    rating: 7.6,
  },
  { title: "Parinda", director: "Vidhu Vinod Chopra", year: 1989, rating: 8.1 },
  { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
];

const getBestOldBollywoodMovies = (movies) => {
  const filteredMovies = movies.filter(
    (movie) => movie.year < 1990 && movie.rating > 8.0
  );

  return filteredMovies.map((movie) => movie.title);
};

const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']
