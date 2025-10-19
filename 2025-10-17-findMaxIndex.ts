import { copyArray } from "./2025-10-16-getMedian.ts";

function findMaxIndex(arr: Array<number>): Array<number> | null {
  // 檢查空陣列
  if (arr.length === 0) {
    return null;
  }

  const arr2: Array<number> = copyArray(arr);
  //   console.log("arr2:", arr2);
  const output: Array<number> = [];

  for (let i: number = 0; i < arr2.length - 1; i++) {
    // 將最大值移到陣列末端
    if (arr2[i] > arr[i + 1]) {
      [arr2[i], arr2[i + 1]] = [arr2[i + 1], arr2[i]];
    }
  }

  for (let i: number = 0, j: number = 0; i < arr.length; i++) {
    // 將最大值推到結果陣列
    if (arr[i] === arr2[arr2.length - 1]) {
      output[j] = i;
      j++;
    }
  }
  return output;
}

console.log(findMaxIndex([1, 2, 6, 4, 8, 6, 8])); // [4, 6] (8)
console.log(findMaxIndex([14, 3])); // [0] (14)
console.log(findMaxIndex([8, 8, 8, 0, 3, -2])); // [0, 1, 2] (8)
console.log(findMaxIndex([-2, -2, -10])); // [0, 1] (-2)
