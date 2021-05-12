class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

//Draw bacK : More Memory then singlyLinkedList
class DoublyLinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(value) {
    // 1 <---> 2 <--->3
    if (!this.head) return null;
    var poppedNode = this.tail;
    if (this.length === 1) {
      //initial DoublyLinkedList
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null; //When you return this node deleting the node, this node has
      //all previous node connection till head, so clearing it
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return null;
    var shiftedCurrentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedCurrentHead.next;
      shiftedCurrentHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shiftedCurrentHead;
  }

  unshift(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /* 
  * @method get
    @desc : get value in particular indexPosition
    @desc : if indexPosition is greater then the doublyLinkedList length return -1
    @desc :Optimisation
          using length start searching either from head or tail
          1 2 3 4 5 6 -> when searching at index 4 ;its better to start from tail
          1 2 3 4 5 6 -> when searching at index 2 ;its better to start from head
    @return { node / null }
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    if (this.length / 2 <= index) {
      console.log('STARTED AT TAIL');
      //Start from end
      var count = this.length - 1;
      var currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
      return currentNode;
    } else {
      console.log('STARTED AT HEAD');
      //Start from beginning
      var count = 0;
      var currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    }
  }

  set(index, value) {
    var currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return currentNode;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.unshift(value);
    else if (index === this.length - 1) return this.push(value);
    else {
      var newNode = new Node(value);
      var beforeNode = this.get(index - 1);
      var afterNode = beforeNode.next;

      newNode.next = beforeNode.next;
      newNode.prev = beforeNode;
      beforeNode.next = newNode;
      afterNode.prev = newNode;
      this.length++;
      return this;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      var currentNode = this.get(index);

      var prevNode = currentNode.prev;
      var nextNode = currentNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      currentNode.next = null;
      currentNode.prev = null;

      this.length--;
      return currentNode;
    }
  }

  printFromHead() {
    var currentNode = this.head;
    var arr = [currentNode.value];
    while (currentNode.next) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }
    return arr;
  }

  printFromTail() {
    var currentNode = this.tail;
    var arr = [currentNode.value];
    while (currentNode.prev) {
      currentNode = currentNode.prev;
      arr.push(currentNode.value);
    }
    return arr;
  }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
