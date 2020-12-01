// ответы идут в обратном порядке
let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 10]];
let free = [1, 1, 1];
let n = matrix.length;
let x = [];
let d = det(n, matrix);
for(let i=0; i<n; ++i){
    matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 10]];
    x[i] = det2(n, matrix, i, free)/d;
}
console.log(matrix);
console.log(free);
console.log(x);

function det(n, a){
    if(n==1) return a[0][0];
    if(n==2) return a[0][0]*a[1][1]-a[0][1]*a[1][0];
    let s = 0;
    for(let i=0; i<n; ++i){
        let a2 = [[0,0], [0,0]];
        for(let j=0; j<n-1; ++j){
            for(let k=0; k<i; ++k)
                a2[j][k] = a[j+1][k];
            for(let k=i; k<n-1; ++k)
                a2[j][k] = a[j+1][k+1];    
        }
        s+=a[0][i]*det(n-1, a2)*Math.pow(-1, i);
    }
    return s;
}

function det2(n, a, c, b){
    let a2 = a;
    for(let i=0; i<n; ++i)
        a2[i][c] = b[i];
    return det(n, a2);
}