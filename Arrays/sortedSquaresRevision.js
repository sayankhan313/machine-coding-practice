// LeetCode 977 — Squares of a Sorted Array
// Pattern: Left–Right Two Pointers
// Time: O(n) | Extra Space: O(n)

function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let position = nums.length - 1;
  const result = new Array(nums.length);

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[position] = leftSquare;
      left++;
    } else {
      result[position] = rightSquare;
      right--;
    }

    position--;
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
// [0, 1, 9, 16, 100]
