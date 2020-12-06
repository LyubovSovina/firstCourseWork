let Size1 = document.querySelector(".SizeMatrixm");
let m = Size1.value;
let Size2 = document.querySelector(".SizeMatrixn");
let n = Size2.value;
let matrix = [];
CreateMatrix(m, n);
CreateFree(m);
Size1.oninput = function(){
  for(let i = 0; i < 2*m; i++){
    var elem = document.getElementById("str");
    elem.parentNode.removeChild(elem);
  }
  m = Size1.value;
  CreateMatrix(m,n);
  CreateFree(m);
}
Size2.oninput = function(){
  for(let i = 0; i < 2*m; i++){
    var elem = document.getElementById("str");
    elem.parentNode.removeChild(elem);
  }
  n = Size2.value;
  CreateMatrix(m,n);
  CreateFree(m);
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
  let x = [];
  let s;
  for (let k = 0; k < n; k++) {
    for (let j = k + 1; j < m; j++)
    {
        d = matrix[j][k] / matrix[k][k];
        for (let i = k; i < n; i++)
            matrix[j][i] -= d * matrix[k][i];
        free[j] -= d * free[k];
    }
  }

  for (let k = m-1; k >=0; k--) {
    d = 0;
    for (let j = k + 1; j < n; j++)
        {
          if(x[j]!=undefined)
          s = matrix[k][j] * x[j];
          d += s;
          x[k] = (free[k] - d) / matrix[k][k];
        }
    }
    console.log(x);
    for (let k = m-1; k >= 0; k--) {  
        for (let j = k + 1; j < n; j++)
        if(x[j] == undefined){
          x[j] = matrix[k][j] +'r'+ k;
          for(let i = 0; i < j; i++){
            s = matrix[i][j] + x[j];
            x[k] += s; 
          }
          
        }                  
  }
  PrintResult(matrix, free, x, m, n);
  count++;
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
  for(let i = 0; i < m; i++){
    let array = document.getElementsByClassName('Free')[i];
    free[i] = array.value;
  }
}

function PrintResult(matr, free, x, m, n){
    let div = document.createDocumentFragment();
    let p1 = document.createElement('p');
    p1.innerText += 'Метод Крамера (правило Крамера) — способ решения систем линейных алгебраических уравнений с числом уравнений равным числу неизвестных с ненулевым главным определителем матрицы коэффициентов системы (причём для таких уравнений решение существует и единственно).';
    let p2 = document.createElement('p');
    p2.innerText += 'Преобразованная матрица равна: '
    let table1 = document.createElement('table');
    for (var i = 0; i < m; i++) {
      var tr1 = document.createElement('tr');
      for(var j = 0; j < n; j++) {
          var td1 = document.createElement('td');
          td1.innerHTML = matr[i][j];
          tr1.appendChild(td1);
      }
      table1.appendChild(tr1);
    }
    let p3 = document.createElement('p');
    p3.innerText += 'Матрица свободных членов равна: '
    let table2 = document.createElement('table');
    var tr2 = document.createElement('tr');
    for (var i = 0; i < m; i++) {
      var td2 = document.createElement('td');
      td2.innerHTML = free[i];
      tr2.appendChild(td2);
    }
    table2.appendChild(tr2);
    let p4 = document.createElement('p');
    p4.innerText += 'Решение данной системы линейных уравнений: '
    let table3 = document.createElement('table');
    var tr3 = document.createElement('tr');
    for (var i = 0; i < n; i++) {
      var td3 = document.createElement('td');
      td3.innerText += " x" + i + " = ";
      td3.innerHTML += x[i];
      tr3.appendChild(td3);
    }
    table3.appendChild(tr3);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(table1);
    div.appendChild(p3);
    div.appendChild(table2);
    div.appendChild(p4);
    div.appendChild(table3);
    document.getElementById("result").appendChild(div);
  }