// 1. 向量內積的 function
//.  1.1 若兩者長度不一，則回傳null

// function innerProduct(a: Array<number>, b: Array<number>): (number | null) {
//     return null;
// }


// 2. 判斷是否為 matrix 

[
    [1, 2, 3], 
    [1, 2, 3], 
    [1, 2, 3], 
]; // 矩陣：各陣列長度要相等

[
    [1, 2, 3, 4], // index: 0, len: 4
    [1, 2, 3],   // index: 1, len: 3
    [1, 2, 3],   // index: 2, len: 3
]; // 不是矩陣

[
    [1, 2, 3, 4], 
    [1, 2, 3, 4], 
    [1, 2, 3, 4]
]; // 矩陣，但非正方形矩陣


// function isMatrix(a: Array<Array<number>>): boolean {

//     return false;
// }

// 3. 判斷是否為正方形 matrix 

// function isSquareMatrix(a: Array<Array<number>>): boolean {

//     return false;
// }

// 4. Binary search
//  4.1 Assume `a` is sorted ascendingly.

// function binarySearch(a: Array<number>, target: number): boolean {

//     return false;
// }
