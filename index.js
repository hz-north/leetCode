/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const mergedArray = []; // Array to hold the merged result
  const maxLength = Math.max(word1.length, word2.length); // Get the maximum length

  // Loop through the maximum length
  for (let i = 0; i < maxLength; i++) {
      // Add character from word1 if it exists
      if (i < word1.length) {
          mergedArray.push(word1[i]);
      }
      // Add character from word2 if it exists
      if (i < word2.length) {
          mergedArray.push(word2[i]);
      }
  }

  // Join the mergedArray into a string and return it
  return mergedArray.join(''); // Return as a string
};

// Example usage
const result1 = mergeAlternately("abc", "pqr");
console.log(result1); // Output: "apbqcr"

// Additional example
const result2 = mergeAlternately("ab", "pqrs");
console.log(result2); // Output: "apbqrs"

// Another example
const result3 = mergeAlternately("abcd", "ef");
console.log(result3); // Output: "aebfcd"
