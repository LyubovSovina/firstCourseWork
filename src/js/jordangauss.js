let Size = document.querySelector(".SizeMatrix");
let N = Size.value;
let matrix = [];
CreateMatrix(N);
CreateFree(N);
Size.oninput = function(){
  for(let i = 0; i < 2*N; i++){
    var elem = document.getElementById("str");
    elem.parentNode.removeChild(elem);
  }
  N = Size.value;
  CreateMatrix(N);
  CreateFree(N);
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
  GetMatrix(N);
  let x = [];
    for (let k = 0; k < N; k++)
  {
      for (let j = k + 1; j < N; j++)
      {
          d = matrix[j][k] / matrix[k][k];
          for (let i = k; i < N; i++)
              matrix[j][i] -= d * matrix[k][i];
          free[j] -= d * free[k];
      }
  }
  for (let k = N-1; k > 0; k--)
  {
      for (let j = k-1; j >= 0; j--)
      {
          d = matrix[j][k] / matrix[k][k];
          for (let i = k; i < N; i++)
              matrix[j][i] -= d * matrix[k][i];
          free[j] -= d * free[k];
      }
  }
  for (let k = 0; k < N; k++) x[k] = free[k] / matrix[k][k];
  PrintResult(matrix, free, x, N);
  count++;
}

function CreateMatrix(m) {
  /* createDocumentFragment создает фрагмент документа, но он не будет сразу же вставлен на страницу
      благодаря этому, мы не будем совершать множество операций, по вставке на страницу строк и ячеек,
      а соберем нужный нам фрагмент, и за один раз вставим все нужные элементы 
      совершить одну вставку  гораздо быстрее и эффективнее, так как при каждом изменение страницы, браузер вынужден перерисовывать ее полностью
  */
  var table = document.createDocumentFragment();
  for (var i = 0; i < m; i++) {
      var tr = document.createElement('tr');
      tr.id = 'str';
      for(var j = 0; j < m; j++) {
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
function CreateFree(m) {
    /* createDocumentFragment создает фрагмент документа, но он не будет сразу же вставлен на страницу
        благодаря этому, мы не будем совершать множество операций, по вставке на страницу строк и ячеек,
        а соберем нужный нам фрагмент, и за один раз вставим все нужные элементы 
        совершить одну вставку  гораздо быстрее и эффективнее, так как при каждом изменение страницы, браузер вынужден перерисовывать ее полностью
    */
    var table = document.createDocumentFragment();
    for (var i = 0; i < m; i++) {
        var tr = document.createElement('tr');
        tr.id = 'str';
        var td = document.createElement('td');
        var input=document.createElement('input');
        input.type = 'number';
        input.className = 'Free';
        input.value = null;
        td.appendChild(input);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    document.getElementById('free').appendChild(table);
  }

function GetMatrix(m){
  for(let i = 0; i < m; i++){
    matrix[i] = [];
    for(let j = 0; j < m; j++){
      let array = document.getElementsByClassName('Elements')[i*m+j];
      matrix[i][j] = array.value;
    }
  }
  for(let i = 0; i < m; i++){
    let array = document.getElementsByClassName('Free')[i];
    free[i] = array.value;
  }
}
function PrintResult(matr, free, x, m){
  let div = document.createDocumentFragment();
  let p1 = document.createElement('p');
  p1.innerText += 'Метод Гаусса — Жордана (метод полного исключения неизвестных) — метод, который используется для решения квадратных систем линейных алгебраических уравнений, нахождения обратной матрицы, нахождения координат вектора в заданном базисе или отыскания ранга матрицы.';
  let p2 = document.createElement('p');
  p2.innerText += ' Метод является модификацией метода Гаусса. Назван в честь К. Ф. Гаусса и немецкого геодезиста и математика Вильгельма Йордана.';
  let p3 = document.createElement('p');
  p3.innerText += 'Преобразованная матрица равна: '
  let table1 = document.createElement('table');
  for (var i = 0; i < m; i++) {
    var tr1 = document.createElement('tr');
    for(var j = 0; j < m; j++) {
        var td1 = document.createElement('td');
        td1.innerHTML = matr[i][j];
        tr1.appendChild(td1);
    }
    table1.appendChild(tr1);
  }
  let p4 = document.createElement('p');
  p4.innerText += 'Матрица свободных членов равна: '
  let table2 = document.createElement('table');
  var tr2 = document.createElement('tr');
  for (var i = 0; i < m; i++) {
    var td2 = document.createElement('td');
    td2.innerHTML = free[i];
    tr2.appendChild(td2);
  }
  table2.appendChild(tr2);
  let p5 = document.createElement('p');
  p5.innerText += 'Решение данной системы линейных уравнений: '
  let table3 = document.createElement('table');
  var tr3 = document.createElement('tr');
  for (var i = 0; i < m; i++) {
    var td3 = document.createElement('td');
    td3.innerText += " x" + i + " = ";
    td3.innerHTML += x[i];
    tr3.appendChild(td3);
  }
  table3.appendChild(tr3);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(table1);
  div.appendChild(p4);
  div.appendChild(table2);
  div.appendChild(p5);
  div.appendChild(table3);
  document.getElementById("result").appendChild(div);
}