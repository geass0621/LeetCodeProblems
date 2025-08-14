function palindromeIndex(s) {
    // Write your code here
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Check if removing left character makes it a palindrome
            if (isPalindrome(s.slice(left + 1, right + 1))) {
                return left;
            }
            // Check if removing right character makes it a palindrome
            if (isPalindrome(s.slice(left, right))) {
                return right;
            }
            return -1; // Not a palindrome even after one removal
        }
        left++;
        right--;
    }
    return -1; // Already a palindrome
}

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}