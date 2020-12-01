let matrix = [[]];
let n;
let matrixN = MatrixPow(n, matrix);

function MatrixPow(n,A)
{ 
    if (n == 1) return A;
    else return MultiplyMatrix(A, MatrixPow(n-1,A));
}

function MultiplyMatrix(A,B)
{
    let rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (let i = 0; i < rowsA; i++) C[i] = [];
    for (let k = 0; k < colsB; k++)
     { for (let i = 0; i < rowsA; i++)
        { let t = 0;
          for (let j = 0; j < rowsB; j++) t += A[i][j]*B[j][k];
          C[i][k] = t;
        }
     }
    return C;
}

console.log(matrixN);