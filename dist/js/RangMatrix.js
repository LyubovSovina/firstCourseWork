let Size1 = document.querySelector(".SizeMatrixm");
let m = Size1.value;
let Size2 = document.querySelector(".SizeMatrixn");
let n = Size2.value;
let matrix = [];
CreateMatrix(m, n);
Size1.oninput = function(){
  for(let i = 0; i < m; i++){
    var elem = document.getElementById("str");
    elem.parentNode.removeChild(elem);
  }
  m = Size1.value;
  CreateMatrix(m,n);
}
Size2.oninput = function(){
  for(let i = 0; i < m; i++){
    var elem = document.getElementById("str");
    elem.parentNode.removeChild(elem);
  }
  n = Size2.value;
  CreateMatrix(m,n);
}
let Get = document.querySelector(".Get");
let count = 0;
Get.onclick = function(){
  if(count != 0) {
    var elem = document.getElementById("result");
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
  }
  }
  GetMatrix(m,n);
  let k = (m < n ? m : n), r = 1, rang = 0;
  while (r <= k) {
    let B = [];
    for (let i = 0; i < r; i++) B[i] = [];
    for (let a = 0; a < m-r+1; a++) {
      for (let b = 0; b < n-r+1; b++) {
        for (let c = 0; c < r; c++) {
          for (let d = 0; d < r; d++) B[c][d] = matrix[a+c][b+d]; 
       }
        if (Determinant(B) != 0) rang = r;
      }       
    }
    r++;
  }
  PrintResult(rang);
  count++;
}

function CreateMatrix(m,n) {
  /* createDocumentFragment создает фрагмент документа, но он не будет сразу же вставлен на страницу
      благодаря этому, мы не будем совершать множество операций, по вставке на страницу строк и ячеек,
      а соберем нужный нам фрагмент, и за один раз вставим все нужные элементы 
      совершить одну вставку  гораздо быстрее и эффективнее, так как при каждом изменение страницы, браузер вынужден перерисовывать ее полностью
  */
  var table = document.createDocumentFragment();
  for (var i = 0; i < m; i++) {
      var tr = document.createElement('tr');
      tr.id = 'str';
      for(var j = 0; j < n; j++) {
          var td = document.createElement('td');
          var input=document.createElement('input');
          input.type = 'number';
          input.className = 'Elements';
          input.value = null;
          td.appendChild(input);
          tr.appendChild(td);
      }
      table.appendChild(tr);
  }
  document.getElementById('matrix').appendChild(table);
}

function GetMatrix(m, n){
  for(let i = 0; i < m; i++){
    matrix[i] = [];
    for(let j = 0; j < n; j++){
      let array = document.getElementsByClassName('Elements')[i*n+j];
      matrix[i][j] = array.value;
    }
  }
}
function PrintResult(rang){
  let div = document.createDocumentFragment();
  let p1 = document.createElement('p');
  p1.innerText += 'Рангом системы строк (столбцов) матрицы {\displaystyle A}A с {\displaystyle m}m строк и {\displaystyle n}n столбцов называется максимальное число линейно независимых строк (столбцов). Несколько строк (столбцов) называются линейно независимыми, если ни одна из них не выражается линейно через другие.';
  let p2 = document.createElement('p');
  p2.innerText += 'Ранг системы строк всегда равен рангу системы столбцов, и это число называется рангом матрицы. Ранг матрицы — наивысший из порядков всевозможных ненулевых миноров этой матрицы.';
  let p3 = document.createElement('p');
  p3.innerText += 'Ранг нулевой матрицы любого размера ноль. Если все миноры второго порядка равны нулю, то ранг равен единице, и т.д.';
  let p4 = document.createElement('p');
  p4.innerText += 'Ранг данной матрицы равен: '
  p4.innerHTML += rang;
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
  document.getElementById("result").appendChild(div);
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