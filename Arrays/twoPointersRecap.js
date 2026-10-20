// DSA REVISION — WEEK 2: TWO POINTERS

// 1. Move Zeroes (LeetCode 283)
// Pattern: Reader–Writer
// Time: O(n) | Space: O(1)

function moveZeroes(nums) {
  let reader = 0;
  let writer = 0;

  while (reader < nums.length) {
    if (nums[reader] !== 0) {
      nums[writer] = nums[reader];
      writer++;
    }
    reader++;
  }

  while (writer < nums.length) {
    nums[writer] = 0;
    writer++;
  }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log("Move Zeroes:", arr);


// 2. Two Sum II (LeetCode 167)
// Pattern: Left–Right
// Time: O(n) | Space: O(1)

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }

  return [];
}

console.log("Two Sum II:", twoSum([2, 7, 11, 15], 9));
