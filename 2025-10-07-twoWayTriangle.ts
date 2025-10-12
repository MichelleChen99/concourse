// 印星星+空格抽出function
function getStarString2(numOfStars: number): string {
  let output: string = "";
  for (let i = 1; i <= numOfStars; i++) {
    output += "*";
  }
  return output;
}

for (let row: number = 1; row <= 4; row++) {
  console.log(getStarString2(row));
}

for (let row: number = 3; row >= 1; row--) {
  console.log(getStarString2(row));
}
