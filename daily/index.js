const arr = [1, 0, 0, 1, 1, 0];

function splitIntoPairs(arr) {
  let pairs = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.pushc;
  }
  return pairs;
}
const result = splitIntoPairs(arr);

function updArr(result) {
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    const subArr = result[i];
    if (subArr[1] !== subArr[0]) {
      subArr[1] = subArr[0];
      count++;
    }
  }
  return count;
}

const finRes = updArr(result);
