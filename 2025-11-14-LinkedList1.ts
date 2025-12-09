class NodeL1 {
  value: number;
  next: NodeL1 | null;

  constructor(value: number, next: NodeL1 | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList1 {
  head: NodeL1 | null = null;
  size: number = 0;

  // 取得指定index位置上的node
  getNode(index: number): NodeL1 | null | undefined {
    let currentNode: NodeL1 | null | undefined = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.next;
    }
    return currentNode;
  }

  // 將指定數值加入最後一格
  add(value: number) {
    const addedNode = new NodeL1(value, null);
    if (this.size === 0) {
      // Q: = if (this.head === null)?
      this.head = addedNode;
    } else {
      let finalNode: NodeL1 | null | undefined = this.getNode(this.size - 1);
      if (finalNode === null || finalNode === undefined) {
        throw new Error("BUGGY");
      }
      finalNode.next = addedNode; // 前一個node的下一個指向位置，換成新增的node
    }
    this.size++;
  }

  // 將指定數值插入指定位置
  insert(index: number, value: number) {
    if (index === 0) {
      this.head = new NodeL1(value, this.head); // head指向新增的node
    } else {
      const prevNode: NodeL1 | null | undefined = this.getNode(index - 1);
      if (prevNode === null || prevNode === undefined) {
        throw new Error("BUGGY");
      }
      const node = new NodeL1(value);
      node.next = prevNode.next; // 將node.next重新賦值，指向插入位置的下一格
      prevNode.next = node;
    }
    this.size++;
  }

  // 將指定位置上的node移除
  removeAt(index: number) {
    if (index === 0) {
      const newHead = this.head?.next;
      if (newHead === undefined) {
        this.head = null;
      } else {
        this.head = newHead;
      }
    } else {
      const prevNode = this.getNode(index - 1);
      if (!prevNode) {
        throw new Error("Index out-of-bound");
      } else {
        const toBeRemoved = prevNode.next;
        if (!toBeRemoved) {
          throw new Error("Index out-of-bound");
        }
        prevNode.next = toBeRemoved.next;
      }
    }
    this.size--;
    // const prevNode = this.getNode(index - 1);
    // const toBeRemoved = prevNode?.next;
    // if (index === 0) {
    //   this.head = this.getNode(index + 1); // 未檢查newHead
    // } else if (!prevNode || !toBeRemoved) { // 未分別檢查prevNode、toBeRemoved
    //   throw new Error("Index out-of-bound");
    // } else {
    //   prevNode.next = toBeRemoved.next;
    // }
    // 忘記this.size--
  }

 
  remove(value: number) {}

  // 回傳指定index位置上的數值
  get(index: number): number {
    const node: NodeL1 | null | undefined = this.getNode(index);
    const value = node?.value;
    if (value !== undefined) {
      return value;
    } else {
      throw new Error("Index out-of-bound");
    }
    // if (!node) { //若當前的節點不存在...
    //   throw new Error("BUGGY");
    // } else {
    //   return node.value;
    // }
  }

  // 回傳linkedList（已串連node）的大小
  getSize(): number {
    return this.size;
  }

  // 回傳linkedList是否包含指定數值的布林值
  contains(value: number): boolean {
    return this.indexOf(value) !== null;
  }

  // 回傳linkedList綁定指定數值的第一個index位置
  indexOf(value: number): number | null {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.next; //把node的指向位置，從現在的指向位置改到下一格
      currentIndex++;
    }
    return null;
  }

  // 回傳linkedList綁定指定數值的最後一個index位置
  lastIndexOf(value: number): number | null {
    let currentIndex = 0;
    let targetIndex: number | null = null;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        targetIndex = currentIndex; // 下一個index會覆蓋掉前一個，直到最後一個
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return targetIndex;
  }

  print() {
    let str = "";
    let node = this.head;
    while (node !== null) {
      str += node.value;
      str += " ";
      node = node.next;
    }
    console.log(str);
    console.log("size: ", this.size);
  }
}

const list = new LinkedList1();
// list.add(3);
// list.add(5);
// list.add(7);
// list.print();
// list.add(10);
// list.print();
// list.insert(0, 12);
// list.print();
// list.insert(1, 11);
// list.print();
// list.removeAt(2);
// list.print();
// list.removeAt(0);
// list.print();

const list1 = new LinkedList1();
list1.add(1);
list1.add(1);
list1.add(8);
list1.add(7);
list1.add(1);
list1.add(1);
list1.add(7);
list1.add(8);
list1.add(1);
list1.print();
list1.remove(1);
list1.print();

////////////////////////////////////////////////////////
// remove錯誤寫法
// remove(value: number) {
//   let i = 0;
//   let count = this.size;
//   while (i < this.size) {
//     let currentNode = this.getNode(i);
//     // 找到目標值，準備移除
//     if (currentNode?.value === value) {
//       // 1. 目標值在第一位
//       if (i === 0) {
//         const newHead = this.head?.next;
//         if (newHead?.next === undefined) {
//           this.head = null;
//         } else {
//           this.head = newHead;
//         }
//       }
//       // 2. 目標值在第一位之後（i > 0）
//       // Q: 為何index[1]的值1被跳過了？
//       // 是因為格子已經被移除了（newHead），所以index[1]拿到的是值8嗎？
//       // linkedList會即時更新，i隨著linkedList而浮動？
//       // => 找到值的話，i停在原地；沒找到，i才往前移動
//       else {
//         const prevNode = this.getNode(i - 1);
//         console.log(prevNode); // value: 7 {...} 目標值的前一位
//         if (!prevNode) {
//           throw new Error("Buggy!");
//         }
//         const toBeRemoved = prevNode?.next;
//         if (!toBeRemoved) {
//           throw new Error("Nothing to remove");
//         } else {
//           prevNode.next = toBeRemoved?.next;
//         }
//       }
//       // 找到目標值，size扣1格
//       count--;
//     }
//     // 沒找到目標值
//     else {
//       i++;
//     }
//   }
//   this.size = count;
// }

// insert語意不太正確的版本
// insert(index: number, value: number) {
//   const node = new NodeL1(value, this.head); // 先將node.next設為目前的第一格值
//   if (index === 0) {
//     this.head = node; // head指向新增的node
//   } else {
//     const prevNode: NodeL1 | null | undefined = this.getNode(index - 1);
//     if (prevNode === null || prevNode === undefined) {
//       throw new Error("BUGGY");
//     }
//     node.next = prevNode.next; // 將node.next重新賦值，指向插入位置的下一格
//     prevNode.next = node; // prevNode.next放在等號左側表示該集合的尾巴，右側表示該集合的下一個集合？
//   }
//   this.size++;
// }
