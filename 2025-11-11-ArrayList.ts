class ArrayList {
  array: Array<number> = new Array<number>(10);
  size: number = 0;

  // 若陣列滿位 => 加10格
  expandIfNecessary() {
    if (this.size === this.array.length) {
      const newArray = new Array<number>(this.array.length + 10);
      for (let i = 0; i < this.size; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
      // this.array.length += 10; //錯誤寫法
    }
  }

  // 若陣列空格超過30格 => 刪除全部空格
  shrinkIfNecessary() {
    if (this.array.length - this.size > 30) {
      const newArray = new Array<number>(this.size);
      for (let i = 0; i < this.size; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
    }
  }

  // index 應落在 0 ~ size - 1 之間
  isValidIndex(index: number): boolean {
    return index >= 0 && index < this.size;
  }

  // 若 index 不合法，則 throw error
  assertValidIndex(index: number) {
    if (!this.isValidIndex(index)) {
      throw new Error("Invalid index number");
    }
  }

  // 將目前陣列複製到新陣列
  copyArray(): Array<number> {
    const copied: Array<number> = new Array<number>(this.array.length);
    for (let i = 0; i < this.size; i++) {
      copied[i] = this.array[i];
    }
    return copied;
  }

  // 加新數值到陣列的最後一位
  add(value: number) {
    this.expandIfNecessary();
    this.array[this.size] = value;
    this.size++;
  }

  // 加新數值到指定的index
  insert(index: number, value: number) {
    if (index === this.size) {
      this.add(value); // 先處理 index = size 的情況，因為 assertValidIndex 不允許 index = size
      return; // 記得加return，才不會繼續執行，導致重複插入數值
    }

    this.assertValidIndex(index);
    this.expandIfNecessary();

    for (let i = this.size; i > index; i--) {
      // 起點應該是size，不是size - 1，預留insert多出的一格
      this.array[i] = this.array[i - 1];
    }
    this.array[index] = value;
    this.size++; //每次插入1個數字 = 只加1格
  }

  // 將指定數值從陣列中全部移除
  remove(value: number /* | undefined */) {
    // [0, 0, 1, 0, 0, 3] 移除0 => [1, 3]
    // Should not create a new array.
    // TODO: Should use only one loop
    let w = 0;
    for (let r = 0; r < this.size; r++) {
      if (this.array[r] !== value) {
        this.array[w] = this.array[r];
        w++;
      }
      this.array[r] = undefined; // Q: 更改Array的型別宣告，加入undefined？
    }
    this.size = w;
    // let i: number = 0;
    // while (i < this.size) {
    //   if (this.array[i] === value) {
    //     this.removeAt(i);
    //   } else {
    //     i++;
    //   }
    // }
  }

  // 移除指定index位置上的數值
  removeAt(index: number) {
    // [0, 0, 1, 0, 0, 3] 移除this.array[3] => [0, 0, 1, 0, 3]
    // [4] => [3]
    // [5] => [4]
    // [6] => (undefined)
    this.assertValidIndex(index);

    for (let i = index; i < this.size /** - 1 */; i++) {
      // TODO: 最後一格不必再置換新值（僅需清空），故跑到倒數第二格即可？
      this.array[i] = this.array[i + 1];
    }
    this.size--;
    // this.array[this.size] = undefined; // Q: 明確清空最後一格？更改Array的型別宣告，加入undefined？
  }

  // 取得已儲存數值的陣列長度
  getSize(): number {
    return this.size;
  }

  // 取得指定index位置的數值
  get(index: number): number {
    this.assertValidIndex(index);
    return this.array[index];
  }

  // 是否包含指定的數值
  contains(value: number): boolean {
    // for (let i = 0; i < this.size; i++) {
    //   if (this.array[i] === value) {
    //     return true;
    //   }
    // }
    // return false;

    return this.indexOf(value) !== null;
  }

  // 回傳首次出現目標值的index位置
  indexOf(value: number): number | null {
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return null;
  }

  // 回傳最後出現目標值的index位置
  lastIndexOf(value: number): number | null {
    for (let i = this.size - 1; i >= 0; i--) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return null;
  }
}
// 錯誤寫法：
// remove(value: number) {
//   let result: Array<number> = new Array<number>(this.array.length);
//   let j = 0;
//   for (let i = 0; i < this.size /* Buggy */; i++) {
//     if (
//       this.array[i] !== value
//       // && this.array[i] !== undefined /* 若不加此條件，size會錯 */ // Why?
//     ) {
//       result[j] = this.array[i];
//       j++;
//       // console.log(this.array[i]);
//     }
//   }
//   this.size = j;
//   this.array = result;

//   return this.array;
// }

// 測試資料：
//////////////////////////////
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
// console.log(arr1);

arr1.removeAt(14);
// console.log(arr1);
//////////////////////////////////////////////////////////////////////////////////
const arr2 = new ArrayList();
arr2.add(0);
arr2.add(0);
arr2.add(1);
arr2.add(0);
arr2.add(0);
arr2.add(3);
// console.log(arr2.indexOf(0)); //0
// console.log(arr2.lastIndexOf(0)); //4
// console.log(arr2.indexOf(7)); //null
// console.log(arr2.lastIndexOf(7)); //null
arr2.remove(0);
console.log(arr2); //ArrayList { array: [ 1, 3, <8 empty items> ], size: 2 }
// console.log(arr2.getSize());
arr2.add(9);
// console.log(arr2); //ArrayList {
//   array: [ 1, 3, 9, undefined, undefined, undefined, <4 empty items> ],
//   size: 2
// }

const arr3 = new ArrayList();
arr3.add(8);
arr3.add(4);
arr3.add(4);
arr3.add(4);
arr3.add(6);
arr3.add(7);
arr3.remove(4);
// console.log(arr3);
// ArrayList {
//   array: [ 8, 6, 7, undefined, undefined, undefined, <4 empty items> ],
//   size: 3
// }

// console.log(arr3.get(0)); //8
// console.log(arr3.get(1)); //Invalid index number
// console.log(arr3.contains(4));
// console.log(arr3.contains(8));
