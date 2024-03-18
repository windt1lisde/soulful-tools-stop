// zenith-insights.js

const _ = require('lodash');

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Function to check if a number is a perfect square
function isPerfectSquare(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
}

// Function to generate Fibonacci sequence up to a specified length
function fibonacciSequence(length) {
  const sequence = [0, 1];
  for (let i = 2; i < length; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

module.exports = {
  factorial,
  isPerfectSquare,
  fibonacciSequence
};
