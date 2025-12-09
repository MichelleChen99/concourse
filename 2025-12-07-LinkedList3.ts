class Node3 {
    value: number;
    next: Node3 | null;

    constructor(value: number, next: Node3 | null = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList3 {
    head: Node3 | null = null;
    size: number = 0;
    
    getNode(index: number): Node3 | null {
        let currentNode: Node3 | null = this.head;
        for (let i = 0; i < index; i++) {
            if (currentNode === null) {
                return null;
            }
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // 將指定數值插入list的最後一格
    add(value: number) {
        const newNode = new Node3(value, null); // 新建一個node，將指定數值綁進去
        if (this.size === 0) {
            this.head = newNode;
        }
        else {
            const prevNode: Node3 | null = this.getNode(this.size - 1);
            if (prevNode === null) {
                throw new Error("BUGGY");
            }
            prevNode.next = newNode;
        }
        this.size++;
    }

    insert(index: number, value: number) {
        // 插入位置在頭
        if (index === 0) {
            this.head = new Node3(value, this.head);
        }
        // 插入位置在中間、尾巴，或超出範圍
        else {
            const prevNode: Node3 | null = this.getNode(index - 1);
            if (prevNode === null) {
                throw new Error("BUGGY");
            }
            const newNode = new Node3(value);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
        }
        this.size++;
    }

    removeAt(index: number) {
        if (index === 0) {
            if (!this.head) {
                throw new Error("Index out of bound");
            }
            this.head = this.head.next;
        }
        else {
            const prevNode = this.getNode(index - 1);
            if (!prevNode || !prevNode.next) {
                throw new Error("Index out of bound");
            }
            prevNode.next = prevNode.next.next;
        }
        this.size--;
    }

    remove(value: number) {
        let currentNode = this.head;
        let prevNode: Node3 | null = null;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                //刪頭
                if (prevNode === null) {
                    this.head = currentNode.next;
                }
                //刪非頭
                else {
                    prevNode.next = currentNode.next;
                }
                this.size--; 
            }
            //更新prevNode: 把currentNode變成下一輪的prevNode，發生在沒刪除時
            else {
                prevNode = currentNode;
            }
            //移動迭代指標往後跑，每輪都發生
            currentNode = currentNode.next;
        }
    }

    // 回傳指定位置的值
    get(index: number): number {
        const value = this.getNode(index)?.value;
        if (!value) {
            throw new Error("BUGGY");
        }
        else {
            return value;
        }
    }

    getSize(): number {
        return this.size;
    }

    contains(value: number): boolean {
        return this.indexOf(value) !== null;
    }

    indexOf(value: number): number | null {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex++
        }
        return null;
    }

    lastIndexOf(value: number): number | null {
        let currentNode = this.head;
        // 雙指標：currentIndex遍歷節點，targetIndex存值
        let currentIndex = 0
        let targetIndex: number | null = null;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                targetIndex = currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return targetIndex; // 一定是跑完迴圈return，才能拿到最後一個index
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

const list3 = new LinkedList3();
list3.add(3);
list3.add(5);
list3.add(7);
list3.print();
list3.add(10);
list3.insert(0, 12);
list3.insert(1, 11);
list3.print();
list3.removeAt(0);
list3.removeAt(1);
list3.print();
list3.insert(2, 11);
list3.insert(3, 11);
list3.insert(4, 11);
list3.add(11);
list3.print();
list3.remove(11);
list3.print();