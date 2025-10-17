function removeAt(index: number, arr: Array<number>): Array<number> | null {
    // 檢查空陣列
    if (arr.length === 0) {
        return null;
    }

    // 檢查索引值是否合法
    if (index > arr.length || index < 0) {
        return null;
    }

    const arr2 = new Array(arr.length - 1);

    for (let i: number = 0; i < arr2.length; i++) {
        if (i < index) {
            arr2[i] = arr[i];
        } else {
            arr2[i] = arr[i + 1];
        }
    }
    // console.log("Original array:", arr);
    return arr2;
}

console.log(removeAt(0, [1])); // []
console.log(removeAt(3, [9, 8, 7, 6, 5])); // [9, 8, 7, 5]
console.log(removeAt(-12, [2, 1, 0])); // null