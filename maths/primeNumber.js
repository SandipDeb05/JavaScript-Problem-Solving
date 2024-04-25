function isPrimeNumber(num) {
  if (num <= 1) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printNPrimeNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (isPrimeNumber(i)) console.log(i);
  }
}

printNPrimeNumbers(100);
