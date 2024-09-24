
let matrix = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]


var transpose = function (matrix) {
  for (const row of matrix) {
    row.reverse();
  }

  return matrix = matrix[0].map((val, index) => matrix.map(row => row[row.length - 1 - index]));
};

console.table(matrix);

console.table(transpose(matrix));
