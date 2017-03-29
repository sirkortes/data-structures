var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var qchange = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    
    if( counter - qchange > 0 ){ 
      var deleted = storage[qchange];
      delete storage[qchange];
      // counter--;
      qchange++;
      return deleted;
    }
    return 'negative, bruh';
  };

  someInstance.size = function() {
    return counter - qchange;
  };



  return someInstance;
};
