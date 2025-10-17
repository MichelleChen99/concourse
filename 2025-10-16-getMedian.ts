import { sortArray } from "./2025-10-15-sortArray.ts";

export function copyArray (a: Array<number>): Array<number> {
    const aCopy: Array<number> = [];

    for (let i = 0; i < a.length; i++) {
        aCopy[i] = a[i];
    }
    // console.log('Original a:', a);
    // console.log('Copy a:', aCopy);
    return aCopy;
}

function getMedian (a: Array<number>): number | null {
    // 檢查空陣列
    if (a.length === 0) {
        return null;
    }
    
    // 複製原陣列
    const aCopy: Array<number> = copyArray(a);
    const n: number = aCopy.length;

    // 阻擋 null 進入主邏輯
    if (sortArray(aCopy) === null) { return null }

    // 將複製的陣列排序
    const sortedArray = sortArray(aCopy);

    let halfIndex: number = Math.floor(n / 2);
    let median: number = 0;
    // 求陣列的中間索引，取出中位數
    if (n % 2 === 1 && sortedArray !== null) {
        median = sortedArray[halfIndex];
    } else if (n % 2 === 0 && sortedArray !== null) {
        median = (sortedArray[halfIndex] + sortedArray[halfIndex - 1]) / 2;
    }
    return median;
}

// 單元測試
function test(): boolean {
    const randomLen = Math.floor(Math.random() * 100);
    const arr: Array<number> = new Array(randomLen);
    
    // 對陣列賦值
    for (let j: number = 0; j < randomLen; j++) {
        const randomNum = (Math.random() < 0.5 ? -1 : 1) * Number.parseFloat((Math.random() * 100).toFixed(2));
        arr[j] = randomNum;
    }
    // console.log("The test array:", arr);
    
    // 對照組：保證輸出正確答案，用來檢查實驗組
    const sortedArr = arr.toSorted((a, b) => a - b); // 依照數值大小
    // const sortedArr = arr.sort() { /* 第一個字比對 */ };
    console.log("Original array:", arr);
    console.log("Sorted array:", sortedArr);

    // 找出中位數
    const half = Math.floor(randomLen / 2);
    const median = randomLen % 2 === 0 ? (sortedArr[half] + sortedArr[half - 1]) / 2 : sortedArr[half];

    if (getMedian(arr) !== median) { return false }
    console.log("Experiment group result:", getMedian(arr));
    console.log("Control group result:", median)

    return true;
}
// console.log(test());

// console.log(getMedian([4, 3, 2, 1])); // 長度4 // 2.5
// console.log(getMedian([4, 3])); // 長度2 // 3.5
// console.log(getMedian([80, 59, -10, 7, 9, -6, -6, -23, 0, -10])); // 長度10 // -3
// console.log(getMedian([1, 3.2, 7, 5.9, 11, 9])); // 長度6 // 6.45
// console.log(getMedian([80.1, 19, -10, 19.5, 9.49, -8.4, -6.9, -23, -10])); // 長度9 // -6.9
// console.log(getMedian([-10, 70, 8, 80, -10])); // 長度5 // 8
// console.log(getMedian([3])); // 長度1 // 3