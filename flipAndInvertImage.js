let input = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]


var flipAndInvertImage = function (image) {
  return image.map(row => row.map(x => 1 - x).reverse())
};

arr = Array.from([1, 1, 0, 0]);
console.log(arr);

console.table(flipAndInvertImage(input));