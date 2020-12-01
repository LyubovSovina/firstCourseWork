let matrix = [[]];
let m = matrix.length;
let n = matrix[0].length;
let matrixT = [];
    for (var i = 0; i < n; i++) { 
        matrixT[i] = [];
        for (var j = 0; j < m; j++) 
            matrixT[i][j] = matrix[j][i];
    }