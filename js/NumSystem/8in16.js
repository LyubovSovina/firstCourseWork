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
res = '';
i = 0;
while(num != 0){
    n = num%16;
    switch (n) {
        case 1: res ='1' + res; break;
        case 2: res ='2' + res; break;
        case 3: res ='3' + res; break;
        case 4: res ='4' + res; break;
        case 5: res ='5' + res; break;
        case 6: res ='6' + res; break;
        case 7: res ='7' + res; break;
        case 8: res ='8' + res; break;
        case 9: res ='9' + res; break;
        case 10: res ='A' + res; break;
        case 11: res ='B' + res; break;
        case 12: res ='C' + res; break;       
        case 13: res ='D' + res; break;
        case 14: res ='E' + res; break;
        case 15: res ='F' + res; break;
        default:           break;
    }
    i++;
    num = Math.floor(num/16);
}
console.log(res);