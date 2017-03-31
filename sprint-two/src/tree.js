var Tree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.children = [];  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

	var node = new Tree(value);
	this.children.push( node );

};

treeMethods.contains = function(target, node) {
	
	if ( this.value === target ){
		return true;

	} else if ( this.children.length > 0 ) {

		var result = false;

		for (var i = 0; i < this.children.length; i++) {
			result = result ? result : this.contains.call(this.children[i],target);
		}

		return result;
		
	} else {
		return false;
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
