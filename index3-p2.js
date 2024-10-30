var gcdOfStrings = function(str1, str2) {
  function isConstructedFrom(str, pattern) {
    const repeatedPattern = pattern.repeat(str.length / pattern.length);
    return repeatedPattern === str;
  }
  const minLength = Math.min(str1.length, str2.length);
  let match = "";
  for (let i = 0; i < minLength; i++) {
    if (str1[i] === str2[i]) {
      match += str1[i];
    } else {
      break;
    }
  }
  for (let len = match.length; len > 0; len--) {
    const candidate = match.slice(0, len);
    if (
      isConstructedFrom(str1, candidate) &&
      isConstructedFrom(str2, candidate)
    ) {
      return candidate;
    }
  }
  return "";
};

// Test cases
console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")); // Output: "TAUXX"
console.log(gcdOfStrings("ABCABC", "ABCABCABC")); // Output: "ABC"
console.log(gcdOfStrings("ABCDEF", "AB")); // Output: ""
