let matrix1 = [[]];
let matrix2 = [[]]; 
let m = matrix1.length, n = matrix1[0].length;
let matrRes = [];
for (let i = 0; i < m; i++) {
  matrRes[i] = [];
  for (let j = 0; j < n; j++) C[i][j] = A[i][j]+B[i][j];
}
console.log(matrRes);