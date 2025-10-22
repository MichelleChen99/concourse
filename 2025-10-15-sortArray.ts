// 將陣列由小到大排序
//. Version 1：Bubble Sort 兩個獨立的迴圈
// function sortArray (a: Array<number>): Array<number> | null {
//     // 檢查空陣列
//     if (a.length === 0) {
//         return null;
//     }

//     for(let i: number = 0; i < a.length - 1; i++) {
//     let current: number = a[i];
//     let next: number = a[i + 1];
//     let temp: number = 0;

//         if (current > next) {
//             temp = next;
//             a[i + 1] = current;
//             a[i] = temp;
//         }
//         // console.log("每一輪迭代的結果：", a);
//     }

//     // 若尚未排序完，就繼續排序
//     for (let i: number = 0; i < a.length; i++) {
//         if (a[i] > a[i + 1]) {
//         sortArray(a);
//         } 
//     }
//     return a;
// }

//. Version 2：Bubble Sort 一個雙層迴圈
// function sortArray (a: Array<number>): Array<number> | null {
//     // 檢查空陣列
//     if (a.length === 0) {
//         return null;
//     }
//
//     const n: number = a.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < (n - i - 1); j++) {
//             let current: number = a[j];
//             let next: number = a[j + 1];
            
//             if (current > next) {
//                 [a[j], a[j + 1]] = [a[j + 1], a[j]]; // 直接交換
//             }
//         }
//     }
//     return a;
// }

//. Version 3: Bubble Sort 雙層迴圈 + flag
export function sortArray(a: Array<number>): Array<number> {
    // 檢查空陣列
    if (a.length === 0) {
        return a;
    }

    const n = a.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < (n - i - 1); j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return a;
}

console.log(sortArray([4, 3, 2, 1])); // [ 1, 2, 3, 4 ]
console.log(sortArray([80, 59, -10, 7, 9, -6, -6, -23, 0, -10])); // [-23, -10, -10, -6, -6, 0, 7, 9, 59, 80]
console.log(sortArray([-10, 0, -6, 0, -6, -10])); // [ -10, -10, -6, -6, 0, 0 ]
console.log(sortArray([3])); // [3]
