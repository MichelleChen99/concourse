// 2. 判斷是否為 matrix
//  解法a. 用新陣列儲存布林值
// function isMatrix(a: Array<Array<number>>): boolean {
//     let result: Array<boolean> = [];
//     for(let row: number = 1; row < a.length; row++) {
//         result.push(a[0].length === a[row].length)
//     }
//     if(result.includes(false)){
//         return false;
//     };
//     return true;
// }

class Array2<ElementType> {
  values: ElementType[] = [];
}

class Pair<KeyType, ValueType> {
  key: KeyType;
  value: ValueType;

  constructor(key: KeyType, value: ValueType) {
    this.key = key;
    this.value = value;
  }
}

//  解法b. 迴圈跑出任一false，就判定為非矩陣
export function isMatrix(a: Array<Array<number>>): boolean {
  if (a.length === 0) {
    return false;
  } // 處理空陣列

  for (let row: number = 1; row < a.length; row++) {
    // console.log("log: ", a[0].length === a[row].length);
    if (a[0].length !== a[row].length) {
      return false;
    }
  }
  return true;
}

console.log(
  isMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3, 4],
  ])
); // false

console.log(
  isMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
); // true

console.log(
  isMatrix([
    [2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
); // false

console.log(
  isMatrix([
    [2, 3, 4],
    [2, 3],
    [1, 2, 3],
  ])
); // false
