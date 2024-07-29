function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function displayFibRecursively(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = fibonacciRecursive(i);
  }
  return array;
}

console.log("8 Fibonacci terms: ", displayFibRecursively(8));
console.log("10 Fibonacci terms: ", displayFibRecursively(10));
