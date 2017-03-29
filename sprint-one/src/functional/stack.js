var Stack = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
    
  };

  someInstance.pop = function() {
    var deleted;
    if ( count > 0 ){ 
        deleted = storage[count];
        delete storage[count];
        count--; 
        return deleted;
    } else {
      return 0;
    }
  };

  someInstance.size = function() {
    return count;
  };

  someInstance.storage = storage;

  return someInstance;

};
