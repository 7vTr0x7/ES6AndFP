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
