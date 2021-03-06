var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.count = 0;
  return instance;

};

var queueMethods = {

	size: function(){
		return this.count;
	},

	enqueue: function(value){
		this.storage[this.count] = value;
		this.count++;
	},

	dequeue: function() {
		
		var result = "oops!";

		if (this.count > 0) {
			result = this.storage[0];

			for ( var i = 0; i < this.count-1; i++ ){
				this.storage[i] = this.storage[i+1];
			}
			delete this.storage[this.count-1];
			this.count--;
		}

		return result;
	}

};


