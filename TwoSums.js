/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15];
let target = 9;
const twoSum = function (nums, target) {
  let nums2 = nums.filter(x => x < target);
  for (let i = 0; i < nums2.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(twoSum(nums, target));


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
