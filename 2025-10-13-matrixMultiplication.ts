// 矩陣相乘
// #1: a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0]
// #2: a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1]
// #3: a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2]

import { isMatrix } from "./2025-10-08-isMatrix";

function matrixMultiplication (a: Array<Array<number>>, b: Array<Array<number>>): Array<Array<number>> | null {
    // 檢查是否為合法矩陣
    if (!isMatrix(a) || !isMatrix(b)) {
        return null;
    }

    // 已確認為合法矩陣，再檢查兩矩陣能否相乘
    if (a[0].length !== b.length) {
        return null;
    } 

    // 初始化矩陣
    // const output: number[][] = [
    //     Array<number>(a.length),
    //     Array<number>(a.length),
    //     Array<number>(a.length),
    // ];
    // const output: number[][] = Array<Array<number>>(a.length); 可動態算出陣列長度
    // output[0] = Array<number>(b[0].length);

    const output: number[][] = [];

    for (let i = 0; i < a.length; i++) { // a.length決定輸出矩陣的高度（列數）
        // 建立輸出矩陣每一列的空槽（空陣列），寬度等於b陣列的寬度
        output[i] = new Array(b[0].length); // b[0].length決定輸出矩陣的寬度（行數）
        console.log(output);
        for (let j = 0; j < output[i].length; j++) {
            output[i][j] = 0; // 逐一填入初始值
        }
    }

    for(let i = 0; i < output.length; i++) {
        for (let j = 0; j < a.length; j++) {
            for (let k = 0; k < b.length; k++) {
            // console.log("a:", a[i][k]);
            // console.log("b:", b[k][j]);

            // 浪費效能的初始化賦值
            // const v = (output[i][j] === undefined) ? 0 : output[i][j];
            // output[i][j] = output[i][j] + a[i][k] + b[k][j];
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

// 4*3 && 3*4
console.log(matrixMultiplication(
    [
        [0, 0, 1, 5],
        [1, 0, 1, 7],
        [0, 1, 0, 9],
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [5, 3, 1],
    ]
))
// 32  23. 14
// 43. 31. 19
//.49  32. 15

// 單元測試：對角矩陣
