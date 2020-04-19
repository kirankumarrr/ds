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


var ll = new LinkedList();
ll.addToTail(1);
console.log(ll);
// ll.addToTail(2);
// console.log(ll);