const arr = [1, 2, 3, 4, 5];
const rotate = 2;
// 4,5,1,2,3

function rotateArray(arr, n) {
  const tempOne = arr.slice(0, arr.length - n);
  const tempTwo = arr.slice(arr.length - n);
  return [...tempTwo, ...tempOne];
}

function rotateArrayOptimize(arr, n) {
  let last, temp;
  for (let i = 0; i < n; i++) {
    last = arr[arr.length - 1];
    for (let j = 0; j < arr.length; j++) {
      temp = arr[j];
      arr[j] = last;
      last = temp;
    }
  }
  return arr;
}

// console.log(rotateArray(arr, rotate));
console.log(rotateArrayOptimize(arr, rotate));
