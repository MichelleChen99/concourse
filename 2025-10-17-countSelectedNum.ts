function countSelectedNum(num: number, arr: Array<number>): number | null {
    // 檢查空陣列
    if (arr.length === 0) {
        return null;
    }

    let counter: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            counter++;
        }
    }
    return counter;
}

console.log(countSelectedNum(2, [2, 3, 4, 2, 2])); // 3
console.log(countSelectedNum(2, [2])); // 1
console.log(countSelectedNum(2, [])); // null
