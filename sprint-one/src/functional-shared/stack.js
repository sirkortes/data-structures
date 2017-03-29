var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
  	count: 0,
  	storage: {}
  };

  $.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {

	push: function(value){ 
		this.count++;
	    this.storage[this.count] = value;
    },

	pop: function(){
		var deleted;
	    if ( this.count > 0 ){ 
	        deleted = this.storage[this.count];
	        delete this.storage[this.count];
	        this.count--; 
	        return deleted;
	    } else {
	      return 0;
	    }
	},

	size: function(){
		return this.count;
	}
};

