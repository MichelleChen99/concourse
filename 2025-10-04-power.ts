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

// 單一迴圈版
// 3. for
function power3(n: number){
    let N: number = Math.abs(n);
    let output: number;

    if(n === 0) output = 1;
    else if(n > 0) output = 2;
    else output = 0.5;
    
    for(let i: number = 1; i < N; i++){
        n > 0 ? output *= 2 : output *= 0.5;
    }
    return output;
}

console.log(power3(-3)); // 0.125

// 4. while
function power4(n: number){
    let N: number = Math.abs(n);
    let output: number;
    let i: number = 1;

    if(n === 0) output = 1;
    else if(n > 0) output = 2;
    else output = 0.5;

    while(i < N){
        n > 0 ? output *= 2 : output *= 0.5;
        i++;
    }
    return output;
}

console.log(power4(-3)); // 0.125