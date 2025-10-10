// 1. for
function isPrime(n: number): boolean {
  if (n <= 0 || n === 1) {
    return false; // 排除負數、0、1
  } else if (n === 2) {
    return true; // 2是最小的質數
  } else if (n % 2 === 0) {
    return false; // 先排除所有偶數
  } else {
    // n是奇數
    for (let i = 3; i < n; i += 2) {
      // 除數只需檢查所有的奇數 ex: 3, 5, 7...
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(1, isPrime(2)); // true
console.log(2, isPrime(3)); // true
console.log(3, isPrime(4)); // false
console.log(4, isPrime(17)); // true
console.log(5, isPrime(25)); // false
console.log(6, isPrime(1)); // false
console.log(7, isPrime(0)); // false
console.log(8, isPrime(-7)); // false

// 2. while
function isPrime2(n: number): boolean {
  if (n <= 0 || n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  } else {
    // n是奇數
    let i = 3;
    while (i < n) {
      if (n % i === 0) {
        return false;
      }
      i += 2;
    }

    // Translation:
    // for (let i = 2; i < n; i++) {
    //     if(n % i === 0) {
    //         result = false;
    //         break; // 注意break的位置要放在if裡面：找到因數才中斷。若放外面，變成只找一次，就中斷迴圈！
    //     }
    // }
  }
  return true;
}

console.log(1, isPrime2(2)); // true
console.log(2, isPrime2(3)); // true
console.log(3, isPrime2(4)); // false
console.log(4, isPrime2(17)); // true
console.log(5, isPrime2(25)); // false
console.log(6, isPrime2(1)); // false
console.log(7, isPrime2(0)); // false
console.log(8, isPrime2(-7)); // false
