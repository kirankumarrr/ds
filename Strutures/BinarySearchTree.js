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
}

var bst = new BST(50);
bst.insert(20);
bst.insert(15);
bst.insert(25);
bst.contains(20)
function log(value){console.log(value)};

console.log('%c depthFirstTraversalOrder in-order! ', 'background: #222; color: #bada55');
bst.depthFirstTraversalOrder(log,'in-order');
console.log('%c depthFirstTraversalOrder pre-order! ', 'background: #222; color: #bada55');
bst.depthFirstTraversalOrder(log,'pre-order');
console.log('%c depthFirstTraversal! ', 'background: #222; color: #bada55');
bst.depthFirstTraversal(log);