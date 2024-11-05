let s = "abc";
let t = "ahbbdc";

//function isSubsequence(one, two){
//  const twoSplitted = two.split('');
//  const oneSplitted = one.split('');
//  console.log(oneSplitted, twoSplitted);
//};
//isSubsequence(s, t);

function stringContainChars(str1, str2) {
  const [longer, shorter] = str1.length >= str2.length ? [str1, str2] : [str2, str1];
  const chars = [...shorter];
  //return [...shorter].every(char => longer.includes(char));
  for (let char of longer) {
    if (char === chars[0]) {
        chars.shift(); 
    }
    if (chars.length === 0) {
        return true; 
    }
  };
  return false;
};
console.log(stringContainChars(s, t));