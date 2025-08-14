function caesarCipher(s, k) {
    // Write your code here
  // s is the string to be encrypted
  // k is the shift value
  k = k % 26; // Normalize k to be within 0-25
  let result = '';
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      // Encrypt uppercase letters
      if (char >= 'A' && char <= 'Z') {
          result += String.fromCharCode(((char.charCodeAt(0) - 65 + k) % 26) + 65);
      }
      // Encrypt lowercase letters
      else if (char >= 'a' && char <= 'z') {
          result += String.fromCharCode(((char.charCodeAt(0) - 97 + k) % 26) + 97);
      }
      // Leave non-alphabetic characters unchanged
      else {
          result += char;
      }
  }
  return result;
}