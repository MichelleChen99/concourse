import { copyArray } from "./2025-10-16-getMedian.ts";

function findMaxIndex(a: Array<number>): Array<number> | null {
    // 檢查空陣列
    if (a.length === 0) {
        return null;
    }

    const arr2: Array<number> = copyArray(a);
    let output: Array<number> = [];

    for (let i: number = 0, j: number = 0; i < a.length; i++) {
        if (arr2[i] > arr2[i + 1] || arr2[i] === arr2[i + 1]) {
            output[j] = i;
            arr2[i + 1] = arr2[i];
            j++;
        }
    }
    return output;
}

console.log(findMaxIndex([1, 2, 6, 4, 6])); // [2, 4] (6)
// console.log(findMaxIndex([14, 3])); // [0] (14)
// console.log(findMaxIndex([8, 8, 8, 0, 3, -2])); // [0, 1, 2] (8)
// console.log(findMaxIndex([-2, -2, -10])); // [0, 1] (-2)