// LeetCode 242 — Valid Anagram
// Pattern: Frequency Counting
// Time: O(n) | Extra Space: O(k), k = distinct characters

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!freq.has(char)) {
      return false;
    }

    const count = freq.get(char);

    if (count === 1) {
      freq.delete(char);
    } else {
      freq.set(char, count - 1);
    }
  }

  return freq.size === 0;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car"));       // false
