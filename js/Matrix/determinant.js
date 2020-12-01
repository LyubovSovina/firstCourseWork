let matrix = [[]];
let N = matrix.length, B = [], denom = 1, exchanges = 0;
let det;
for (var i = 0; i < N; ++i) {
  B[i] = [];
  for (var j = 0; j < N; ++j) B[i][j] = matrix[i][j];
}
for (var i = 0; i < N-1; ++i) {
  var maxN = i, maxValue = Math.abs(B[ i ][ i ]);
  for (var j = i+1; j < N; ++j) {
    var value = Math.abs(B[j][ i ]);
    if (value > maxValue){ maxN = j; maxValue = value; }
  }
  if (maxN > i) {
    var temp = B[i]; 
    B[i] = B[maxN]; 
    B[maxN] = temp;
    ++exchanges;
  }
  else if (maxValue == 0) det = maxValue; 
  var value1 = B[i][i];
  for (var j = i+1; j < N; ++j) {
    var value2 = B[j][i];
    B[j][i] = 0;
    for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[ i ][k]*value2)/denom;
  }
  denom = value1;
}
if (exchanges%2) det = -B[N-1][N-1];
else det = B[N-1][N-1];
console.log(det);