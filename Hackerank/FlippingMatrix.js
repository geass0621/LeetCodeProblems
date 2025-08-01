/**
 I neet to find the maximum sum of the top-left quadrant of a matrix after flipping rows and columns.
 The matrix is of size 2n x 2n, where n is even.
 */

function flippingMatrix(matrix) {
    // Write your code here
    const n = matrix.length / 2;
    let topLeftSum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const topLeft = matrix[i][j];
            const topRight = matrix[i][2 * n - 1 - j];
            const bottomLeft = matrix[2 * n - 1 - i][j];
            const bottomRight = matrix[2 * n - 1 - i][2 * n - 1 - j];

            // Take the maximum of the four quadrants
            topLeftSum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
        }
    }
    return topLeftSum;
}

const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
];
console.log(flippingMatrix(matrix));