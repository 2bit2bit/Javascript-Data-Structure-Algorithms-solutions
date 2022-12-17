class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value == currentNode.value) {
        return undefined;
      }

      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      } else if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return this;
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (true) {
      if (value == currentNode.value) {
        return true;
      }

      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      } else if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      }
    }
  }
}

var tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(5);
// tree.insert(4);
// tree.insert(11);
// console.log(tree.insert(6));


console.log(tree.find(4));
