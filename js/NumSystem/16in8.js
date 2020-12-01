let num = '56';
let n, res = 0;
let i = 0;
let n2 =  parseInt(num,16); 
while(n2 != 0){
    n = n2%8;
    res += n * Math.pow(10, i);
    i++;
    n2 = Math.floor(n2/8);
}
console.log(res);