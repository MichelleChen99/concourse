// 3. 判斷是否為正方形 matrix 

function isSquareMatrix(a: Array<Array<number>>): boolean {
    for(let row: number = 1; row < a.length; row++) {
        if(a[0].length !== a[row].length || a.length !== a[0].length) {
            return false;
        } 
    }
    return true;
}

console.log(isSquareMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3, 4],
])) // false

console.log(isSquareMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
])) // false

console.log(isSquareMatrix([
    [2, 3],
    [1, 2, 3],
    [1, 2, 3],
])) // false

console.log(isSquareMatrix([
    [2, 3, 4],
    [2, 3],
    [1, 2, 3],
])) // false

console.log(isSquareMatrix([
    [2, 3, 4],
    [2, 3, 6],
    [1, 2, 3],
])) // true

console.log(isSquareMatrix([
    [2, 3, 4, 1],
    [2, 3, 6, 1],
    [1, 2, 3, 1],
    [2, 3, 6, 1],
])) // true