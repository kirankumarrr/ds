class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* 
@class BinaryTree
@desc : each child node can't have more than 2 leafs 

1. Breath First Search
        
         ---->  10
    ---->   4    ---->  15  
 ---->   3      8      ---->  20
    [10,4,15,3,8,20]    
    [ROOT,  NEXT LEVEL NODES LEFT TO RIGHT, NEXT LEVEL NODES LEFT TO RIGHT]

2. Depth First Search

=>IN ORDER

          10
       4        15  
    3      8        20  

[3,4,8,10,15,20]
LEFT TOP BOTTOM ---> ROOT ---> RIGHT TOP BOTTOM


=>PREORDER

          10
       6        15  
    3      8        20  

[10,6,3,8,15,20]
ROOT ---> TOP LEFT ---> TOP RIGHT


=>POST ORDER

           10
       4        15  
    3      8        20  

[3,8,4,20,15,10]

BOTTOM LEFT ---> BOTTOM RIGHT ---> ROOT

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
  /* 
    @method breathFirstSearch
    @desc : each child node can't have more than 2 leafs 

    1. Breath First Search

             ---->  10
        ---->   4    ---->  15  
     ---->   3      8      ---->  20
        [10,4,15,3,8,20]    
        [ROOT,  NEXT LEVEL NODES LEFT TO RIGHT, NEXT LEVEL NODES LEFT TO RIGHT]


    */
  breathFirstSearch() {
    var currentNode = this.root;
    var queue = [this.root];
    var visited = [];
    while (queue.length) {
      var currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return visited;
  }

  DFSPreOrder() {
    var visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left); //checking all left node back to back until its null
      if (node.right) traverse(node.right); //checking all right node back to back until its null
    }
    traverse(this.root);
    console.log(JSON.stringify({ 'DFS-PREORDER': visited }));
    return visited;
  }

  DFSPostOrder() {
    var visited = [];
    function traverse(node) {
      //           console.log("NODE=>",node)

      if (node.left) traverse(node.left); //checking all left node back to back until its null
      if (node.right) traverse(node.right); //checking all right node back to back until its null
      visited.push(node.value);
    }
    traverse(this.root);
    console.log(JSON.stringify({ 'DFS-POSTORDER': visited }));
    return visited;
  }

  DFSInOrder() {
    var visited = [];
    function traverse(node) {
      //           console.log("NODE=>",node)

      if (node.left) traverse(node.left); //checking all left node back to back until its null
      visited.push(node.value);
      if (node.right) traverse(node.right); //checking all right node back to back until its null
    }
    traverse(this.root);
    console.log(JSON.stringify({ 'DFS-INORDER': visited }));
    return visited;
  }

  DFSOrders(order) {
    var visited = [];
    function traverse(node) {
      //               console.log("NODE=>",node)
      if (order === 'PREORDER') visited.push(node.value);
      if (node.left) traverse(node.left); //checking all left node back to back until its null
      if (order === 'INORDER') visited.push(node.value);
      if (node.right) traverse(node.right); //checking all right node back to back until its null
      if (order === 'POSTORDER') visited.push(node.value);
    }
    traverse(this.root);
    console.log(JSON.stringify({ [order]: visited }));
    return visited;
  }
}

var bfs = new BinarySearchTree();
bfs.insert(10);
bfs.insert(6);
bfs.insert(15);
bfs.insert(3);
bfs.insert(8);
bfs.insert(20);
bfs.breathFirstSearch();
bfs.DFSPreOrder();
bfs.DFSPostOrder();
bfs.DFSInOrder();
bfs.DFSOrders('PREORDER');
bfs.DFSOrders('INORDER');
bfs.DFSOrders('POSTORDER');

/**

    COMMON :    TIME IS SAME FOR BOTH
    
    BFS  ?
        SPACE IS ISSUE : SINCE WE STORING NODES IN QUEUE(BUT VARIES ON STRUCTURE HEIGHT)
     
    DFS  ?
        why in, per and post?
        inorder: helps when we need sorted data(lower to higher)
        preorder : may be helps to duplicate the tree with same values(still happy this though)
        postorder : donno
       ***** Find out when working on graphs*****

*/
