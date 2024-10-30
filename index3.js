var gcdOfStrings = function(str1, str2) {
  let match = "";
  const minLength = Math.min(str1.length, str2.length);
  const maxLengthString = str1.length > str2.length ? str1 : str2;
  const minLengthString = str1.length < str2.length ? str1 : str2;
  function isRecursive(str) {
    const length = str.length; 
    for (let i = 1; i <= length / 2; i++) {
        if (length % i === 0) {
          const substring = str.substring(0, i);
            if (substring.repeat(length / i) === str) {
                return true;
          };
        }
    }
    return false;
  }
  const filtered = isRecursive(maxLengthString);
  console.log(filtered);
  if (filtered) {
    for (let i = 0 ; i <= minLength; i++){
      if(str1[i] === str2[i]){
          match += minLengthString[i];
      }else{
        break;
      } 
    }
    const halfLength = Math.floor(match.length / 2);
    if (match.slice(0, halfLength) === match.slice(halfLength)) {
      return match.slice(0, halfLength);
    }
    return match;
  } else {
    return "";
  }
};
str1 = "ABCABC", str2 = "ABCABCABC"
let assigned = gcdOfStrings(str1, str2);
console.log(assigned);
console.log(gcdOfStrings("ABCDEFABCDEF", "ABCDEF"));