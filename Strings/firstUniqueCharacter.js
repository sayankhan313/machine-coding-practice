// LeetCode 387 — First Unique Character in a String
// Pattern: Frequency Counting
// Time: O(n) | Space: O(k), k = distinct characters

function firstUniqChar(s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode"));     // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb"));         // -1
