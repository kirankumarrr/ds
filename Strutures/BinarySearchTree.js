function BST(value){
    this.value=value;
    this.left =null;
    this.right =null;
}

//Creating Inset Method
BST.prototype.insert=function(inputValue){
   if(this.value>inputValue){
    this.left ? this.left.insert(inputValue) :  this.left= new BST(inputValue);
   }else{
    this.right ? this.right.insert(inputValue) :this.right= new BST(inputValue);
   }
}

//Creating Contains Method:
BST.prototype.contains = function(searchValue){
    if(this.value === searchValue) return true;
    else if(this.value>searchValue){
        return this.left ? this.left.contains(searchValue) : false;
    }else{
        return this.right ? this.right.contains(searchValue) : false;
    }
}

//Depth First Traversal
BST.prototype.depthFirstTraversal = function(iteratorFxn){
    //Running this iterator in Order
    this.left ? this.left.depthFirstTraversal(iteratorFxn) : null
    iteratorFxn(this.value);
    this.right? this.right.depthFirstTraversal(iteratorFxn):  null
}

//Depth First Traversal Order
BST.prototype.depthFirstTraversalOrder = function(iteratorFxn,order){
    //Running this iterator pre-order will while cloning BST
    order==='pre-order'? iteratorFxn(this.value) : null
    this.left ? this.left.depthFirstTraversalOrder(iteratorFxn,order) : null
    order==='in-order'? iteratorFxn(this.value) : null
    this.right? this.right.depthFirstTraversalOrder(iteratorFxn,order):  null
    order==='post-order'? iteratorFxn(this.value) : null
}
/**
 *                50
 *           40          60
 *        20    45   55      70
*/
var bst = new BST(50);
bst.insert(50);
bst.insert(60);
bst.insert(20);
bst.insert(45);
bst.insert(55);
bst.insert(70);
// bst.contains(20)
function log(value){console.log(value)};

console.log('%c depthFirstTraversalOrder in-order! ', 'background: #222; color: #bada55');
bst.depthFirstTraversalOrder(log,'in-order');
// Note : depthFirstTraversal === depthFirstTraversalOrder in-order
// console.log('%c depthFirstTraversal! ', 'background: #222; color: #bada55');
// bst.depthFirstTraversal(log);
console.log('%c depthFirstTraversalOrder pre-order! ', 'background: #222; color: #bada55');
bst.depthFirstTraversalOrder(log,'pre-order');
console.log('%c depthFirstTraversalOrder post-order! ', 'background: #222; color: #bada55');
bst.depthFirstTraversalOrder(log,'post-order');


console.log('%c ============XXXXX============ ', 'background: green; color: #fff');
console.log('%c BreadthForTravsal ', 'background: #222; color: #bada55');
console.log('%c ============XXXXX============ ', 'background: green; color: #fff');


BST.prototype.breathFirstTraversal = function(iteratorFxn){
    let queue=[this];
    while(queue.length){
        let currentTreeNode = queue.shift();
        iteratorFxn(currentTreeNode);
        currentTreeNode.left ? queue.push(currentTreeNode.left) : null;
        currentTreeNode.right ? queue.push(currentTreeNode.right) : null;
    }
}
BST.prototype.getMaxVal = function(){
    console.log("this.right:::",typeof this.right,this.value)
    // return this.right ? this.right.getMaxVal() : this.value;
    if(this.right!==null) return this.right.getMaxVal();
    else return this.value;
}
BST.prototype.getMinVal = function(){
    return this.left ? this.left.getMinVal() : this.value;
}
bst.breathFirstTraversal(log);
console.log('%c BreadthForTravsal getMaxVal', 'background: #222; color: #bada55');
console.log('%c BreadthForTravsal getMinVal', 'background: #222; color: #bada90');
bst.getMaxVal();
let obj={
  a:77
}
console.log('%c BreadthForTravsal getMinVal', 'background: #222; color: #bada38');
// bst.getMinVal();