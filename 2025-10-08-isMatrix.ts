// 2. 判斷是否為 matrix
//  a. 用新陣列儲存布林值
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

//  b. 迴圈跑出任一false，就判定為非矩陣
function isMatrix(a: Array<Array<number>>): boolean {
        for(let row: number = 1; row < a.length; row++) {
            // console.log("log: ", a[0].length === a[row].length);
            if(a[0].length !== a[row].length) {
                return false;
            }
        }
    return true;
}

console.log(isMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3, 4],
])) // false

console.log(isMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
])) // true

console.log(isMatrix([
    [2, 3],
    [1, 2, 3],
    [1, 2, 3],
])) // false

console.log(isMatrix([
    [2, 3, 4],
    [2, 3],
    [1, 2, 3],
])) // false