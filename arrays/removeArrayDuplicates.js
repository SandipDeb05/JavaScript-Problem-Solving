const arr1 = [11, 2, 3, 43, 2, 11, 2, 35];

function removeAllDuplicates(arr) {
  const lookUp = {};
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in lookUp) {
      continue;
    } else {
      res.push(arr[i]);
      lookUp[arr[i]] = true;
    }
  }
  console.log(lookUp);
  return res;
}

console.log(removeAllDuplicates(arr1));

console.log([...new Set(arr1)]);

// TODO contains only one duplicate of 1 to n element array O(N)
function findDuplicate(arr, n = arr.length - 1) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum - (n * (n + 1)) / 2;
}
const arr2 = [1, 2, 2, 3, 4, 5];
// console.log(findDuplicate(arr2));

// TODO Given an array of numbers from 1 to N, with one missing number, WAF to find the missing number.
function findMissingNumber(arr) {
  const lengthOfArray = arr.length + 1;
  let sum = 0;
  for (let i = 0; i < lengthOfArray - 1; i++) {
    sum += arr[i];
  }
  const sumOfNNumbers = (lengthOfArray * (lengthOfArray + 1)) / 2;
  return sumOfNNumbers - sum;
}
const arr3 = [1, 2, 3, 4, 6, 7];
// console.log(findMissingNumber(arr3));
