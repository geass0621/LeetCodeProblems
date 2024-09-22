// const lengthOfLongestSubstring = function (s = '') {
//   let currentLongStr = new Map();
//   let str = '';
//   if (s.length === 0) {
//     return 0;
//   }
//   if (s.length === 1) {
//     return 1;
//   }

//   for (let i = 0; i < s.length; i++) {
//     for (const letter of s.slice(i)) {
//       if (str.includes(letter)) {
//         if (currentLongStr.has(str)) {
//           str = '';
//           break;
//         } else {
//           currentLongStr.set(str.length, str);
//           str = '';
//           break;
//         }
//       } else {
//         str = str + letter;
//       }

//       if (s.indexOf(letter) === s.length - 1) {
//         if (currentLongStr.has(str)) {
//           str = '';
//         } else {
//           currentLongStr.set(str.length, str);
//           str = '';
//         }
//       }
//     }

//     currentLongStr.set(str.length, str);
//     str = '';
//   }



//   return Math.max(...currentLongStr.keys())
// }

// console.log(lengthOfLongestSubstring('aabaab!bb'))


const lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;
  let charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring('aabaab!bb'))