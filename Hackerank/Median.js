

function findMedian(arr) {
    // Write your code here
    const sortedArr = arr.sort((a, b) => a - b);
    const midIndex = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 === 1 ? sortedArr[midIndex] : (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
}


findMedian([1, 2, 3, 4, 5]); // Output: 3