let array = [4, 78, 8, 3, 6, 0, 12, 34];

const getMaxElement = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

console.log(getMaxElement(array)); // 78

console.log("-------------------------------");

const calculateAverage = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
};
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

console.log("-------------------------------");

const convertEvenToOdd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] += 1;
    }
  }
  return arr;
};

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]

console.log("-------------------------------");

const filterWords = (arr) => {
  const words = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      words.push(arr[i]);
    }
  }
  return words;
};

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]

console.log("-------------------------------");

const capitalizeWords = (arr) => {
  const capitalized = [];

  for (let i = 0; i < arr.length; i++) {
    capitalized.push(arr[i].toUpperCase());
  }
  return capitalized;
};
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]

console.log("-------------------------------");

const getValues = (arr) => {
  const values = [];
  for (let i = 0; i < arr.length; i++) {
    values.push(arr[i].name);
  }
  return values;
};

console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
); // ["John", "Mary", "Peter"]

console.log("-------------------------------");

const podAndTeamAllocation = (arr) => ({ ...arr, teamId: 667543 });

const userData = { firstName: "John", lastName: "Dee" };
console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

console.log("-------------------------------");

const checkForTeam = (obj) => {
  if (obj.team) {
    return obj;
  } else {
    obj.team = "A";
    return obj;
  }
};

console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// {firstName: 'Penn', lastName: 'Ma', team: 'A'}

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// {firstName: 'John', lastName: 'Dee', team: 'B'}

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// {firstName: 'Priya', lastName: 'Raj', team: 'A'}
