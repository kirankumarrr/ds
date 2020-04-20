function LinkedList(){
    this.head=null;
    this.tail=null;
}

function Node(value,next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev
}

//Adding new head
/*
        H            T
    N   N    N   N   N  N
*/
LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);     
    if(this.head){
        //Assiging new Node to present Node for tracing backwards.
        this.head.prev = newNode;
    }else{
        //When there are no other nodes in the LinkedList
        this.tail = newNode;
    }

    //Assing new Node to head.
    this.head = newNode
}

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);     
    if(this.tail){
        //Assiging new Node to present Node for tracing forward.
        this.tail.next = newNode;
    }else{
        //When there are no other nodes in the LinkedList
        this.head = newNode;
    }

    //Assing new Node to head.
    this.tail = newNode
}

LinkedList.prototype.removeHead = function(){
    //when list is completely {}
    if(!this.head) return null;
    //When removing node we should return value of present node
    let value = this.head.value;
    //copy next node to present head
    this.head = this.head.next;
    //If head is there then that prev Node will be NULL
    if(this.head){
        this.head.prev =null
    }else{
        //That means no more Node in the {}
        this.tail = null
    }
    return value;
}

LinkedList.prototype.removeTail = function(){
    //when list is completely {}
    if(!this.tail) return null;
    //When removing node we should return value of present node
    let value = this.tail.value;
    //copy next node to present head
    this.tail = this.tail.prev;
    //If head is there then that prev Node will be NULL
    if(this.tail){
        this.tail.next =null
    }else{
        //That means no more Node in the {}
        this.head = null
    }
    return value;
}

LinkedList.prototype.search= function(searchValue){
    let currentNode= this.head;
    while(currentNode){
        if(currentNode.value===searchValue) return searchValue;
        currentNode = currentNode.next
    }
}

LinkedList.prototype.indexOf= function(searchValue){
    let collectionOfIndexs =[];
    let currentIndex=0;
    let currentNode= this.head;
    while(currentNode){
        if(currentNode.value===searchValue) collectionOfIndexs.push(currentIndex)
        currentNode = currentNode.next;
        currentIndex++;
    }
    return collectionOfIndexs;
}

var ll = new LinkedList();
ll.addToTail(1);
console.log(ll);
ll.addToTail(2);
console.log(ll);