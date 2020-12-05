let Size1 = document.querySelector(".SizeMatrixm");
let m = Size1.value;
let Size2 = document.querySelector(".SizeMatrixn");
let n = Size2.value;
let Num = document.querySelector(".Number");
let a;
Num.oninput = function(){a = Num.value;}
 
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
  let matrixN = [];
  for (var i = 0; i < m; i++) {
  matrixN[i] = [];
  for (var j = 0; j < n; j++) matrixN[i][j] = a*matrix[i][j];
}
PrintResult(matrixN, n, m);
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
function PrintResult(matr, m, n){
  let div = document.createDocumentFragment();
  let p1 = document.createElement('p');
  p1.innerText += 'Умножение матрицы на число - это операция над матрицей, в результате которой каждый ее элемент умножается на дейсвительное или комплексное число.';
  let p2 = document.createElement('p');
  p2.innerText += 'Итоговая матрица равна: '
  let table = document.createElement('table');
  for (var i = 0; i < m; i++) {
    var tr = document.createElement('tr');
    for(var j = 0; j < n; j++) {
        var td = document.createElement('td');
        td.innerHTML = matr[i][j];
        tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(table);
  document.getElementById("result").appendChild(div);
}