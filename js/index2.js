var createCounter = function (n) {
  return function () {
    if (n < 0) {
      // Increment until zero
      let result = [n];
      while (n < 0) {
        n += 1;
        result.push(n);
      }
      // After zero, add +1 twice
      result.push(n + 1);
      result.push(n + 2);
      return result;
    } else {
      // For positive n, just add +1 twice
      return [n, n + 1, n + 2];
    }
  };
};

// Example Usage:
let counter = createCounter(1);
console.log(counter()); // Output: [1, 2, 3]

counter = createCounter(-2);
console.log(counter()); // Output: [-2, -1, 0, 1, 2]
