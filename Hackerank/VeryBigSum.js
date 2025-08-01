function aVeryBigSum(ar) {
    // Write your code here
    const totalSum = ar.reduce((acc, val) => acc + BigInt(val), BigInt(0));
    return totalSum.toString(); // Convert BigInt to string for output
}