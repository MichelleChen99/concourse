class ArrayList {
  array: Array<number> = new Array<number>(10);
  size: number = 0;

  // 溢位 => 加10格
  overflowExtend() {
    if (this.size === this.array.length) {
      this.array.length += 10;
    }
  }

  validateIndex(index: number) {
    // index 應落在 0 ~ size - 1 之間
    // 若 index 不合法，則 throw error
    if (index < 0 || index > this.size - 1) {
      throw new Error("Invalid index number");
    }
  }

  copyArray() {
    let copied: Array<number> = new Array<number>(this.array.length);
    for (let i = 0; i < this.array.length; i++) {
      copied[i] = this.array[i];
    }
    return copied;
  }

  add(value: number) {
    this.overflowExtend();

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === undefined) {
        this.array[i] = value;
        this.size = i + 1;
        break;
      }
    }
    return this.array;
  }

  insert(index: number, value: number) {
    // this.validateIndex(index); // TODO: 要放嗎？
    this.overflowExtend();

    for (let i = this.array.length - 1; i > index; i--) {
      // const temp = this.array[i]; // TODO: 為何沒用到？
      this.array[i] = this.array[i - 1];

      if (this.array[i] === undefined) {
        this.size = i;
      }
      // this.size += i; //880
      // this.overflowExtend();
    }
    this.array[index] = value;
    // const temp = this.array[index];
    // this.array[index] = value;
    // this.overflowExtend();
    // this.array[index + 1] = temp;

    // for (let i = 0; i < this.array.length; i++) {
    //   if (this.array[i] === undefined) {
    //     this.size = i;
    //     break;
    //   }
    // }
    return this.array;
  }

  remove(value: number) {
    // [0, 0, 1, 0, 0, 3] 移除0 => [1, 3]
    // console.log(this.array.length); //10
    let result: Array<number> = new Array<number>(this.array.length);
    for (let i = 0, j = 0; i < this.array.length; i++) {
      if (
        this.array[i] !== value &&
        this.array[i] !== undefined /* 若不加，size會錯 */
      ) {
        result[j] = this.array[i]; // [補充] 無法重用add()，它會不斷延長陣列長度，造成無限迴圈
        j++;
        // console.log(this.array[i]);
      }
      this.size = j;
    }
    this.array = result;
    // console.log(this.array.length); //10
    // console.log(result.length); //10
    return this.array;
  }

  removeAt(index: number) {
    // [0, 0, 1, 0, 0, 3] 移除this.array[3] => [0, 0, 1, 0, 3]
    // [4] => [3]
    // [5] => [4]
    // [6] => (undefined)
    this.validateIndex(index);

    for (let i = index; i < this.array.length; i++) {
      if (this.array[i] !== undefined) {
        this.array[i] = this.array[i + 1];
        this.size = i;
      }
    }
    return this.array;
  }

  getSize(): number {
    return this.size;
  }

  get(index: number): number {
    this.validateIndex(index);
    return this.array[index];
  }

  contains(value: number): boolean {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return true;
      }
    }
    return false;
  }

  indexOf(value: number): Array<number> | null {
    let result = new Array();
    for (let i = 0, j = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        result[j] = i;
        j++;
      }
    }
    const output = result.length === 0 ? null : result;
    return output;
  }

  lastIndexOf(value: number): number | null {
    const arr = this.indexOf(value);
    const result = arr === null ? null : arr[arr.length - 1];
    return result;
  }
}

const arr1 = new ArrayList();
arr1.add(1);
arr1.add(2);
arr1.add(3);
arr1.add(4);
arr1.add(5);
arr1.add(6);
arr1.add(7);
arr1.add(8);
arr1.add(9);
arr1.add(10);
// console.log(arr1);

// arr1.insert(9, 101);
// arr1.insert(10, 102);
// arr1.insert(11, 103);
// arr1.insert(12, 104);
// arr1.insert(13, 105);
arr1.insert(9, 106);
arr1.insert(9, 105);
arr1.insert(9, 104);
arr1.insert(9, 103);
arr1.insert(9, 102);
arr1.insert(9, 101);
console.log(arr1);

// arr1.removeAt(14);
// console.log(arr1);
//////////////////////////////////////
const arr2 = new ArrayList();
arr2.add(0);
arr2.add(0);
arr2.add(1);
arr2.add(0);
arr2.add(0);
arr2.add(3);
// console.log(arr2.indexOf(0)); // [ 0, 1, 3, 4 ]
// console.log(arr2.lastIndexOf(0)); //4
// console.log(arr2.indexOf(7)); // []
// console.log(arr2.lastIndexOf(7));
// arr2.remove(0);
// console.log(arr2); //ArrayList { array: [ 1, 3, <8 empty items> ], size: 2 }
// console.log(arr2.getSize());

const arr3 = new ArrayList();
arr3.add(8);
arr3.add(4);
arr3.add(4);
arr3.add(4);
arr3.remove(4);
// console.log(arr3); //ArrayList { array: [ 8, <9 empty items> ], size: 1 }
// console.log(arr3.get(0)); //8
// console.log(arr3.get(1)); //Invalid index number
// console.log(arr3.contains(4));
// console.log(arr3.contains(8));
