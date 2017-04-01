

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = {};
  var currentValue = this._storage.get(index)
	if ( currentValue ){
    	result = currentValue;
	}
  result[k] = v;
  this._storage.set(index, result);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentValue = this._storage.get(index);
  return currentValue[k];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentValue = this._storage.get(index);
  delete currentValue[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1),
 retrieve: O(1),
 remove: O(1)
 */


