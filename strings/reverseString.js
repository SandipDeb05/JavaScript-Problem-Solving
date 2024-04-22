const str = "Cats run faster than dogs";

// TODO letter by letter reverser O(N)
function reverseStringLetterByLetter(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res = res.concat(str[i]);
  }
  return res;
}

// TODO Word By Word reverse O(logN)
function reverseStringWordByWord(str) {
  let strArr = str.split(" ");
  let i = 0,
    j = strArr.length - 1;
  while (i < j) {
    let temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++, j--;
  }
  return strArr.join(" ");
}

// TODO Reverse only the letters in-order O(NxM)
function reserverLettersInOrder(str) {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = reverseStringLetterByLetter(strArr[i]);
  }
  return strArr.join(" ");
}

// TODO Reverse a string using recursion.
function reverseStringRecursion(str) {
  if (str.length <= 1) return str;
  return reverseStringRecursion(str.slice(1)) + str[0];
}

console.log(reserverLettersInOrder(str));
