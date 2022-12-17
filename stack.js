//Array Implementation

// let stack = []
// stack.push(1)
// stack.pop()

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }

    this.size++;

    return this.size;
  }

  pop() {
    if (!this.first) {
      return undefined;
    }

    let curLast = this.last;

    if (this.size == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.last = curLast.next;
    }
    this.size--;
    return curLast;
  }
}

// let stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4)

// stack.pop();
// stack.pop();
// console.log(stack);
