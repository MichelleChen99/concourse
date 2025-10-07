// 範例：
// let numOfRows: number = 10;
// let output: string = "\n"

// for (let row = 1; row <= numOfRows; row++) {
//     for (let i = 0; i < row; i++) {
//         output += "*"
//     }
//     output += "\n" //new line
// }

// 倒直角三角形
// 1. for
let numOfRows: number = 5;
let output: string = "\n";

for (let row: number = 1; row <= numOfRows; row++) {
  for (let i: number = numOfRows; i >= row; i--) {
    output += "*";
  }
  output += "\n"; // 為配合TS Playground版面，首行空一行才能對齊
}

// 2. while
// 錯誤寫法：
// let numOfRows: number = 5;
// let output: string = "\n";

// let row: number = 1;
// let i = numOfRows; // 宣告位置錯誤

// while(row <= numOfRows) {
//     while(i >= row){
//       output += "*";
//       i--;
//     }
//     output += "\n";
//     row++;
// }

// row = 1; i = 5; output = "*"
// row = 1; i = 4; output = "**"
// row = 1; i = 3; output = "***";
// row = 1; i = 2; output = "****";
// row = 1; i = 1; output = "*****";
// row = 1; i = 0; (out-of-while)
// row = 1; i = 0; output = "*****\n";
// row = 2; i = 0; output = "*****\n";
// row = 2; i = 0; (out-of-while);
// row = 2; i = 0; output = "*****\n\n";
// "*****\n\n\n\n\n"

let row: number = 1;

while (row <= numOfRows) {
  let i: number = numOfRows;
  while (i >= row) {
    output += "*";
    i--;
  }
  output += "\n";
  row++;
}

console.log(output);
