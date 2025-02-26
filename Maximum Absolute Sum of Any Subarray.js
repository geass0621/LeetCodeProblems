// You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

// Return the maximum absolute sum of any (possibly empty) subarray of nums.

// Note that abs(x) is defined as follows:

// If x is a negative integer, then abs(x) = -x.
// If x is a non-negative integer, then abs(x) = x.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let sum = 0, minSum = 0, maxSum = 0;

  for (let num of nums) {
    sum += num;
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < minSum) {
      minSum = sum;
    }
  }

  return Math.abs(maxSum - minSum);
};

let nums = [2, -5, 1, -4, 3, -2];
console.log(maxAbsoluteSum(nums));