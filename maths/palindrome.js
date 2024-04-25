function reverseNumber(num) {
  let res = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    res = res * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return res;
}

function isPalindromeNumber(num) {
  const reverseNum = reverseNumber(num);
  return num === reverseNum;
}

console.log(isPalindromeNumber(12321));

function isPalindromeString(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++, j--;
  }
  return true;
}

console.log(isPalindromeString("aabcbaa"));
