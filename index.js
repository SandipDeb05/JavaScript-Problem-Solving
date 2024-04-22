// TODO WAP to reverse a string

// Using JS in-built method O(N)
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Without using in-built mehtod O(N)
function reverseString2(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
}

// console.log(reverseString2("sandip_deb")); // bed_pidnas

// TODO WAF to remove duplicates from an array
const arr = [5, 4, 10, 4, 11, 3, 2, 1, 1];

// Uses two nested loops to iterate over the array and check for duplicates
function removeDuplicates(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) res.push(arr[i]);
  }
  return res;
}
// Utilizes the Set data structure to automatically handle duplicates
function removeDuplicates2(arr) {
  return [...new Set(arr)];
}
// Uses an object to keep track of unique elements encountered
function removeDuplicates3(arr) {
  const cache = {};
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (!cache[el]) {
      cache[el] = true;
      res.push(el);
    }
  }
  return res;
}
// console.log(removeDuplicates3(arr)); // [5, 4, 10, 11, 3, 2, 1]

// TODO WAF to find the largest word in a sentence
// const str = "Every sunset brings the promise of a new dawn.";

function getLargestWordInASentence(str) {
  const strArr = str.split(" ");
  let largestWordIndex = 0;
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[largestWordIndex].length < strArr[i].length) {
      largestWordIndex = i;
    }
  }
  return strArr[largestWordIndex];
}

// console.log(getLargestWordInASentence(str)); // promise

// TODO WAF to capitalize the first letter of all the words in a sentence.

const str =
  "The stars danced in the velvet sky, whispering secrets to the silent moon.";

function capitalizeFirstWordInASentence(str) {
  const strArr = str.split(" ");
  let res = [];
  for (let i = 0; i < strArr.length; i++) {
    res.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
  }
  return res.join(" ");
}

// console.log(capitalizeFirstWordInASentence(str));

// TODO Guess the output
var num = 10;

function printNum() {
  console.log(num);
  var num = 20;
  console.log(num);
}

// printNum();

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(..."sandip");

const arr2 = ["a", "b", "c", "d", "e", "f", "g"];

function get2ndElementFromArray(arr) {
  return arr[arr.length - 2];
}

console.log(get2ndElementFromArray(arr2));

const multiply = (a, b) => {
  return a * b;
};

function curriedMul(a) {
  return function (b) {
    return a * b;
  };
}

const mulBy2 = curriedMul(2);

console.log(mulBy2(3));
// console.log("2" - "3"); // -1

// const obj = {
//   name: "Sandip",
//   age: 25,
//   hobbies: ["book reading", "photography", "learning"],
//   address: {
//     city: "silchar",
//     state: "assam",
//     pin: 788014,
//   },
// };
// const copyObj = JSON.parse(JSON.stringify(obj));

// console.log("obj", obj);

// obj.address.city = null;
// console.log("copy", copyObj);

// const obj = {
//   name: "John",
//   normalFunc: function () {
//     console.log(this.name); // Output: "John" (this refers to obj)
//   },
//   arrowFunc: () => {
//     console.log(this.name); // Output: undefined (this refers to the global object)
//   },
// };

// // obj.normalFunc(); // Output: "John"
// const help = obj.normalFunc.bind(obj); // Output: undefined
// help();

/*
 TODO Find the missing number in an array contains all positive integers 
 from 1 to N except one, and no duplicates
*/
const nums = [2, 1, 5, 3];

function getTheMissingNumber(nums) {
  const n = nums.length + 1; // since one number is missing
  const sumOfNNumbers = (n * (n + 1)) / 2; // sum of N natural numbers
  const sumOfNums = nums.reduce((acc, curr) => acc + curr, 0); // sum of all the numbers in nums
  return sumOfNNumbers - sumOfNums; // difference is the missing number
}

console.log(getTheMissingNumber(nums)); // 4
