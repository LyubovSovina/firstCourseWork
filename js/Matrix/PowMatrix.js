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
Get.onclick = function(){
    if(count != 0) {
      var elem = document.getElementById("result");
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    }
    GetMatrix(N);
    let matrixN = MatrixPow(N, matrix);
    PrintResult(matrixN, N);
  count++;
}

function MatrixPow(n,A)
{ 
    if (n == 1) return A;
    else return MultiplyMatrix(A, MatrixPow(n-1,A));
}

function MultiplyMatrix(A,B)
{
    let rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (let i = 0; i < rowsA; i++) C[i] = [];
    for (let k = 0; k < colsB; k++)
     { for (let i = 0; i < rowsA; i++)
        { let t = 0;
          for (let j = 0; j < rowsB; j++) t += A[i][j]*B[j][k];
          C[i][k] = t;
        }
     }
    return C;
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

  function GetMatrix(m){
    for(let i = 0; i < m; i++){
      matrix[i] = [];
      for(let j = 0; j < m; j++){
        let array = document.getElementsByClassName('Elements')[i*m+j];
        matrix[i][j] = array.value;
      }
    }
  }

function PrintResult(matr, m){
    let div = document.createDocumentFragment();
    let p1 = document.createElement('p');
    p1.innerText += 'Формула возведения матрицы в степень работает только для квадратных матриц и натуральной степени.';
    let p2 = document.createElement('p');
    p2.innerText += 'Другими словами, для того, чтобы выполнить возведение матрицы в степень n нужно умножить её саму на себя n раз.';
    let p3 = document.createElement('p');
    p3.innerText += 'Итоговая матрица равна: '
    let table = document.createElement('table');
    for (var i = 0; i < m; i++) {
      var tr = document.createElement('tr');
      for(var j = 0; j < m; j++) {
          var td = document.createElement('td');
          td.innerHTML = matr[i][j];
          tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(table);
    document.getElementById("result").appendChild(div);
  }