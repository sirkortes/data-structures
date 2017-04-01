var BinarySearchTree = function(value) {

	var bst = Object.create(methods)
	bst.value = value;
	bst.left;
	bst.right;
	return bst;
};

var methods = {}
// insert
methods.insert = function(value){

		if ( value < this.value ){

			if ( this.left ) {
				this.left.insert(value);
			} else {
				this.left = BinarySearchTree(value);	
			}

		} else if ( value > this.value ){

			if ( this.right ) {
				this.right.insert(value);
			} else {
				this.right = BinarySearchTree(value);
			}

		} 

};

// contains
methods.contains = function(value) {

		if ( value < this.value ){
				return !!( this.left && this.left.contains(value) );
		} 

		if ( value > this.value ){
			return !!( this.right && this.right.contains(value) );
		}

		return true;
};

// detphFirstLog
methods.depthFirstLog = function(fn) {

	fn(this.value)

	if ( this.left ){
		this.left.depthFirstLog(fn);
	}
	if ( this.right ) {
		this.right.depthFirstLog(fn);
	}
		
};

/*
 * Complexity: What is the time complexity of the above functions?
	insert: O(log n),
	contains: O(log n),
	depthFirstLog: O(n)
 */