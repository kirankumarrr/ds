class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* 
@class BinarySearchTree
@desc : each child node can't have more than 2 leafs 
@desc : left of root should have lesser numbers
@desc : right of root should have greater numbers

Insertion => BEST-> O(log n)  WORST => O(N)
Searching => BEST-> O(log n)  WORST => O(N)

NOTE:LEARN AVL TREE  +  USE recursion

*/
class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    var node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    var current = this.root;
    while (true) {
      if (current.value === value) return undefined;
      else if (value < current.value) {
        //LEFT
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        //RIGHT
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return null;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(25);
