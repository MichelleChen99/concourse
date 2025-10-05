// 求n的階乘
// 1. for
function factorial(n: number){
    let output: number = 1;
    if(n <= 0){
        alert("Input number must greater that zero.");
        return;
    }

    for(let i = 1; i <= n; i++){
        output *= i;
    }
    return output;
}

console.log(factorial(6));

// 2. while
function factorial2(n: number){
    let output: number = 1;
    let i: number = 1;
    if(n <= 0){
        alert("Input number must greater that zero.");
        return;
    }

    while(i <= n){
        output *= i;
        i++;
    }
    return output;
}

console.log(factorial2(5));