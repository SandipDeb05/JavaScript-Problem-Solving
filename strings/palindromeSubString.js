function isPalindrome(str, i, j) {
  let left = i,
    right = j;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++, right--;
  }
  return true;
}

function countPalindromeSubString(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (isPalindrome(str, i, j)) count++;
    }
  }
  return count;
}

console.log(countPalindromeSubString("abc"));
