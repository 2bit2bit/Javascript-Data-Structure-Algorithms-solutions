//Array Implementation

// let queue = []
// queue.unshift(3)
// queue.unshift(2)
// queue.unshift(6)
// queue.pop()

// console.log(queue)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;

    return this.size;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }

    let curFirst = this.first;

    if (this.size == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = curFirst.next;
    }
    this.size--;
    return curFirst;
  }
}

// let queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// queue.dequeue();

// console.log(queue);
