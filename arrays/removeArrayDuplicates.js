const arr1 = [1, 2, 3, 4, 2, 1, 2, 5];

// TODO contains only one duplicate of 1 to n element array O(N)
function findDuplicate(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum - (n * (n + 1)) / 2;
}
const arr2 = [1, 2, 2, 3, 4, 5];
console.log(findDuplicate(arr2, 2));
