// 求陣列中所有偶數的總和
function sumEven(a: Array<number>): number {
    let output: number = 0;

    for (let i: number = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            output += a[i];
        }
    }
    return output;
}

console.log(sumEven([1, 2, 3, 4, 6])); // 12
console.log(sumEven([8, 8, 8, 0, 3, -2])); // 22
console.log(sumEven([1, 3])); // 0
console.log(sumEven([-2, -2, -10])) // -14
