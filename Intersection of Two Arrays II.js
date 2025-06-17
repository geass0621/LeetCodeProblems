// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map1 = new Map();

  for (let num of nums1) {
    if (!map1.has(num)) {
      map1.set(num, 1);
    } else {
      let count = map1.get(num);
      count = count + 1;
      map1.set(num, count);
    }
  }

  const res = [];
  for (let num of nums2) {
    if (map1.has(num) && map1.get(num) > 0) {
      res.push(num);
      map1.set(num, map1.get(num) - 1);
    }
  }
  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));