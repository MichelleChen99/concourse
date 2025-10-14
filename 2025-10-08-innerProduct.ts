// 1. 向量內積的 function
//.  1.1 若兩者長度不一，則回傳null

function innerProduct(a: Array<number>, b: Array<number>): (number | null) {
    if (a.length === 0 || b.length === 0) {
        return null;
    } // 處理空陣列

    if(a.length !== b.length) {
        alert("Arrays must be of the same length.");
        return null;
    }

    let output: number = 0;
    for (let i: number = 0; i < a.length; i++) {
        output += a[i] * b[i];
    }

    return output;
}

console.log(innerProduct([1, 2, 3], [4, 5, 6])); // 32

// 單元測試
function test3(): boolean {
    const arr1 = [1, 2, 3, 4];
    let r = Math.floor(Math.random() * 10 + 1);

    for (let i: number = 0; i < arr1.length; i++) {
        let arr2 = [0, 0, 0, 0]; // 每一輪迴圈都恢復初始值
        arr2[i] = r;
        const expectedResult = arr1[i] * r;

        if (innerProduct(arr1, arr2) !== expectedResult) {
        return false;
        }
    }
    return true;
}

console.log("測驗結果：", test3());