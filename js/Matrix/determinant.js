let Size = document.querySelector(".SizeMatrix");
let N = Size.value;
let matrix = [];
CreateMatrix(N);
Size.oninput = function(){
  for(let i = 0; i < N; i++){
    var elem = document.getElementById("str");
    elem.parentNode.removeChild(elem);
  }
  N = Size.value;
  CreateMatrix(N);
}
let Get = document.querySelector(".Get");
let count = 0;
let det;
Get.onclick = function(){
  if(count != 0) {
    var elem = document.getElementById("result");
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
  }
  }
  GetMatrix(N);
  let B = [], denom = 1, exchanges = 0;
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
  PrintResult();
  count++;
}

function CreateMatrix(n) {
  /* createDocumentFragment создает фрагмент документа, но он не будет сразу же вставлен на страницу
      благодаря этому, мы не будем совершать множество операций, по вставке на страницу строк и ячеек,
      а соберем нужный нам фрагмент, и за один раз вставим все нужные элементы 
      совершить одну вставку  гораздо быстрее и эффективнее, так как при каждом изменение страницы, браузер вынужден перерисовывать ее полностью
  */
  var table = document.createDocumentFragment();
  for (var i = 0; i < n; i++) {
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

function GetMatrix(n){
  for(let i = 0; i < n; i++){
    matrix[i] = [];
    for(let j = 0; j < n; j++){
      let array = document.getElementsByClassName('Elements')[i*n+j];
      matrix[i][j] = array.value;
    }
  }
}
function PrintResult(){
  let div = document.createDocumentFragment();
  let p1 = document.createElement('p');
  p1.innerText += 'В линейной алгебре определитель (или детерминант) — это скалярная величина, которая может быть вычислена и поставлена в однозначное соответствие любой квадратной матрице.';
  let p2 = document.createElement('p');
  p2.innerText += 'Он «определяет» свойства матрицы A. В частности, матрица A обратима тогда и только тогда, когда её определитель является обратимым элементом кольца R.';
  let p3 = document.createElement('p');
  p3.innerText += 'В случае, когда R — поле, определитель матрицы A равен нулю тогда и только тогда, когда ранг матрицы A меньше её размерности или когда системы строк и столбцов матрицы A являются линейно зависимыми.';
  let p4 = document.createElement('p');
  p4.innerText += 'Определитель данной матрицы равен: '
  p4.innerHTML += det;
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
  document.getElementById("result").appendChild(div);
}