matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 10]];
free = [1, 1, 1];
let s;
for (let k = 0; k < 3; k++)
{
    for (let j = k + 1; j < 3; j++)
    {
        d = matrix[j][k] / matrix[k][k];
        for (let i = k; i < 3; i++)
            matrix[j][i] -= d * matrix[k][i];
        free[j] -= d * free[k];
    }
}
for (let k = 2; k >= 0; k--)
{
    d = 0;
    for (let j = k + 1; j < 3; j++)
    {
        s = matrix[k][j] * x[j];
        d = d + s;
    }
    x[k] = (free[k] - d) / matrix[k][k];
}
console.log(matrix);
console.log(free);
console.log(x);
