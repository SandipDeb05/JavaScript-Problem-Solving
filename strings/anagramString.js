function getFrequencyOfString(str) {
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = ++freq[str[i]] || 1;
  }
  return freq;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freqStr1 = getFrequencyOfString(str1);
  const freqStr2 = getFrequencyOfString(str2);
  for (let char in freqStr1) {
    if (!(char in freqStr2)) return false;
  }
  return true;
}
console.log(isAnagram("adbcs", "abcd"));

function isAnagramOptimize(str1, str2) {
  if (str1.length !== str2.length) return false;
  const lookUp = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookUp[letter] = ++lookUp[letter] || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookUp[letter]) return false;
    lookUp[letter]--;
  }
  return true;
}

console.log(isAnagramOptimize("anagram", "naagram"));
