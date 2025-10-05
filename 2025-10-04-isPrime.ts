// 1. for
function isPrime(n: number){
    let result: boolean = true;

    if(n <= 0 || n === 1) result = false; // 排除負數、０、１
    else if(n === 2) result = true; // 2是最小的質數
    else {
        for(let i = 2; i < n; i++){
            if(n % i === 0) result = false;
            break; // 找到因數就停止，避免浪費後面迴圈
        }
    }
    return result;
}

console.log(1, isPrime(2));   // true
console.log(2, isPrime(3));   // true
console.log(3, isPrime(4));   // false
console.log(4, isPrime(17));  // true
console.log(5, isPrime(18));  // false
console.log(6, isPrime(1));   // false
console.log(7, isPrime(0));   // false
console.log(8, isPrime(-7));  // false

// 2. while
function isPrime2(n: number){
    let result: boolean = true;
    let i = 2;

    if(n <= 0 || n === 1) result = false;
    else if(n === 2) result = true;
    else {
        while(i < n){
            if(n % i === 0) result = false;
            i++;
            break;
        }
    }
    return result;
}

console.log(1, isPrime2(2));   // true
console.log(2, isPrime2(3));   // true
console.log(3, isPrime2(4));   // false
console.log(4, isPrime2(17));  // true
console.log(5, isPrime2(18));  // false
console.log(6, isPrime2(1));   // false
console.log(7, isPrime2(0));   // false
console.log(8, isPrime2(-7));  // false