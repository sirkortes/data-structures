var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Queue.prototype.size = function(){
	return this.count;
}

Queue.prototype.enqueue = function(value){
	this.storage[this.count] = value;
	this.count++;
}

Queue.prototype.dequeue	= function(){
	// var context = this.storage;
	var result = "Oops!";
	if ( this.count > 0 ){
		result = this.storage[0];
		_.each(this.storage, function(elem,key, collection){
			if ( Number(key) !== 0 ){
				collection[Number(key)-1] = elem;
				// if you like them contextual binds
				// context[Number(key)-1] = elem;
			}
		});
		delete this.storage[this.count-1];
		this.count--;
	}
	return result;
}
