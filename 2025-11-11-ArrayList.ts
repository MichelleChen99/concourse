class ArrayList {
  array: Array<number> = new Array<number>(10);
  size: number = 0;

  // 溢位 => 加10格
  overflowExtend() {
    if (this.size === this.array.length) {
      this.array.length += 10;
    }
  }

  //   copyArray() {
  //     let copied: Array<number> = new Array<number>();
  //     copied = this.array;
  //     return copied;
  //   }

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
    // TODO: 檢查index合法性
    this.overflowExtend();

    const temp = this.array[index];
    this.array[index] = value;
    this.overflowExtend();
    this.array[index + 1] = temp;

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === undefined) {
        this.size = i;
        break;
      }
    }
    return this.array;
  }

  remove(value: number) {
    // [0, 0, 1, 0, 0, 3] 移除0 => [1, 3]
    // 1. 確定陣列長度 //unnecessary
    // 2. 過濾出指定數字以外的數字
    // 3. 輸出新陣列
    // Original idea (abandon): 把所有移除數字之後接續的數字依次往前挪
    console.log(this.array.length); //10
    let result: Array<number> = new Array<number>(this.array.length);
    for (let i = 0, j = 0; i < this.array.length; i++) {
      if (
        this.array[i] !== value &&
        this.array[i] !== undefined /* 若不加，size會錯 */
      ) {
        result[j] = this.array[i];
        j++;
        // console.log(this.array[i]); //無限迴圈 Why? 因為原本reuse this.add() 會不斷延長陣列長度
        // result = this.add(this.array[i]);
      }
      this.size = j;
    }
    this.array = result; //為何一定要寫這行？否則會變回原本的陣列，只有size正確
    console.log(this.array.length); //6 TODO: 應該讓陣列長度恢復為10
    console.log(result.length); //6
    return this.array;
  }

  removeAt(index: number) {
    // TODO: 檢查index合法性

    // [0, 0, 1, 0, 0, 3] 移除this.array[3] => [0, 0, 1, 0, 3]
    // [4] => [3]
    // [5] => [4]
    // [6] => (undefined)
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
    // index 應落在 0 ~ size - 1 之間
    // 若 index 不合法，則 throw error
  }

  contains(value: number): boolean {}

  indexOf(value: number): number | null {}

  lastIndexOf(value: number): number | null {}
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

arr1.insert(9, 101);
arr1.insert(10, 102);
arr1.insert(11, 103);
arr1.insert(12, 104);
arr1.insert(13, 105);
// arr1.insert(9, 104);
// arr1.insert(9, 105);
// arr1.insert(9, 106);
// arr1.insert(9, 107);
// arr1.insert(9, 108);
// arr1.insert(9, 109);
// console.log(arr1);

arr1.removeAt(14);
// console.log(arr1);
//////////////////////////////////////
const arr2 = new ArrayList();
arr2.add(0);
arr2.add(0);
arr2.add(1);
arr2.add(0);
arr2.add(0);
arr2.add(3);
arr2.remove(0);
console.log(arr2);

// TODO: 修改arr3賦值
// const arr3 = new ArrayList();
// arr3.array = [8, 4, 4, 4];
// arr3.remove(4);
// console.log(arr3);
