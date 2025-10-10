// 菱形
// 1. for
// 奇數版直角三角形：
// function diamond(maxStar: number){
//   if(maxStar % 2 === 0){
//     alert("Input number must be odd.");
//     return;
//   }

//     for(let row = 1; row <= numOfRows3; row++){
//        if(row <= 3) {
//         for(let i = 1; i <= row; i++){
//             if(i === 1) output3 += "*";
//             else output3 += "**";
//         }
//        } else {
//         for(let i = maxStar; i >= row; i--){
//             if(i === maxStar) output3 += "*";
//             else output3 += "**";
//         }
//        }
//     }
//   output3 += "\n";
// }

function diamond(numOfRows3: number) {
  // 檢驗參數是否為奇數
  if (numOfRows3 % 2 === 0) {
    alert("Input number must be odd.");
    return;
  }

  let middle: number = (numOfRows3 + 1) / 2;
  let output: string = "\n";

  for (let row: number = 1; row <= numOfRows3; row++) {
    if (row <= middle) {
      for (let i: number = (numOfRows3 - 1) / 2; i >= row; i--) {
        output += " ";
      }

      for (let j: number = 1; j <= row; j++) {
        if (j === 1) output += "*";
        else output += "**";
      }
    } else {
      for (let i: number = 1; i <= row - middle; i++) {
        output += " ";
      }

      for (let j: number = numOfRows3; j >= row; j--) {
        if (j === numOfRows3) output += "*";
        else output += "**";
      }
    }
    output += "\n";
  }
  return output;
}
console.log(diamond(5));

// 2. while
function diamond2(numOfRows4: number) {
  if (numOfRows4 % 2 === 0) {
    alert("Input number must be odd.");
    return;
  }

  let middle: number = (numOfRows4 + 1) / 2;
  let row: number = 1;
  let output: string = "\n";

  while (row <= numOfRows4) {
    if (row <= middle) {
      let i: number = (numOfRows4 - 1) / 2;
      let j: number = 1;
      while (i >= row) {
        output += " ";
        i--;
      }
      while (j <= row) {
        if (j === 1) output += "*";
        else output += "**";
        j++;
      }
    } else {
      let i: number = 1;
      let j: number = numOfRows4;
      while (i <= row - middle) {
        output += " ";
        i++;
      }

      while (j >= row) {
        if (j === numOfRows4) output += "*";
        else output += "**";
        j--;
      }
    }
    output += "\n";
    row++;
  }
  return output;
}

console.log(diamond2(5));

// 問題：
// 迴圈印星號：只有第一次印1個，之後每次迴圈都印2個，主體邏輯要怎麼寫？ => 改良版
// 3. for改良版
function diamond3(numOfRows: number) {
  if (numOfRows % 2 === 0) {
    alert("Input number must be odd.");
    return;
  }

  let output: string = "\n";
  let middle: number = Math.ceil(numOfRows / 2);
  let row: number = 1;
  let spaces: number, stars: number;

  for (row = 1; row <= numOfRows; row++) {
    if (row <= middle) {
      spaces = middle - row;
      stars = 2 * row - 1;
    } else {
      spaces = row - middle;
      stars = 2 * (numOfRows - row) + 1;
    }

    for (let s = 1; s <= spaces; s++) {
      output += " ";
    }

    for (let r = 1; r <= stars; r++) {
      output += "*";
    }
    output += "\n";
  }
  return output;
}

console.log(diamond3(13));

// 4. while改良版
function diamond4(numOfRows: number) {
  if (numOfRows % 2 === 0) {
    alert("Input number must be odd.");
    return;
  }

  let output: string = "\n";
  let middle: number = Math.ceil(numOfRows / 2);
  let row: number = 1;

  while (row <= numOfRows) {
    let spaces: number, stars: number;
    let s: number = 1;
    let r: number = 1;

    if (row <= middle) {
      spaces = middle - row;
      stars = 2 * row - 1;
    } else {
      spaces = row - middle;
      stars = 2 * (numOfRows - row) + 1;
    }

    while (s <= spaces) {
      output += " ";
      s++;
    }

    while (r <= stars) {
      output += "*";
      r++;
    }
    output += "\n";
    row++;
  }
  return output;
}

console.log(diamond4(9));
