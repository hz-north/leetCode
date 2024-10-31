var gcdOfStrings = function(str1, str2) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  const gcdLength = gcd(str1.length, str2.length); 6
  const candidate = str1.slice(0, gcdLength); 
  function isConstructedFrom(str, pattern) {
    return pattern.repeat(str.length / pattern.length) === str;
  }
  if (isConstructedFrom(str1, candidate) && isConstructedFrom(str2, candidate)) {
    return candidate;
  }
  return "";
};
console.log(gcdOfStrings( "abcdef" ,"abcdefabcdefabcdef" ));
// 6 , 18

// 18, 6

// 6 , 0