var LinkedList = function() {

  // console.log(this);

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var node = new Node(value);

    // only for first
    if ( this.head === null ){ 
      this.head = node; 
    }

    // only for second
    if ( this.head !== null && this.head.next ){
      this.head.next = node;
    }

    if ( this.tail !== null ){
      this.tail.next = node;
    }

    // every other node
    this.tail = node; 

    console.log("added, now this list: ", this);
  };

  list.removeHead = function() {

    if ( this.head !== null ){

      console.log("head: ",this.head);
      var result = this.head.value;
      this.head = this.head.next;
      console.log("remove head will return:",result);
      console.log("after remove:",this);
      return result;
    } else {
      console.log("this.head === "+this.head);
    }

  };

  list.contains = function(target) {



  };

  console.log("*********",list);
  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
