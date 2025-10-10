// Array版本
// 1. for
function fibonacci(n: number) {
  let output: Array<number> = [1, 1];

  for (let i = 2; i < n; i++) {
    output.push(output[i - 2] + output[i - 1]);
  }
  return output;
}

console.log(fibonacci(7)); // 1, 1, 2, 3, 5, 8, 13

// 2. while
function fibonacci2(n: number) {
  let output: Array<number> = [1, 1];
  let i = 2;

  while (i < n) {
    output.push(output[i - 2] + output[i - 1]);
    i++;
  }
  return output;
}

console.log(fibonacci2(7)); // 1, 1, 2, 3, 5, 8, 13

// String版本
// 1.1 for
function fibonacci3(n: number) {
  // Order: lastTwo, lastOne, current 對變數定義作註解：排列順序

  // Initial order: 0, 1, 0
  // Run #1: 1, 0, 1
  // Run #2: 0, 1, 1 // 注意變數定義：lastTwo、latOne 在 Run #1-2 都不符合自身定義，不可取
  // Run #3: 1, 1, 2
  let lastTwo: number = 0;
  let lastOne: number = 1;
  let current: number = 0; // 前兩位數的加總結果
  let output: string = ""; // 輸出的費氏數列

  for (let i: number = 1; i <= n; i++) {
    lastTwo = lastOne;
    lastOne = current;
    current = lastTwo + lastOne;

    output += `${current}, `;
  }
  return output.slice(0, -2); // 刪除字串末端的逗號與空格 => 其實不需要，把逗號與空格移到文字前面即可
}

// 1.2 for 優化版
function fib(n: number): string {
  // Order: prev2, prev1
  let prev2 = 1,
    prev1 = 1;
  if (n == 1) {
    return "1";
  }
  // else if (n == 2) { return "1, 1"; } // This condition has no effect. Why? A: 因為在n === 2的情況下，就不會進入迴圈，直接輸出ouput初始值（走else分支）
  else {
    let output = "1, 1";

    for (let i = 3; i <= n; i++) {
      const current = prev2 + prev1;

      output += `, ${current}`;

      prev2 = prev1;
      prev1 = current;
    }

    return output;
  }
}

console.log(fibonacci3(9)); // 1, 1, 2, 3, 5, 8, 13, 21, 34
console.log(fib(9)); // 1, 1, 2, 3, 5, 8, 13, 21, 34

// 2.1 while
function fibonacci4(n: number) {
  let lastTwo: number = 0;
  let lastOne: number = 1;
  let current: number = 0;
  let output: string = "";
  let i: number = 1;

  while (i <= n) {
    lastTwo = lastOne;
    lastOne = current;
    current = lastTwo + lastOne;

    output += `${current}, `;
    i++;
  }
  return output.slice(0, -2);
}

console.log(fibonacci4(7)); // 1, 1, 2, 3, 5, 8, 13

// 2.2 While優化版
function fib2(n: number): string {
  if (n === 1) {
    return "1";
  } else {
    let output: string = "1, 1";
    // Order: prev2, prev1
    let prev2: number = 1;
    let prev1: number = 1;

    let i: number = 3;
    while (i <= n) {
      const current: number = prev2 + prev1;

      output += `, ${current}`;

      prev2 = prev1;
      prev1 = current;

      i++;
    }

    return output;
  }
}

console.log(fib2(7)); // 1, 1, 2, 3, 5, 8, 13
