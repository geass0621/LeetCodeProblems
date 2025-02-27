// Given two binary strings a and b, return their sum as a binary string.



// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aBigint = BigInt('0b' + a);
  let bBigint = BigInt('0b' + b);
  let sum = aBigint + bBigint;
  return sum.toString(2);
};

let a = "1010", b = "1011";
console.log(addBinary(a, b)); // 100
a = "11", b = "1";
console.log(addBinary(a, b)); // 100
a = "0", b = "0";
console.log(addBinary(a, b)); // 0