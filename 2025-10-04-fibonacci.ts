// 1. for
function fibonacci(n: number){
    let output: Array<number> = [1, 1];

    for(let i = 2; i < n; i++){
        output.push(output[i - 2] + output[i - 1]);
    }
    return output;
}

console.log(fibonacci(5));

// 2. while
function fibonacci2(n: number){
    let output: Array<number> = [1, 1];
    let i = 2;

    while (i < n){
        output.push(output[i - 2] + output[i - 1]);
        i++;
    }
    return output;
}

console.log(fibonacci2(5));