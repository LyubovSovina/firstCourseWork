let num = 126;
let n, res;
let i = 0;
res = 0;
while(num != 0){
    n = num%10;
    res += n * Math.pow(8, i);
    i++;
    num = Math.floor(num/10);
}
num = res;
res = 0;
i = 0;
while(num != 0){
    n = num%2;
    res += n * Math.pow(10, i);
    i++;
    num = Math.floor(num/2);
}
console.log(res);