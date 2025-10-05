// 直角三角形 + 倒直角三角形
// 1. for
let middle: number = 3;
let numOfRows2: number = (middle * 2) - 1;
let output2: string = "\n";

for(let row: number = 1; row <= numOfRows2; row++){
    if(row <= middle) {
      for(let i = 1; i <= row; i++){
        output2 += "*";
      }
    } else {
      for(let i = numOfRows2; i >= row; i--) {
        output2 += "*";
      }
    }
  output2 += "\n";
}

// 2. while
let row2: number = 1; // 流程圖：P0

while(row2 <= numOfRows2) { // C
    if(row2 <= middle) { // PT
      let i: number = 1;
        while(i <= row2){
          output2 += "*";
          i++;
        }
    }
    else {
      let i: number = numOfRows2;
        while(i >= row2){
          output2 += "*";
          i--;
        }
    }
  output2 += "\n"; // P1
  row2++
}

console.log(output2);
