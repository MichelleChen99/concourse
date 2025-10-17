// 矩陣相乘
// #1: a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0]
// #2: a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1]
// #3: a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2]

import { isMatrix } from "./2025-10-08-isMatrix.ts";

function isMultiplicableMatrices(a: Array<Array<number>>, b: Array<Array<number>>): boolean {
    // 檢查是否為合法矩陣
    if (!isMatrix(a) || !isMatrix(b)) {
        return false;
    }

    // 再檢查被乘數、乘數的數量是否相等
    if (a[0].length !== b.length) {
        return false;
    }
    return true;
}

function createZeroMatrix(numOfRows: number, numOfCols: number): Array<Array<number>> {
    const matrix = Array<Array<number>>(numOfRows);
    for (let i = 0; i < numOfRows; i++) {
        matrix[i] = Array<number>(numOfCols);
        for (let j = 0; j < numOfCols; j++) {
            matrix[i][j] = 0;
        }
    }
    return matrix;
}

function matrixMultiplication(a: Array<Array<number>>, b: Array<Array<number>>): Array<Array<number>> | null {
    if (!isMultiplicableMatrices(a, b)) { return null; }

    const outputWidth: number = b[0].length; // row
    const outputHeight: number = a.length; // column
    const output = createZeroMatrix(outputWidth, outputHeight)

    // 初始化矩陣（半動態）
    // const output: number[][] = [
    //     Array<number>(a.length),
    //     Array<number>(a.length),
    //     Array<number>(a.length),
    // ];
    // console.log(output[0][0]); // undefined

    // const output: number[][] = Array<Array<number>>(a.length); 可動態算出陣列長度
    // output[0] = Array<number>(b[0].length);

    // const output: number[][] = [];
    

    // 初始化矩陣（全動態）
    // for (let i = 0; i < outputHeight; i++) {
    //     // 建立輸出矩陣每一列的空槽
    //     output[i] = new Array(outputWidth);
    //     // console.log("建立空槽的矩陣：", output); // ex: [ <3 empty items> ]
    //     for (let j = 0; j < output[i].length; j++) {
    //         output[i][j] = 0; // 逐一填入初始值
    //     }
    // }
    // console.log("初始化完成的矩陣：", output)

    for(let i = 0; i < outputHeight; i++) {
        for (let j = 0; j < outputWidth; j++) {
            for (let k = 0; k < b.length; k++) {
            // console.log("a:", a[i][k]);
            // console.log("b:", b[k][j]);

            // 初始化賦值：可用但浪費效能
            // const v = (output[i][j] === undefined) ? 0 : output[i][j];
            // （主邏輯：output[i][j] = output[i][j] + a[i][k] + b[k][j] => 替換成下面的寫法，就有值可以計算）
            // output[i][j] = v + a[i][k] + b[k][j];

            output[i][j] += a[i][k] * b[k][j];
            // console.log("output:", output);
            }
        }
    }
    return output;
}

// 3*3 && 3*3 
console.log(matrixMultiplication(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ], 
    [
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
    ]
))
// 2 3 3
// 5 6 9
// 8 9 15

// 4*3 && 2*4
console.log(matrixMultiplication(
    [
        [0, 0, 1, 5],
        [1, 0, 1, 7],
        [0, 1, 0, 9],
    ],
    [
        [1, 2],
        [4, 5],
        [7, 8],
        [5, 3],
    ]
))
// 32  23
// 43. 31
//.49  32

// 2*4 && 4*2
console.log(matrixMultiplication(
    [
        [1, 2],
        [4, 5],
        [7, 8],
        [5, 3],
    ],
    [
        [0, 0, 1, 5],
        [1, 0, 1, 7],
    ]
))
// 2  0. 3. 19
// 5. 0. 9. 55
// 8  0. 15.91
// 3. 0. 8. 46

// 對角矩陣
// 5*5 && 3*5
console.log(matrixMultiplication(
    [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
    ],
    [
        [-2, 5, 9],
        [99, 6, 23],
        [22, 54, 68],
        [-10, -8, 9],
        [44, 77, 11],
    ]
))
// 結果等同b矩陣
