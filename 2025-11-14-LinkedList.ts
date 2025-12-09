class NodeL {
  value: number;
  next: NodeL | null;

  constructor(value: number, next: NodeL | null = null /** default value */) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: NodeL | null = null;
  size: number = 0;

  getNode(index: number): NodeL | null | undefined {
    let prevNode: NodeL | null | undefined = this.head;
    for (let i = 0; i < index; i++) {
      prevNode = prevNode?.next;
    }
    return prevNode;
  }

  add(value: number) {
    const node = new NodeL(value, null);
    if (this.size === 0) {
      this.head = node;
    } else {
      let prevNode: NodeL | null | undefined = this.getNode(this.size - 1);
      if (prevNode === null || prevNode === undefined) {
        throw new Error("BUGGY");
      }
      prevNode.next = node;
    }
    this.size++;
  }
  insert(index: number, value: number) {
    if (index === 0) {
      //   const node = new NodeL(value, this.head);
      //   this.head = node;
      this.head = new NodeL(value, this.head); // Q: new
    } else {
      let prevNode: NodeL | null | undefined = this.getNode(index - 1);
      if (prevNode === null || prevNode === undefined) {
        throw new Error("BUGGY");
      }
      const node = new NodeL(value); // Q: 只有插入一個數值，但要new兩次？
      node.next = prevNode.next;
      prevNode.next = node;
    }
    this.size++;
  }

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
  }
  remove(value: number) {}

  getSize(): number {
    return this.size;
  }

  get(index: number): number {
    //TODO: Explain user error and system error.
    // let node: NodeL | null | undefined = this.head;
    // for (let i = 0; i < index; i++) {
    //   // (NodeL | null) | undefined
    //   node = node?.next; // null.next -> undefined
    // }

    let node: NodeL | null | undefined = this.getNode(index);
    const value = node?.value;
    if (value !== undefined) {
      return value;
    } else {
      throw new Error("Index out-of-bound");
    }
  }

  contains(value: number): boolean {
    return this.indexOf(value) !== null;
  }

  indexOf(value: number): number | null {
    let index = 0;
    let node = this.head;
    while (node !== null) {
      if (node.value == value) {
        // Bingo
        return index;
      }
      node = node.next;
      index++;
    }
    return null;
  }

  lastIndexOf(value: number): number | null {
    let index = 0;
    let targetIndex: number | null = null;
    let node = this.head;
    while (node !== null) {
      if (node.value == value) {
        // Bingo
        targetIndex = index;
      }
      node = node.next;
      index++;
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
  }
}

const l = new LinkedList();
l.add(3);
l.add(5);
l.add(7);
l.print();
l.add(10);
l.print();
l.insert(0, 12);
l.print();
l.insert(1, 11);
l.print();
l.removeAt(2);
l.print();
l.removeAt(0);
l.print();
