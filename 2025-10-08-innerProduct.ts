// 1. 向量內積的 function
//.  1.1 若兩者長度不一，則回傳null

function innerProduct(a: Array<number>, b: Array<number>): (number | null) {
    if(a.length !== b.length) {
        alert("Arrays must be of the same length.");
        return null;
    }

    let output: number = 0;
    for(let i: number = 0; i < a.length; i++){
        output += a[i] * b[i];
    }

    return output;
}

console.log(innerProduct([1, 2, 3], [4, 5, 6])); // 32