var Tree = function(value) {

  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];  

  console.log("*******");
  return newTree;


};

var treeMethods = {};

treeMethods.addChild = function(value) {

	var node = new Tree(value);
	this.children.push( node );

};

treeMethods.contains = function(target, node) {
	
	// Dat Base Case
	console.log("calling contains",target,node);

	if ( this.value === target ){
		console.log("target === ",this.value);
		return true;

	} else if ( this.children.length > 0 ) {

		// result
		var result = false;

		for (var i = 0; i < this.children.length; i++) {
			// var test = this.contains.call(this.children[i],target);
			// if ( test ) { result = test; }
			result = result ? result : this.contains.call(this.children[i],target);
		}

		return result;
		// // result 
		// var result = false;
		// // while result is false and index is equal to lenght
		// while ( !result ) {

		//     this.children.forEach(function(child, index){
		// 		result = child.contains(target);
		// 	});
		// 	break;
	 //    }
		// // return result
		// console.log("had children, returned: ",result);
		// return result;

		// check 0
			// 	if 0 != target && 1 !== null
				// check 1

		
	} else {
		console.log("else false");
		return false;
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
