const peoples = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];

const getNames = () => peoples.map((people) => people.name);
const names = getNames();
console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']
