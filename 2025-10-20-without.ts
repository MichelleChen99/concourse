import { copyArray } from "./2025-10-16-getMedian.ts";

// 給定兩個陣列，回傳一個新陣列，內容為「第一個陣列去掉出現在第二個陣列的元素」
function without(a: Array<number>, b: Array<number>): Array<number> {
    let output: Array<number> = [];

    for (let i: number = 0; i < a.length; i++) {
        for (let j: number = 0; j < b.length; j++) {
            if (a[i] !== b[j]) {
                // output += a[i];
            }
        }
    }

    return a2;
}
