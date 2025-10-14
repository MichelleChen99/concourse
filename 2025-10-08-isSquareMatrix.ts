import { isMatrix } from "./2025-10-08-isMatrix.ts";

// 3. 判斷是否為正方形 matrix 
// 3.1 原版
// function isSquareMatrix(a: Array<Array<number>>): boolean {
//     if (a.length === 0) {
//         return false;
//     } // 處理空陣列

//     // 修改說明：可以放在迴圈外面的執行流程，儘量放外面，避免浪費效能
//     if (a.length !== a[0].length) {
//         return false;
//     }

//     for(let row: number = 1; row < a.length; row++) {
//         if (a[0].length !== a[row].length) {
//             return false;
//         } 
//     }
//     return true;
// }

// 3.2 呼叫函式版
function isSquareMatrix(a: Array<Array<number>>): boolean {
    if (a.length === 0) {
        return false;
    } // 處理空陣列

    if (a.length !== a[0].length) {
        return false;
    }

    return isMatrix(a);
}

console.log(isSquareMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3, 4],
])) // false

// console.log(isSquareMatrix([
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
// ])) // false

// console.log(isSquareMatrix([
//     [2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
// ])) // false

// console.log(isSquareMatrix([
//     [2, 3, 4],
//     [2, 3],
//     [1, 2, 3],
// ])) // false

// console.log(isSquareMatrix([
//     [2, 3, 4],
//     [2, 3, 6],
//     [1, 2, 3],
// ])) // true

// console.log(isSquareMatrix([
//     [2, 3, 4, 1],
//     [2, 3, 6, 1],
//     [1, 2, 3, 1],
//     [2, 3, 6, 1],
// ])) // true