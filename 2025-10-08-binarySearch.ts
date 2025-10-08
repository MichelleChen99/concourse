// 4. Binary search
//  4.1 Assume `a` is sorted ascendingly.

function binarySearch(a: Array<number>, target: number): boolean {
    let endIndex = a.length;
    let startIndex = 0;
    let middleIndex = Math.floor(endIndex - startIndex / 2);

    if(target === a[middleIndex]) {
        return true;
        console.log(startIndex, endIndex, middleIndex);
    } else if(target < a[middleIndex]) {
        endIndex = middleIndex;
        middleIndex = Math.floor(middleIndex /= 2);
        console.log(startIndex, endIndex, middleIndex);
    } else if(target > a[middleIndex]) {
        startIndex = middleIndex;
        middleIndex = Math.floor(middleIndex *= 2);
        console.log(startIndex, endIndex, middleIndex);
    }

    return false;
}

console.log(binarySearch([-5, 2, 3, 4, 10], 5)); // false
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 7)); // true
// console.log(binarySearch([1], 1)); // true
// console.log(binarySearch([23, 98, 105], 0)); // false