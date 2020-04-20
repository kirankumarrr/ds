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
var bst = new BST(50);
bst.insert(20);
bst.contains(20)