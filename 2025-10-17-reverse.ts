// 反轉陣列

function reverse(source: Array<number>): Array<number> {
    // 檢查空陣列
    if (source.length === 0) {
        return [];
    }

    const len: number = source.length;
    const reversed: Array<number> = new Array(len);

    for (let i = 0, j = len - 1; i < len; i++, j--) {
        reversed[j] = source[i];
    }
    return reversed;
}

console.log(reverse([9, 8, 7])); // [ 7, 8, 9 ]
console.log(reverse([1, 2, 3, 4])); // [ 4, 3, 2, 1 ]
console.log(reverse([-1, -1, 1, -2, -2])); // [ -2, -2, 1, -1, -1 ]
console.log(reverse([2])); // [ 2 ]
console.log(reverse([])); // null