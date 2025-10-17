function removeSelectedNum (num: number, arr: Array<number>): Array<number> {
    const arr2: Array<number> = [];
    for (let i: number = 0, j: number = 0; i < arr.length; i++) {
        // 找出原陣列中非指定數字的值，複製到新陣列
        if (arr[i] !== num) {
            arr2[j] = arr[i];
            j++;
        }

        // 檢查目標值是否在陣列中
        if (i === arr.length - 1 && arr[i] === arr2[i]) {
           console.log("The target number is not included in this array.");
        }
    }
    return arr2;
}

console.log(removeSelectedNum(3, [3, 4, 4, 3, 3, 4])); // [ 4, 4, 4 ]
console.log(removeSelectedNum(0, [0, 0, 1, 1, 9])); // [ 1, 1, 9 ]
console.log(removeSelectedNum(-1, [-1, 9, 9, 2, 4, -1])); // [ 9, 9, 2, 4 ]
console.log(removeSelectedNum(-1, [9, 2])); // [ 9, 2, 3 ] => 目標值不在陣列中