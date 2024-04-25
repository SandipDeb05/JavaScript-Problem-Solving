// Fibonacci series = 0 1 1 2 3 5 8 13 ...

function printFibonacciSeries(n) {
  let fib1 = 0,
    fib2 = 1,
    fib3 = 1;
  console.log(fib1);
  console.log(fib2);
  while ((fib3 = fib1 + fib2) < n) {
    console.log(fib3);
    fib1 = fib2;
    fib2 = fib3;
  }
}

function fibonacciAtIndex(n) {
  if (n <= 1) return n;
  let fib1 = 0,
    fib2 = 1;
  for (let i = 2; i <= n; i++) {
    let fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }
  return fib2;
}

// printFibonacciSeries(10);
// console.log(fibonacciAtIndex(7));

function printFibonacciAtIndexRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return (
      printFibonacciAtIndexRecursive(n - 1) +
      printFibonacciAtIndexRecursive(n - 2)
    );
  }
}

function printFibonacciSeriesRecursive(n, i = 0) {
  const fibNum = printFibonacciAtIndexRecursive(i);
  if (fibNum <= n) {
    console.log(fibNum);
    printFibonacciSeriesRecursive(n, i + 1);
  }
}
// printFibonacciSeriesRecursive(5);
