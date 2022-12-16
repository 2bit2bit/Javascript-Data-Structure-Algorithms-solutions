class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let pre = current;
    for (let i = 0; i < this.length - 1; i++) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    this.head = current.next;

    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return current.val;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);

    if (!node) {
      return false;
    }
    node.val = val;

    return node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index == 0) {
      return Boolean(this.unshift(val));
    }

    if (index == this.length) {
      return Boolean(this.push(val));
    }

    let newNode = new Node(val);

    let preNode = this.get(index - 1);
    let postNode = preNode.next;

    preNode.next = newNode;
    newNode.next = postNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index == 0) {
      return this.shift(index);
    }

    if (index == this.length - 1) {
      return this.pop(index);
    }

    let preNode = this.get(index - 1);
    let node = preNode.next;

    preNode.next = node.next;

    this.length--;
    return node.val;
  }

  reverse() {
    let curNode = this.head;

    this.head = this.tail;
    this.tail = curNode;

    let preNode = null;
    let postNode;

    let counter = 0;
    while (counter < this.length) {
      postNode = curNode.next;
      curNode.next = preNode;
      preNode = curNode;
      curNode = postNode;

      counter++;
    }

    return this;
  }
}

// let list = new SinglyLinkedList();
// list.push(34);
// list.push(5);
// list.push(100);
// list.push(4);
// list.push(7);
// list.push(9);
// list.push(10);

// list.reverse();
// console.log("--------------");
// for (let index = 0; index < list.length; index++) {
//   console.log(list.get(index).val);
// }

