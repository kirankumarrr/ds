/*Another category of Tree


Binary Heap ?
Min/Max Heap
Useage ?

Very similar to a binary search tree, but with some different rules

1. MaxBinaryHeap : parent nodes >(Greater) child nodes
                
                    41
            39              33
        18      21       12


2. MinBinaryHeap : parent nodes <(Lesser) child nodes

                    1
            2              33
        18      21      45     55


Useage:
Binary Heap are used to implement Priority Queues
which are very commonly used DS

Used quite a bit, with graphs traversal alogrithms

Implemntation: BinaryTree->breathFirstSearch
1.Add to the end
2.Bubble Up

Big 0:

Insertion: O (log N)
Deletion : O (log N)
search : O (N)

*************** Priority Queues? ********************
    DS : each element has a priority.
    Elements with higher priorities are served before elements
    with lower priorities

    Seperate from heaps
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
    //         this.values = []
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp(element);
  }

  bubbleUp(element) {
    var index = this.values.length - 1;
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2); //get parentIndex
      var parentValue = this.values[parentIndex];
      if (element <= parentValue) break;
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
  remove() {
    var max = this.values.shift();
    var lastNode = this.values.pop();
    this.values.unshift(lastNode);
    //       return this.values
    this.sinkNow();
    return max;
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
        if (leftChild > root) {
          swap = leftNodeIdx;
        }
      }

      if (rightNodeIdx < this.values.length) {
        rightChild = this.values[rightNodeIdx];
        var isAlreadySwapAndRightGreaterThenLeft =
          swap && rightChild > leftChild;
        var isNotSwappedRightGreaterThanRoot = !swap && rightChild > root;
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

var maxHeap = new MaxBinaryHeap();
// maxHeap.insert(55)
// maxHeap.insert(1)
// maxHeap.insert(100)

class MinBinaryHeap {
  constructor() {
    //         this.values = [41,39,33,18,27,12]
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp(element);
  }

  bubbleUp(element) {
    var index = this.values.length - 1;
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2); //get parentIndex
      var parentValue = this.values[parentIndex];
      if (element >= parentValue) break; //Change for min
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
  remove() {
    var min = this.values.shift();
    var lastNode = this.values.pop();
    this.values.unshift(lastNode);
    //       return this.values
    this.sinkNow();
    return min;
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
        //Change for min
        leftChild = this.values[leftNodeIdx];
        if (leftChild < root) {
          //Change for min
          swap = leftNodeIdx;
        }
      }

      if (rightNodeIdx < this.values.length) {
        rightChild = this.values[rightNodeIdx];
        var isAlreadySwapAndRightGreaterThenLeft =
          swap && rightChild < leftChild; //Change for min
        var isNotSwappedRightGreaterThanRoot = !swap && rightChild < root; //Change for min
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

var minHeap = new MinBinaryHeap();
minHeap.insert(55);
minHeap.insert(1);
minHeap.insert(100);
