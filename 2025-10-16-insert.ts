function insert (index: number, num: number, arr: Array<number>): Array<number> | null {
    // 檢查索引值是否合法
    if (index > arr.length || index < 0) {
        return null;
    }

    const arr2 = new Array(arr.length + 1);

    for (let i: number = 0; i < arr2.length; i++) {
        if (i < index) {
            arr2[i] = arr[i];
        } else if (i === index) {
            arr2[i] = num;
        } else {
            arr2[i] = arr[i - 1];
        }
    }
    // console.log("Original array:", arr);
    return arr2;
}

console.log(insert(4, 9, [1, 2, 3, 4])); // [ 1, 2, 3, 4, 9 ]
console.log(insert(0, 9, [0, 1, 2])); // [ 9, 0, 1, 2 ]
console.log(insert(0, 1, [])); // [ 1 ]
console.log(insert(-2, 5, [3, 4, 5])); // null