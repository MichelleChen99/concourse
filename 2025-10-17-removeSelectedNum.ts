function contains(num: number, arr: Array<number>): boolean {
    // for (let i = 0; i < arr.length; i++) {
    //     if (num == arr[i]) {
    //         return true;
    //     }
    // }
    // return false

    return indexOf(num, arr) !== null
}

// 找出第一個出現指定數字的索引值
function indexOf(num: number, arr: Array<number>): number | null {
    // arr: [0, 0]
    let i: number = 0
    let result: number = 0;
    for (i; i < arr.length; i++) {
        if (arr[i] === num) {
            // result = i;
            return i;
        }
    }

    // i >= arr.length
    return null;

    if (i === arr.length - 1) {
        return null;
    }
    return result;
}

// 找出最後一個出現指定數字的索引值
function lastIndexOf(num: number, arr: Array<number>): number | null {
    let result: number | null = null;
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            result = i;
        }
    }
    return result;
}

console.log(lastIndexOf(3, [1, 3, 4, 3]));
console.log(lastIndexOf(0, [1, 2, 4, 3]));

function removeSelectedNum (num: number, arr: Array<number>): Array<number> {
    // let targetIndex = indexOf(num, arr);
    // while (targetIndex !== null) {
    //     arr = removeAt(targetIndex, arr)

    //     targetIndex = indexOf(num, arr);
    // }
    // return arr

    const resultArray: Array<number> = [];
    let j: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        // 找出原陣列中非指定數字的值，複製到新陣列
        if (arr[i] !== num) {
            resultArray[j] = arr[i];
            j++;
        }

        // 檢查目標值是否在陣列中
        // if (i === arr.length - 1 && arr[i] === resultArray[i]) {
        //    console.log("The target number is not included in this array.");
        // }
    }

    if (j === arr.length - 1) {
        console.log("The target number is not included in this array.");
    }
    return resultArray;
}

console.log(removeSelectedNum(3, [3, 4, 4, 3, 3, 4])); // [ 4, 4, 4 ]
console.log(removeSelectedNum(0, [0, 0, 1, 1, 9])); // [ 1, 1, 9 ]
console.log(removeSelectedNum(-1, [-1, 9, 9, 2, 4, -1])); // [ 9, 9, 2, 4 ]
console.log(removeSelectedNum(-1, [9, 2])); // [ 9, 2, 3 ] => 目標值不在陣列中