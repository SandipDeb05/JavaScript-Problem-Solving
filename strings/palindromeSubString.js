// TODO WAF to return the number of palindromic substrings in it.
// NOTE: A string is a palindrome when it reads the same backward as forward.
// NOTE: A substring is a contiguous sequence of characters within the string.

function isPalindrome(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++, j--;
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

console.log(countPalindromeSubString("abc")); // 3 -> "a", "b", "c".
console.log(countPalindromeSubString("aaa")); // 1 -> "a", "a", "a", "aa", "aa", "aaa".
