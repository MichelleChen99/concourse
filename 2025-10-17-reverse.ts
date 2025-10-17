// 反轉陣列

function reverse(arr: Array<number>): Array<number> | null {
    // 檢查空陣列
    if (arr.length === 0) {
        return null;
    }

    const n: number = arr.length;
    const arr2: Array<number> = new Array(n);

    for (let i = 0; i < n; i++) {
        arr2[n - i - 1] = arr[i];
    }
    return arr2;
}

console.log(reverse([9, 8, 7])); // [ 7, 8, 9 ]
console.log(reverse([1, 2, 3, 4])); // [ 4, 3, 2, 1 ]
console.log(reverse([-1, -1, 1, -2, -2])); // [ -2, -2, 1, -1, -1 ]
console.log(reverse([2])); // [ 2 ]
console.log(reverse([])); // null