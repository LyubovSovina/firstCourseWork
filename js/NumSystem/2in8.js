let num = 1010110;
let n, n2, t, res;
let i = 0;
res = 0;
while(num != 0){
    n = num%1000;
    t = 0;
    for(let k = 0; k < 3; k++){
        n2 = n%10;
        t += n2 * Math.pow(2, k);
        n = Math.floor(n/10);
    }
    res += t * Math.pow(10, i);
    i++;
    num = Math.floor(num/1000);
}
console.log(res);