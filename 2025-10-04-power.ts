// 求2的n次方
// 1. for
function power(n: number) {
  let output: number = 2; // 定義被乘數

  if (n === 0) output = 1;
  else if (n > 0) {
    for (let i = 1; i < n; i++) {
      output *= 2;
    }
  } else {
    output = 0.5; // 重新定義被乘數
    for (let i = 1; i < -n; i++) {
      output *= 0.5;
    }
  }
  return output;
}

console.log(power(10)); // 1024

// 2. while
function power2(n: number) {
  let output: number = 2;
  let i: number = 1;

  if (n === 0) output = 1;
  else if (n > 0) {
    while (i < n) {
      output *= 2;
      i++;
    }
  } else {
    output = 0.5;
    while (i < -n) {
      output *= 0.5;
      i++;
    }
  }
  return output;
}

console.log(power2(-2)); // 0.25

// 單一迴圈版
// 3. for
function power3(n: number) {
  let N: number = Math.abs(n);
  let output: number;

  if (n === 0) output = 1;
  else if (n > 0) output = 2;
  else output = 0.5;

  for (let i: number = 1; i < N; i++) {
    n > 0 ? (output *= 2) : (output *= 0.5);
  }
  return output;
}

console.log(power3(-3)); // 0.125

// 4. while
function power4(n: number) {
  let N: number = Math.abs(n);
  let output: number;
  let i: number = 1;

  if (n === 0) output = 1;
  else if (n > 0) output = 2;
  else output = 0.5;

  while (i < N) {
    n > 0 ? (output *= 2) : (output *= 0.5);
    i++;
  }
  return output;
}

console.log(power4(-3)); // 0.125

// 單一迴圈改良版
// 5. for
function power5(n: number): number {
  let output: number = 1;
  let base: number = n > 0 ? 2 : 0.5; // 將基數與次方數抽成變數
  let N = Math.abs(n);

  for (let i: number = 1; i <= N; i++) {
    output *= base;
  }
  return output;
}

console.log(power5(0)); // 1
console.log(power5(3)); // 8

// 6. while
function power6(n: number): number {
  let output: number = 1;
  let N: number = Math.abs(n);
  let base: number = n > 0 ? 2 : 0.5;
  let i: number = 1;

  while (i <= N) {
    output *= base;
    i++;
  }
  return output;
}

console.log(power6(0)); // 1
console.log(power6(3)); // 8
