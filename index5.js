function moveZeroToEnds(arr) {
  const nonZero = arr.filter(num => num != 0);
  const orderArray = nonZero;
  orderArray.sort((a, b) => a - b);
  const zeroCount = arr.length - orderArray.length;
  const filteredArray = [...orderArray, ...Array(zeroCount).fill(0)];
  return filteredArray;
};
let arr = [0,1,0,3,12];
console.log(moveZeroToEnds(arr));