var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(Stack.prototype);
  instance.count = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {};

Stack.prototype.size = function() {
	return this.count;
}

Stack.prototype.push = function(value){
	this.storage[this.count] = value;
	this.count++;
}

Stack.prototype.pop = function(){ 
	var deleted = 'Oops';
	if ( this.count > 0 ){ 
		deleted = this.storage[this.count];
		delete this.storage[this.count];
		this.count--;
	}
	return deleted;
}