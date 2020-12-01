let matrix = [[]];  
let det = Determinant(matrixmatrix);
if (det == 0) console.log(false);
let N =matrix.length;
matrix = AdjugateMatrix(matrix);
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) matrix[i][j] /= det; 
}
console.log(matrix);

function AdjugateMatrix(A) 
{                                        
    let N = A.length, adjA = [];
    for (let i = 0; i < N; i++)
     { adjA[i] = [];
       for (let j = 0; j < N; j++)
        { let B = [], sign = ((i+j)%2==0) ? 1 : -1;
          for (let m = 0; m < j; m++)
           { B[m] = [];
             for (let n = 0; n < i; n++)   B[m][n] = A[m][n];
             for (let n = i+1; n < N; n++) B[m][n-1] = A[m][n];
           }
          for (let m = j+1; m < N; m++)
           { B[m-1] = [];
             for (let n = 0; n < i; n++)   B[m-1][n] = A[m][n];
             for (let n = i+1; n < N; n++) B[m-1][n-1] = A[m][n];
           }
          adjA[ i ][j] = sign*Determinant(B);   // Функцию Determinant см. выше
        }
     }
    return adjA;
}

function Determinant(A)   // Используется алгоритм Барейса
{
    let N = A.length, B = [], denom = 1, exchanges = 0;
    for (let i = 0; i < N; ++i)
     { B[i] = [];
       for (let j = 0; j < N; ++j) B[i][j] = A[i][j];
     }
    for (let i = 0; i < N-1; ++i)
     { let maxN = i, maxValue = Math.abs(B[i][i]);
       for (let j = i+1; j < N; ++j)
        { let value = Math.abs(B[j][i]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { let temp = B[i]; B[i] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       let value1 = B[i][i];
       for (let j = i+1; j < N; ++j)
        { let value2 = B[j][i];
          B[j][ i ] = 0;
          for (let k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[ i ][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}