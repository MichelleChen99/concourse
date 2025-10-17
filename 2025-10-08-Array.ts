
let array: Array<number> = Array<number>(7);

console.log(array[0]);

for (let i = 0; i < array.length; i++) {
    array[i] = i;
}

for(let i = 0; i < array.length; i++) {
    console.log(`array[${i}] = ${array[i]}`);
}

console.log(array[-2]); // undefined
console.log(array[7]); // undefined

let array2: Array<number> = [2, 3, 4]
// array2[0] -> 2
// array2.length -> 3

let nestedArray: Array<Array<number>> = 
    [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]
    ]

// nestedArray.length -> 3
// nestedArray[0] -> [1, 2, 3]
// nestedArray[0][2] -> 3

function modify(array: Array<number>) {
    array[0] = 100;
}

function modify2(array: Array<number>) {
   return array = [1, 2, 3]
}

let w = 0;
function modifyInt(w: number) {
    w = 100;
}

console.log(array); // 0 1 2 3 4 5 6
modify2(array);
console.log(array); // 0 1 2 3 4 5 6

console.log(w); // 0
modifyInt(w);
console.log(w); // 0
