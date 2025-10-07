// Array版本
// 1. for
// function fibonacci(n: number){
//     let output: Array<number> = [1, 1];

//     for(let i = 2; i < n; i++){
//         output.push(output[i - 2] + output[i - 1]);
//     }
//     return output;
// }

// console.log(fibonacci(7)); // 1, 1, 2, 3, 5, 8, 13

// 2. while
// function fibonacci2(n: number){
//     let output: Array<number> = [1, 1];
//     let i = 2;

//     while (i < n){
//         output.push(output[i - 2] + output[i - 1]);
//         i++;
//     }
//     return output;
// }

// console.log(fibonacci2(7)); // 1, 1, 2, 3, 5, 8, 13

// String版本
// 1. for
function fibonacci3(n: number){
    // Order: lastTwo, lastOne, current

    // Initial order: 0, 1, 0
    // Run #1: 1, 0, 1
    // Run #2: 0, 1, 1
    // Run #3: 1, 1, 2
    let lastTwo: number = 0;
    let lastOne: number = 1;
    let current: number = 0; // 前兩位數的加總結果
    let output: string = ""; // 輸出的費氏數列
    
    for(let i: number = 1; i <= n; i++){
        lastTwo = lastOne;
        lastOne = current;
        current = lastTwo + lastOne;
        
        output += `${current}, `;
    }
    return output.slice(0, -2); // 刪除字串末端的逗號與空格
}

function fib(n: number): string {
    // Order: prev2, prev1
    let prev2 = 1, prev1 = 1;
    if (n == 1) { return "1"; }
    // else if (n == 2) { return "1, 1"; } // This condition has no effect. Why?
    else {
        let output = "1, 1";
        
        for (let i = 3; i <= n; i++) {
            const current = prev2 + prev1;
            
            output += `, ${current}`;

            prev2 = prev1;
            prev1 = current;
        }

        return output;
    }
}

console.log(fibonacci3(9)); // 1, 1, 2, 3, 5, 8, 13, 21, 34

// 2. while
function fibonacci4(n: number){
    let lastTwo: number = 0;
    let lastOne: number = 1;
    let current: number = 0;
    let output: string = "";
    let i: number = 1;

    while(i <= n){
        lastTwo = lastOne;
        lastOne = current;
        current = lastTwo + lastOne;

        output += `${current}, `;
        i++;
    }
    return output.slice(0, -2);
}

console.log(fibonacci4(9)); // 1, 1, 2, 3, 5, 8, 13, 21, 34
