function isOdd(num: number): boolean {
  return num % 2 === 1;
}

function isEven(num: number): boolean {
  // return num % 2 === 0
  return !isOdd(num);
}

// function signature
//  isOdd: (number) => boolean
//. isEven: (number) => boolean

// Fact 1.
//  A function signature is actually a type.

function m() {
  let f: (num: number) => boolean = // `f` 存的是一個「特徵為 (number) => boolean 」的function
    isOdd;
  // = isEven

  const result = f(2);
  console.log(result);
}

function m2(f: (num: number) => boolean) {
  const result = f(2);
  console.log(result);
}

m();
m2(isOdd);
m2(isEven);

// Closure: 匿名的 function
// function pointer
let f: (num: number) => boolean =
  // (a: number): boolean => {
  //     return a % 2 === 0
  // }

  // (a: number): boolean => a % 2 === 0

  // a => a % 2 === 0

  (a) => {
    return a % 2 === 0;
  };

// m2((a: number) => a % 2 ==0)
const g = (a: number) => a % 2 === 0;
m2(g);

function makeAdder(x: number): (y: number) => number {
  //   return function (y: number) {
  //     return x + y;
  //   };

  return (y) => x + y;
}

const append = makeAdder(5);

console.log(append(3));

// Closure 的用法
//  1. Callback
//  1'. Event handling 事件與事件處理
//  2. 「合作」

// Examples for 2.「合作」
function filter(
  array: Array<number>,
  accept: (num: number) => boolean
): Array<number> {
  const result: Array<number> = [];
  for (let i = 0, idx = 0; i < array.length; i++) {
    if (accept(array[i])) {
      result[idx++] = array[i];
    }
  }
  return result;
}

// 將 array 中每個元素，依指定的方式轉成 boolean 值，並形成、回傳一個新的 array
function map(
  array: Array<number>,
  transform: (num: number) => boolean
): Array<boolean> {
  const result: Array<boolean> = [];
  for (let i: number = 0; i < array.length; i++) {
    result[i] = transform(array[i]); // map是複製等長陣列，不必用到第二個iterator（filter結果長度不等才需要）
  }
  return result;
}

const odds = filter([1, 2, 3, 4, 5], isOdd);
console.log(odds); //[1,3,5]
const evens = filter([1, 2, 3, 4, 5], isEven);
console.log(evens); //[2,4]

filter([1, 2, 3, 4, 5], (a) => a < 4); //[1,2,3]

console.log(map([0, 1, 0, 2, 0, 3], (a) => a !== 0)); //[false, true, false, true, false, true]

function sort(
  array: Array<number>,
  compare: (a: number, b: number) => number
): Array<number> {
  if (array.length === 0) {
    return [];
  }

  for (let i: number = 0; i < array.length; i++) {
    let swapped = false;
    for (let j: number = 0; j < array.length - i - 1; j++) {
      if (compare(array[j], array[j + 1]) > 0) {
        let temp: number = 0;
        temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}

console.log(sort([3, 5, 7, 2, 1, 9], (a, b) => a - b)); // [1, 2, 3, 5, 7, 9]
console.log(sort([3, 5, 7, 2, 1, 9], (a, b) => b - a)); // [9, 7, 5, 3, 2, 1]
