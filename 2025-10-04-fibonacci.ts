// Array版本
// 1. for
// function fibonacci(n: number){
//     let output: Array<number> = [1, 1];

//     for(let i = 2; i < n; i++){
//         output.push(output[i - 2] + output[i - 1]);
//     }
//     return output;
// }

// console.log(fibonacci(5));

// // 2. while
// function fibonacci2(n: number){
//     let output: Array<number> = [1, 1];
//     let i = 2;

//     while (i < n){
//         output.push(output[i - 2] + output[i - 1]);
//         i++;
//     }
//     return output;
// }

// console.log(fibonacci2(5));

// String版本
// 1. for
function fibonacci3(n: number){
    let lastTwo: number = 0;
    let lastOne: number = 0;
    let current: number = 1; // 前兩位數的加總結果
    let output: string = "1, "; // 輸出的費氏數列
    
    for(let i: number = 2; i <= n; i++){
        lastTwo = lastOne;
        lastOne = current;
        current = lastTwo + lastOne;
        
        output += `${current}, `;
    }
    return output.slice(0, -2); // 刪除字串末端的逗號與空格
}

console.log(fibonacci3(7));

// 2. while
function fibonacci4(n: number){
    let lastTwo: number = 0;
    let lastOne: number = 0;
    let current: number = 1;
    let output: string = "1, ";
    let i: number = 2;

    while(i <= n){
        lastTwo = lastOne;
        lastOne = current;
        current = lastTwo + lastOne;

        output += `${current}, `;
        i++;
    }
    return output.slice(0, -2);
}

console.log(fibonacci4(7));
