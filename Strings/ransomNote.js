// LeetCode 383 — Ransom Note
// Pattern: Frequency Counting
// Time: O(n + m) | Space: O(k)

function canConstruct(ransomNote, magazine) {
  const freq = new Map();

  for (const char of magazine) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    if (!freq.has(char) || freq.get(char) === 0) {
      return false;
    }

    freq.set(char, freq.get(char) - 1);
  }

  return true;
}

console.log(canConstruct("a", "b"));   // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
