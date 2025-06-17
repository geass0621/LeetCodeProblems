// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.



// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.


// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


// Follow up: Can you find an O(n) solution?

/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function (nums) {
//   let firstMax = -Infinity, secondMax = -Infinity, thirdMax = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     const n = nums[i];
//     if (n === firstMax || n === secondMax || n === thirdMax) continue;
//     if (n > firstMax) {
//       thirdMax = secondMax;
//       secondMax = firstMax;
//       firstMax = n;
//     } else if (n > secondMax) {
//       thirdMax = secondMax;
//       secondMax = n;
//     } else if (n > thirdMax) {
//       thirdMax = n;
//     }
//   }

//   return thirdMax === -Infinity ? firstMax : thirdMax;
// };


// console.log(thirdMax([1, 2]));



// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

console.log(removeDuplicates([1, 1, 2]));