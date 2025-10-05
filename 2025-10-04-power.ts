// 求2的n次方
// 1. for
function power(n: number){
    let output: number = 2; // 定義被乘數

    if(n === 0) output = 1;
    else if(n > 0){
        for(let i = 1; i < n; i++){
            output *= 2;
        }
    } else {
        output = 0.5; // 重新定義被乘數
        for(let i = 1; i < -n; i++){
            output *= 0.5;
        }
    }
    return output;
}

console.log(power(10)); // 1024

// 2. while
function power2(n: number){
    let output: number = 2;
    let i: number = 1;

    if(n === 0) output = 1;
    else if(n > 0){
        while(i < n){
            output *= 2;
            i++
        }
    } else {
        output = 0.5;
        while(i < -n){
            output *= 0.5;
            i++;
        }
    }
    return output;
}

console.log(power2(-2)); // 0.25