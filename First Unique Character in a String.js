// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1



// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      let count = map.get(s[i]);
      count = count + 1;
      map.set(s[i], count);
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j]) && map.get(s[j]) === 1) {
      return j
    }
  }

  return -1;

};

console.log(firstUniqChar("aabb"));