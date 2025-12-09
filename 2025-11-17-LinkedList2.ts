class Node2 {
  value: number;
  next: Node2 | null;

  constructor(value: number, next: Node2 | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList2 {
  head: Node2 | null = null;
  size: number = 0;

  getNode(index: number): Node2 | null | undefined {
    let currentNode: Node2 | null | undefined = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.next;
    }
    return currentNode;
  }

  add(value: number) {
    const newNode = new Node2(value, null);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      const prevNode: Node2 | null | undefined = this.getNode(this.size - 1);
      if (prevNode === null || prevNode === undefined) {
        throw new Error("BUGGY");
      }
      prevNode.next = newNode;
    }
    this.size++;
  }

  insert(index: number, value: number) {
    // const newNode = new Node2(value, null);
    if (index === 0) {
      this.head = new Node2(value, this.head); // this.head原本就可能是null，因為已涵蓋此情況，不必再檢查if (this.head === null)的條件判斷
      // 冗餘寫法：
      //   if (this.head === null) {
      //     this.head = newNode;
      //   } else {
      //     newNode.next = this.head;
      //     this.head = newNode; // 邏輯重複
      //   }
    } else {
      const prevNode: Node2 | null | undefined = this.getNode(index - 1);
      if (prevNode === null || prevNode === undefined) {
        throw new Error("BUGGY");
      }
      // 不需再寫else分支，因為異常狀況已在if直接跳出了，以下的code一律都要執行
      const node = new Node2(value);
      node.next = prevNode.next;
      prevNode.next = node;
    }
    this.size++;
  }

  removeAt(index: number) {
    if (index === 0) {
      // this.size === 0 || this.head === null || index === 0
      this.head = this.head?.next ?? null; //新頭要不就是下一個node，要不就是null
    } else {
      const prevNode = this.getNode(index - 1);
      const toBeRemoved = prevNode?.next;
      if (!toBeRemoved) {
        throw new Error("Index out-of-bound");
      }
      if (!prevNode) {
        throw new Error("Index out-of-bound");
      }
      prevNode.next = toBeRemoved?.next;
    }
    this.size--;
  }

  get(index: number): number {
    const node: Node2 | null | undefined = this.getNode(index);
    const value = node?.value;
    if (value !== undefined) {
      // 明確排除undefined的情況下return value，才不會報錯
      return value;
    } else {
      throw new Error("Index out-of-bound");
    }
    // if (this.getNode(index).value === undefined) {
    //   throw new Error("Index out-of-bound");
    // } else {
    //   return this.getNode(index)?.value; // 類型 'number | undefined' 不可指派給類型 'number'。
    // }
  }

  getSize(): number {
    return this.size;
  }

  contains(value: number): boolean {
    return this.indexOf(value) !== null;
  }

  indexOf(value: number): number | null {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++; // index手動控制，精準不跑偏
    }
    return null; // 沒有找到指定的數值
  }

  lastIndexOf(value: number): number | null {
    let currentIndex = 0;
    let targetIndex: number | null = null;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        targetIndex = currentIndex;
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
    console.log("size:", this.size);
  }
}

const list2 = new LinkedList2();
list2.add(3);
list2.add(5);
list2.add(7);
list2.print();
list2.add(10);
list2.print();
list2.insert(0, 12);
list2.print();
list2.insert(1, 11);
list2.print();
list2.removeAt(2);
list2.print();
list2.removeAt(0);
list2.print();
