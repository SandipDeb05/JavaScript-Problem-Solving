function findFactorial(num) {
  if (num < 0) return undefined;
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
}

function findFactorialRecursive(num) {
  if (num <= 1) return 1;
  return num * findFactorialRecursive(num - 1);
}

console.log(findFactorialRecursive(5));
