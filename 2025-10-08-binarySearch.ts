// 4. Binary search
//  4.1 Assume `a` is sorted ascendingly.

function binarySearch(a: Array<number>, target: number): boolean {
  let startIndex = 0;
  let endIndex = a.length - 1;
  let middleIndex = Math.floor((endIndex - startIndex) / 2);
  console.log("startIndex:", startIndex);
  console.log("endIndex:", endIndex);
  console.log("middleIndex:", middleIndex);

  for (let i = 0; i < a.length; i += middleIndex) {
    if (target === a[middleIndex]) {
      console.log("C1:", startIndex, endIndex, middleIndex);
      return true;
    } else if (target < a[middleIndex]) {
      endIndex = middleIndex;
      middleIndex = Math.floor((endIndex - startIndex) / 2);
      console.log("C2:", startIndex, endIndex, middleIndex);
    } else if (target > a[middleIndex]) {
      startIndex = middleIndex;
      middleIndex = Math.floor(middleIndex + (endIndex - startIndex) / 2);
      console.log("C3:", startIndex, endIndex, middleIndex);
    }
    console.log("i:", i);
  }
  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)); // true (middleIndex: 4 => 6 => 8)
// console.log(binarySearch([-5, 2, 3, 4, 10], 5)); // false
// console.log(binarySearch([1], 1)); // true
// console.log(binarySearch([23, 98, 105], 0)); // false
