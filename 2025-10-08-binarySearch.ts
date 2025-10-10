// 4. Binary search
//  4.1 Assume `a` is sorted ascendingly.

function binarySearch(a: Array<number>, target: number): boolean {
    if (a.length === 0) return false; // 處理空陣列

    // 起始、終點索引的初始值
    let startIndex: number = 0;
    let endIndex: number = a.length - 1;

  while (startIndex <= endIndex) {
     const middleIndex: number = Math.floor(startIndex + (endIndex - startIndex) / 2);
    // const middleIndex = Math.floor((endIndex + startIndex) / 2); // 在32-bit的整數環境中，有整數溢位的風險

    if (target === a[middleIndex]) {
      return true;
    } else if (target < a[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  return false;
}

// 單元測試
function test1(): boolean {
    const array = [0, 1, 2, 3, 4]

    for (let j = 0; j < array.length; j++) {
        if (binarySearch(array, j) != true) {
            return false;
        }
    }

    for (let j = 1; j < array.length; j++) {
        if (binarySearch(array, -j) != false) {
            return false;
        }
    }

    // 原測試有誤：
    // 1. j 並未發揮作用，故該迴圈應刪除？
    // 2. 在單元測試用 Math.random() 會造成測試非決定性，容易 intermittent fail ，故不建議使用。
    //     for (let j = 0; j < 100; j++) {
    //     const r = Math.random();
    //     const expectedResult = (r >= 0 && r <= 4);
    //     if (binarySearch(array, r) != expectedResult) {
    //         return false
    //     }
    // }

    // 測試目標：帶入陣列內的數值，是否都會得到true的結果？
    const r = Math.floor(Math.random() * 4 + 1);
    // expectedResult = (r >= 0 && r <= 4);
    if (binarySearch(array, r) != true) {
        return false
    }
    
    return true;
}

function test2(): boolean {
    const array = [0, 1, 2, 3, 4, 5]

    for (let j = 0; j < array.length; j++) {
        if (binarySearch(array, j) != true) {
            return false;
        }
    }
    return true;
}

console.log("測試結果：", test1());
console.log("測試結果：", test2());

console.log("Case 1:", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)); // true (middleIndex: 4 => 6 => 8)
console.log("Case 2:", binarySearch([-5, 2, 3, 4, 10], 5)); // false
console.log("Case 3:", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // true
console.log("Case 4:", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -3)); // false
console.log("Case 5:", binarySearch([1], 1)); // true
console.log("Case 6:", binarySearch([23, 98, 105], 0)); // false
console.log("Case 7:", binarySearch([23, 23, 23, 98, 105], 100)); // false
console.log("Case 8:", binarySearch([], 30)); // false
