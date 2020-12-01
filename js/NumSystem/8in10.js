let num = 127;
let n, res;
let i = 0;
res = 0;
while(num != 0){
    n = num%10;
    res += n * Math.pow(8, i);
    i++;
    num = Math.floor(num/10);
}
console.log(res);