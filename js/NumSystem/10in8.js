let num = 86;
let n, res;
let i = 0;
res = 0;
while(num != 0){
    n = num%8;
    res += n * Math.pow(10, i);
    i++;
    num = Math.floor(num/8);
}
console.log(res);