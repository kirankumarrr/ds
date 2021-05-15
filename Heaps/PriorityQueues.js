class Node {
  constructor(value, priority) {
    this.priority = priority;
    this.value = value;
  }
}

class MaxPriorityQueues {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    var newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp(newNode);
  }

  bubbleUp(element) {
    var index = this.values.length - 1;
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2); //get parentIndex
      var parentValue = this.values[parentIndex];
      if (element.priority <= parentValue.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parentValue;
      index = parentIndex;
    }
  }

  /**
      1. Remove from root
      2. Replace with the most recently added (last time)
      3. Adjust(sink down)
  */
  dequeue() {
    var rootRemoved = this.values.shift();
    var lastNode = this.values.pop();
    this.values.unshift(lastNode);
    //       return this.values
    this.sinkNow();
    return rootRemoved;
  }

  /**
    1.Pick Root and compare values with its children
    if any node is greater than compare with  root and swap positions
  */
  sinkNow() {
    var root = this.values[0];
    var n = 0;

    while (true) {
      var leftNodeIdx = 2 * n + 1;
      var rightNodeIdx = 2 * n + 2;
      var leftChild, rightChild;
      var swap = null;

      if (leftNodeIdx < this.values.length) {
        leftChild = this.values[leftNodeIdx];
        if (leftChild.priority > root.priority) {
          swap = leftNodeIdx;
        }
      }

      if (rightNodeIdx < this.values.length) {
        rightChild = this.values[rightNodeIdx];
        var isAlreadySwapAndRightGreaterThenLeft =
          swap && rightChild.priority > leftChild.priority;
        var isNotSwappedRightGreaterThanRoot =
          !swap && rightChild.priority > root.priority;
        if (
          isNotSwappedRightGreaterThanRoot ||
          isAlreadySwapAndRightGreaterThenLeft
        ) {
          swap = rightNodeIdx;
        }
      }

      if (!swap) {
        break;
      } else {
        var temp = this.values[n];
        this.values[n] = this.values[swap];
        this.values[swap] = temp;
        n = swap;
      }
    }
  }
}

var ER = new MaxPriorityQueues();
ER.enqueue('cold', 1);
ER.enqueue('gunshot wound', 5);
ER.enqueue('fever', 2);

class MinPriorityQueues {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    var newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp(newNode);
  }

  bubbleUp(element) {
    var index = this.values.length - 1;
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2); //get parentIndex
      var parentValue = this.values[parentIndex];
      if (element.priority >= parentValue.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parentValue;
      index = parentIndex;
    }
  }

  /**
      1. Remove from root
      2. Replace with the most recently added (last time)
      3. Adjust(sink down)
  */
  dequeue() {
    var rootRemoved = this.values.shift();
    var lastNode = this.values.pop();
    this.values.unshift(lastNode);
    //       return this.values
    this.sinkNow();
    return rootRemoved;
  }

  /**
    1.Pick Root and compare values with its children
    if any node is greater than compare with  root and swap positions
  */
  sinkNow() {
    var root = this.values[0];
    var n = 0;

    while (true) {
      var leftNodeIdx = 2 * n + 1;
      var rightNodeIdx = 2 * n + 2;
      var leftChild, rightChild;
      var swap = null;

      if (leftNodeIdx < this.values.length) {
        leftChild = this.values[leftNodeIdx];
        if (leftChild.priority < root.priority) {
          swap = leftNodeIdx;
        }
      }

      if (rightNodeIdx < this.values.length) {
        rightChild = this.values[rightNodeIdx];
        var isAlreadySwapAndRightGreaterThenLeft =
          swap && rightChild.priority < leftChild.priority;
        var isNotSwappedRightGreaterThanRoot =
          !swap && rightChild.priority < root.priority;
        if (
          isNotSwappedRightGreaterThanRoot ||
          isAlreadySwapAndRightGreaterThenLeft
        ) {
          swap = rightNodeIdx;
        }
      }

      if (!swap) {
        break;
      } else {
        var temp = this.values[n];
        this.values[n] = this.values[swap];
        this.values[swap] = temp;
        n = swap;
      }
    }
  }
}

var ERMin = new MinPriorityQueues();
ERMin.enqueue('cold', 1);
ERMin.enqueue('gunshot wound', 15);
ERMin.enqueue('fever', 12);
ERMin.enqueue('fever-in', 13);
ERMin.enqueue('fever-out', 14);
