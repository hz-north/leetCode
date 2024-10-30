var gcdOfStrings = function(str1, str2) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  function isConstructedFrom(str, pattern) {
    return pattern.repeat(str.length / pattern.length) === str;
  }
  const gcdLength = gcd(str1.length, str2.length);
  const candidate = str1.slice(0, gcdLength);
  if (isConstructedFrom(str1, candidate) && isConstructedFrom(str2, candidate)) {
    return candidate;
  }
  return "";
};