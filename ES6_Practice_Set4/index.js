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
