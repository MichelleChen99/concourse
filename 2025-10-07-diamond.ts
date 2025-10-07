function getSpaceString3(numOfRows: number): string {
  let output: string = "";

  for (let i = 1; i <= numOfRows; i++) {
    output += " ";
  }
  return output;
}

function getStarString3(numOfRows: number): string {
  let output: string = "";

  for (let i = 1; i <= numOfRows; i++) {
    output += "*";
  }
  return output;
}

for (let i = 3; i >= 0; i--) {
  console.log(getSpaceString3(4) + getStarString3(4 - i));
}

for (let i = 1; i <= 3; i++) {
  console.log(getSpaceString3(i) + getStarString3(4 - i));
}
