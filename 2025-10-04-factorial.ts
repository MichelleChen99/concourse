// 求n的階乘
// 1. for
function factorial(n: number) {
  if (n <= 0) {
    alert("Input number must be greater than zero.");
    return;
  }

  let output: number = 1;
  for (let i = 1; i <= n; i++) {
    output *= i;
  }
  return output;
}

console.log(factorial(6));

// 2. while
function factorial2(n: number) {
  if (n <= 0) {
    alert("Input number must be greater than zero.");
    return;
  }

  let output: number = 1;
  let i: number = 1;
  while (i <= n) {
    output *= i;
    i++;
  }
  return output;
}

console.log(factorial2(5));
