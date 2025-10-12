// 印星星+空格抽出function
// 範例：
// function getStarString(numOfStars: number): string {
//     return ""
// }
// function getSpaceString(numOfSpaces: number): string {
//     return ""
// }

// for (let i = 5; i > 0; i--) {
//     console.log(getSpaceString(5 - i))
//     console.log(getStarString(i))
// }

// 1. 輸出字串的通用函式
function getString(char: string, count: number): string {
  let output: string = "";
  for (let i = 1; i <= count; i++) {
    output += char;
  }
  return output;
}

// 2. 輸出倒直角三角形
function oppositeTriangle(numOfRows: number) {
  let output: string = "";
  for (let i = numOfRows; i > 0; i--) {
    output += getString(" ", 5 - i) + getString("*", i) + "\n";
  }
  return output;
}

console.log(oppositeTriangle(5));
