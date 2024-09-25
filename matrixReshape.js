let matrix = [[1, 2], [3, 4]]

var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  mat = mat.flat();
  let matrix = new Array(r).fill(0).map(() => new Array(c).fill(0));
  console.table(matrix)

  for (let i = 0; i < r * c; i++) {
    matrix[Math.floor(i / c)][i % c] = mat[i];
  }

  return matrix;
};

console.table(matrixReshape(matrix, 2, 2))