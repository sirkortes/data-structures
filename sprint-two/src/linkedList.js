var LinkedList = function() {


  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var node = new Node(value);

    if ( this.head === null ){ 
      this.head = node; 
    }

    if ( this.head !== null && this.head.next ){
      this.head.next = node;
    }

    if ( this.tail !== null ){
      this.tail.next = node;
    }

    this.tail = node; 
  };

  list.removeHead = function() {

    if ( this.head !== null ){
      var result = this.head.value;
      this.head = this.head.next;
      return result;
    }

  };

  list.contains = function(target, node) {


    node = node || this.head;

    if ( node.value === target ){
      return true;
    } else if ( node.next === null ){
      return false;
    } else {
      return this.contains(target, node.next)
    }

  };

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
