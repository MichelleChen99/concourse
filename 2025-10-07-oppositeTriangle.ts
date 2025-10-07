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

function getStarString(numOfStars: number): string {
  let output: string = "";
  for (let i = 1; i <= numOfStars; i++) {
    output += "*";
  }
  return output;
}

function getSpaceString(numOfSpaces: number): string {
  let output: string = "";
  for (let i = 1; i <= numOfSpaces; i++) {
    output += " ";
  }
  return output;
}

for (let row = 5; row > 0; row--) {
  console.log(getSpaceString(5 - row) + getStarString(row));
}
