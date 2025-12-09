class Node4 {
    value: number;
    next: Node4 | null;

    constructor(value: number, next: Node4 | null = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList4 {
    head: Node4 | null = null;
    size: number = 0;

    getNode(index: number) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (!current) {
                throw new Error("BUGGY");
            }
            current = current.next; //TODO: make crystal clear
        }
        return current;
    }

    add(value: number){
        let newNode = new Node4(value, this.head);
        if (this.size === 0) {
            this.head = newNode;
        }
        else {
            newNode.next = null;
            let prev = this.getNode(this.size - 1);
            if (!prev) {
                throw new Error("BUGGY");
            }
            prev.next = newNode;
        }
        this.size++;
    }

    insert(index: number, value: number) {
        let newNode = new Node4(value, this.head);
        let current = this.head;
        while (current !== null) {
            if (index === 0) {
                // newNode.next = this.head; //TODO: make crystal clear
                this.head = newNode;
            }
            else {
                const prev = this.getNode(index - 1);
                if (!prev) {
                    throw new Error("Index out of bound");
                }
                newNode.next = prev.next;
                prev.next = newNode;
            }
            current = current.next;
        }
        this.size++;
    }

    removeAt(index: number) {
        // TODO: No loop
        if (index === 0) {
            if (this.head !== null) {
                this.head = this.head.next;
            }
        }
        else { //TODO: Why I can't just write another "if"? all node behind 0 will disappear
            const prev = this.getNode(index - 1);
            if (!prev || !prev.next) {
                throw new Error("Index out of bound");
            }
            else {
                prev.next = prev.next.next;
            }
        }
        this.size--;
    }

    remove(value: number) {
        let current = this.head;
        let prev = null;
        while (current !== null) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = this.head.next;
                }
                else {
                    // TODO: delete none head
                    if (prev !== null && prev.next !== null) {
                        prev.next = prev.next.next;
                    }
                }
                this.size--;
            }
            else {
                prev = current;
            }
            current = current.next;
        }
        // let current = this.head;
        // let prev = null;
        // while (current !== null) {
        //     if (current.value === value) {
        //         if (current === this.head) {
        //             this.head = this.head.next;
        //         }
        //         else {
        //             // TODO: delete none head
        //             if (prev !== null && prev.next !== null) {
        //                 prev.next = prev.next.next;
        //             }
        //         }
        //         this.size--;
        //     }
        //     else {
        //         prev = current;
        //     }
        //     current = current.next;
        // }
    }

    get(index: number): number | null {
        const value = this.getNode(index)?.value;
        if (!value) {
            throw new Error("BUGGGY");
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
        let current = this.head;
        let index: number = 0;
        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return null;
    }

    lastIndexOf(value: number): number | null {
        let current = this.head;
        let index: number = 0;
        let targetIndex: number | null = null;
        while (current !== null) {
            if (current.value === value) {
                targetIndex = index;
            }
            current = current.next;
            index++;
        }
        return targetIndex;
    }

    print() {
        let str = "";
        let current = this.head;
        while (current !== null) {
           str += current.value;
           str += " => ";
           current = current.next;
        }
        console.log(str);
        console.log("size:", this.size);
    }
}

const list4 = new LinkedList4();
list4.add(3);
list4.add(5);
list4.insert(0, 1);
list4.removeAt(0);
list4.print();
list4.insert(1, 11);
list4.print();
list4.removeAt(0);
list4.removeAt(1);
list4.print();
list4.insert(2, 11);
list4.insert(3, 11);
list4.insert(4, 11);
list4.add(11);
list4.print();
list4.remove(11);
list4.print();