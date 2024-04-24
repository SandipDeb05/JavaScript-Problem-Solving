const str = "Dogs are better than cats";

function reverseString(str) {
  if (str.length === 1) return str;
  return reverseString(str.slice(1)) + str.charAt(0);
}

console.log(reverseString(str));
