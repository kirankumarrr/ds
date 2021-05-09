class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class SinglyLinkedList{
    constructor(){
        this.head =null
        this.tail =null
        this.length = 0
    }

    /* 
    * @method push
      @desc : if no head : Add on head also share to tail as well
      @desc : if has head : add new node On Tail and 
      @param {any}: value to be added
    */
    push(value){
       var newNode = new Node(value)
       !this.head ? this.pushOnHeadAndShareToTail(newNode) : this.pushOnTailIfHeadAlreadyExist(newNode)
       this.length ++;
       return this 
    }

    /* 
    * @method pop(You might wonder why using to delete last node on singlyLinkedList)
      @desc : The tail does not have information about the previous node.
      @desc : delete node from tail
      @desc : if no nodes then return undefined
      @desc : return deleted node
    */
    pop(){
       this.doesHeadexists()
       var current = this.head; // assign current head(this helps to check next node exists)
       var newTail = current // using this we can assign last 2nd node to tail & delete last node
       while(current.next){ //checks for next node 
            newTail = current // store current node to newTail
            current = current.next // pass on
        }

        //When while loop stops we know that which is last 2nd node(newTail)
        this.tail = newTail // assigning new tail(which is last 2nd node )
        this.tail.next = null // disconnecting next node as null
        this.length--

        if(this.length===0) this.initialHeadTailAndLength()

        return current // this is the deleted node 
         
    }
    /* 
    * @method shift
      @desc : Removing a new node from the link from the beginning of the linked list
      @desc : if no node exists then return undefined
    */
    shift(){
       this.doesHeadexists()
       var current = this.head;
       this.head = current.next
       this.length--

        if(this.length===0) this.initialHeadTailAndLength()
       return current
    }

   /* 
    * @method unshift
      @desc : Adding a new node from the link to the beginning of the linked list
    */
    unshift(value){
       var newNode = new Node(value)
       !this.head ? this.pushOnHeadAndShareToTail(newNode) : this.unshiftOnHead(newNode)
       this.length++
       return this
    } 

    /* 
    * @method get
      @desc : get value in particular indexPosition
      @desc : if indexPosition is greater then the singlyLinkedList length return -1
      @return { node / null }
    */
    get(indexPosition){
      if(indexPosition>this.length || indexPosition<0) return null
      var counter = 0 
      var currentHead = this.head 

      while(indexPosition!==counter){
          currentHead=currentHead.next
           counter++
      }
      return currentHead

    }

    /* 
    * @method set
      @desc : set value in particular indexPosition
      @desc : if indexPosition is greater then the singlyLinkedList length return -1
      @return { boolean }
    */
    set(indexPosition,value){
       var currentNodeInPosition = this.get(indexPosition)
      if(currentNodeInPosition!==-1){
          currentNodeInPosition.value = value
          return true
      } 
      return false
    }

    /* 
    * @method insert
      @desc : insert value in particular indexPosition
      @desc : if indexPosition is greater then the singlyLinkedList length return -1
      @return { boolean }
    */
    insert(indexPosition,value){
        if(indexPosition<0 || indexPosition > this.length) return false
        else if(0===indexPosition) return this.unshift(value)  
        else if(this.length===indexPosition) return this.push(value) 
        else{
            var newNode = new Node(value)
            var prevNode = this.get(indexPosition-1)
            var temp =  prevNode.next
            prevNode.next = newNode
            newNode.next = temp
            this.length++;
            return this
        }
    }

    /* 
    * @method remove Node
      @desc : remove Node in particular indexPosition
      @desc : if indexPosition is greater then the singlyLinkedList length return -1
      @return { boolean }
    */
    remove(indexPosition){
        if(indexPosition<0 || indexPosition > this.length) return false
        else if(0===indexPosition) return this.shift(value) 
        else if(this.length===indexPosition) return this.pop(value) 
        else{
            var prevNode = this.get(indexPosition-1)
            var removed =  prevNode.next
            prevNode.next = removed.next
            this.length--;
            return this
        }
    }

     /* 
    * @method reverse LinkedList
      @desc : reverse LinkedList
      @return { boolean }
    */

    /*
    *Explaination

             100            200          300            400
        -------------------------------------------------
            1-200         2-300         3-400            4-null
        -------------------------------------------------
            
 1.        prevNode     current        next
            null           200           300    

 2.        prevNode     current        next
            200           300           400    

 3.        prevNode     current        next
            300          400           null    
    
    */
    reverse(){
        var currentNode = this.head 
        this.head = this.tail 
        this.tail = currentNode 

        var next = null
        var prev = null

        for(var i=0;i<this.length;i++){
           next = currentNode.next; 
           currentNode.next = prev ;
           prev = currentNode ;
           currentNode = next ; 
        }
        return this
    }

    doesHeadexists(){
        if(!this.head) return undefined
    }

    pushOnHeadAndShareToTail(node){
        this.head = node
        this.tail = this.head
    }

    pushOnTailIfHeadAlreadyExist(node){
        this.tail.next = node
        this.tail = node
    }

    unshiftOnHead(newNode){
        var currentHead = this.head
        this.head= newNode
        this.head.next = currentHead
    }

    initialHeadTailAndLength(){
        this.head =null
        this.tail =null
        this.length = 0
    }

    displayNodes(){
        var currentHead = this.head
        var array = [currentHead.value]
        while(currentHead.next){
            currentHead = currentHead.next
             array.push(currentHead.value)
        }
        return array
    }

}

var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.displayNodes()
