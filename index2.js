//const originalArray = [1, 0, 0, 0, 1];
//
//function replaceNumber(arr, index) {
//  const zeroCount = arr.filter(num => num === 0).length;
//  console.log(zeroCount);
//  if (n > zeroCount) {
//    return false;
//  } else {
//    return true;
//  };
//
//  let count = 0;
//  const modifiedArray = [];
//  for (let i = 0; i < arr.length; i++){
//    if(arr[i] === 0 && count < n){
//      modifiedArray.push(1);
//      count++;
//    } else {
//      modifiedArray.push(arr[i]);
//    }
//  }
//  return modifiedArray;
//}
//let n = 4;
//const modifiedArr = replaceNumber(originalArray, n);
//console.log(modifiedArr);
//function replaceZeroWithOdd(arr, index, oddNumber) {
//    if (index >= 0 && index < arr.length && arr[index] === 0) {
//        arr[index] = oddNumber; // Replace the zero with the odd number
//    }
//    return arr; // Return the modified array
//}
//
//// Example usage
//const indexToReplace = 3; // Index where you want to replace the zero
//const oddNumber = 1; // Odd number to insert
//
//const modifiedArray = replaceZeroWithOdd(originalArray, indexToReplace, oddNumber);
//console.log(modifiedArray); // Output: [1, 0, 1, 0, 1]


//const originalArray = [1, 0, 0, 0, 0, 1];
//
//function replaceNumber(arr, n) {
//  const evenZeroCount = arr.filter((num, index) => num === 0 && index % 2 === 0).length;
//    console.log(`Count of even-indexed zeros: ${evenZeroCount}`);
//  const medium = arr.filter((num) => num === 0);
//  console.log(medium);
//    if (n > evenZeroCount || !medium%2===0 ) {
//        return false;
//    } else {
//      return true;
//    }
//
////    let count = 0; // Counter for how many replacements have been made
////    const modifiedArray = []; // Array to hold the modified values
////
////    for (let i = 0; i < arr.length; i++) {
////        // Check if the current element is 0, the index is even, and we still need to add more `n`
////        if (arr[i] === 0 && count < n && i % 2 === 0) {
////            modifiedArray.push(1); // Replace the 0 with 1
////            count++; // Increment the count of replacements
////        } else {
////            modifiedArray.push(arr[i]); // Otherwise, keep the original value
////        }
////    }
////
////    return modifiedArray; // Return the modified array
//}
//
//let n = 1; // Example with n = 1
//const modifiedArr1 = replaceNumber(originalArray, n);
//console.log(modifiedArr1); // Output: [1, 0, 1, 0, 1]
//
//n = 2; // Example with n = 2
//const modifiedArr2 = replaceNumber(originalArray, n);
//console.log(modifiedArr2); // Output: false


function check(flowerbed , n) {
  let count = 0;
  const length = flowerbed.length;
  for (let i = 0; i < length; i++){
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === length - 1 || flowerbed[i + 1] === 0)) {
      count++;
      i++;
    }  
  }
  return count >= n;
}

const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
const n2 = 2;
const flowerbed2 = [1, 0, 0, 0, 0, 1];

console.log(check(flowerbed1, n1));

console.log(check(flowerbed1, n2));

console.log(check(flowerbed2, n1))
