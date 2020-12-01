let matrix1 = [[]];
let matrix2 = [[]];
let rows1 = matrix1.length, cols1 = matrix1[0].length;
let rows2 = matrix2.length, cols2 = matrix2[0].length;
let matrRes = [];
if (cols1 != rows2) console.log(false);
for (let i = 0; i < rows1; i++) matrRes[i] = [];
for (let k = 0; k < cols2; k++) {
  for (let i = 0; i < rows1; i++) {
    let t = 0;
    for (let j = 0; j < rowsB; j++) 
      t += matrix1[i][j]*matrix2[j][k];
    matrRes[i][k] = t;
  }
}
console.log(matrRes);