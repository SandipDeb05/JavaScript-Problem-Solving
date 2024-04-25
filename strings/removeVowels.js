const str = "The quick brown fox jumps over the lazy dog.";

function removeVowels(str) {
  let res = "";
  const VOWELS = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let isContainVowels = VOWELS.includes(str[i].toLowerCase());
    if (!isContainVowels) res = res.concat(str[i]);
  }
  return res;
}

console.log(removeVowels(str));
