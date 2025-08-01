// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference

function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][arr.length - 1 - i];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}