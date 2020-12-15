// ответы идут в обратном порядке
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
let d = det(N, matrix);
for(let i=0; i<N; ++i){
    GetMatrix(N);
    x[i] = det2(N, matrix, i, free)/d;
}
PrintResult(d, x, N);
  count++;
}

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
  function PrintResult(d, x, m){
    let div = document.createDocumentFragment();
    let p1 = document.createElement('p');
    p1.innerText += 'Метод Крамера (правило Крамера) — способ решения систем линейных алгебраических уравнений с числом уравнений равным числу неизвестных с ненулевым главным определителем матрицы коэффициентов системы (причём для таких уравнений решение существует и единственно).';
    let p2 = document.createElement('p');
    p2.innerText += 'Определитель матрицы равен: ';
    p2.innerHTML += d;
    let p4 = document.createElement('p');
    p4.innerText += 'Решение данной системы линейных уравнений: '
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
    div.appendChild(p4);
    div.appendChild(table3);
    document.getElementById("result").appendChild(div);
  }