// 印星星+空格抽出function
// 1. 輸出字串的通用函式
function getString3(char: string, count: number): string {
  let output: string = "";

  for (let i: number = 1; i <= count; i++) {
    output += char;
  }

  return output;
}

// 2. 區分輸出內容，方便呼叫的函式
function getSpaceString3(count: number): string {
  return getString3(" ", count);
}

function getStarString3(count: number): string {
  return getString3("*", count);
}

// 3. 輸出菱形
function diamond5(numOfRows: number): string {
  if (numOfRows % 2 === 0) {
    return "Input number must be odd.";
  }

  let upperRows: number = Math.ceil(numOfRows / 2);
  let bottomRows: number = numOfRows - upperRows;
  let output: string = "";

  // 菱形上半
  for (let i: number = 1; i <= upperRows; i++) {
    let spaces = upperRows - i;
    let stars = i * 2 - 1;
    output += getSpaceString3(spaces) + getStarString3(stars) + "\n";
  }

  // 菱形下半
  for (let i: number = 1; i <= bottomRows; i++) {
    let spaces = i;
    let stars = numOfRows - i * 2;
    output += getSpaceString3(spaces) + getStarString3(stars) + "\n";
  }
  return output;
}

console.log(diamond5(11));
