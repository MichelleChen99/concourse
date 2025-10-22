import { sortArray } from "./2025-10-15-sortArray.ts";

export function copyArray (source: Array<number>): Array<number> {
    const copied: Array<number> = [];

    for (let i = 0; i < source.length; i++) {
        copied[i] = source[i];
    }
    // console.log('Original a:', a);
    // console.log('Copy a:', aCopy);
    return copied;
}

function useEffect(fn: () => void) {

}

useEffect(() => {
    console.log("Hello")
});

function testCopy() {
    const source = [1, 2, 3, 4] // could be random
    const copied = copyArray(source)

    // 檢查複製陣列與原陣列的長度是否相等
    if (source.length !== copied.length) {
        console.log("ERROR: The length of source does not equal to the length of copied")
    }

    // 檢查複製陣列與原陣列的每個值是否一致
    for (let i = 0; i < source.length; i++) {
        if (source[i] !== copied[i]) {
            console.log("ERROR: ...")
        }
    }
}

function getMedian (a: Array<number>): number | null {
    // 檢查空陣列
    if (a.length === 0) {
        return null;
    }
    
    // 複製原陣列
    const copiedArray: Array<number> = copyArray(a);
    // 將複製的陣列排序
    const sortedArray = sortArray(copiedArray)
    // 阻擋 null 進入主邏輯
    if (sortedArray === null) { return null }

    const middleIndex: number = Math.floor(copiedArray.length / 2);
    // 求陣列的中間索引，取出中位數
    if (copiedArray.length % 2 === 1) {
        return sortedArray[middleIndex];
    } 
    else { 
        // 不需要寫 else if (n % 2 === 0)，因為餘數只有兩種情況： = 1 or != 1
        return (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2;
    }
}

// randomNonnegativeInteger的特徵是：
//  (number) => number
function randomNonnegativeInteger(upperLimit: number): number {
    return Math.floor(Math.random() * upperLimit);
}

function randomBoolean(): boolean {
    return Math.random() < 0.5
}

function randomSign(): number {
    return randomBoolean() ? -1 : 1
}

// toSorted(f: (a: number, b: number) => number): Array<number>

// toSorted的特徵是：
//  ((number, number) => number) => Array<number>

// 單元測試
function test(): boolean {
    const randomLen = randomNonnegativeInteger(100)
    const arr: Array<number> = new Array(randomLen);
    
    // 對陣列賦值
    for (let j: number = 0; j < randomLen; j++) {
        const randomNum = randomSign() * Number.parseFloat((Math.random() * 100).toFixed(2));
        arr[j] = randomNum;
    }
    // console.log("The test array:", arr);
    
    // 對照組：保證輸出正確答案，用來檢查實驗組
    let sorted: ((a: number, b: number) => number) = 
        (a, b) => a - b;
    // const sortedArr = arr.toSorted(sorted); 
    const sortedArr = arr.toSorted((a, b) => a - b); // 依照數值大小
    
    // const sortedArr = arr.sort() // 第一個字比對;
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