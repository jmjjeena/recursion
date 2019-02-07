// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


  //given an object, wrap the obj & obj.key in quotes,
  //arrays, boolean & numeric obj.values are not stringifed
  // check the typeof the obj
  // if its number or boolean
  // it should be inside ''+ obj 
  // if its a sting
  // it should be '"' + obj + '"'
  // if its an array
  // iterate over the array
  // push stringified elements to array
  // by adding '[' + array + ']'
  // if obj is typeof object
  // get the keys of the obj
  // set the key to --> '"' + key + '"'

var stringifyJSON = function(obj) {
  if(obj === null) {
    return 'null';

  } else if(typeof obj === 'number' || typeof obj === 'boolean') {
        return '' + obj + '';

  } else if(obj === undefined) {
        return undefined;

  } else if(typeof obj === 'string') {
        return '"' + obj + '"';

  } else if(Array.isArray(obj)) {
      var string = '';
      var length = obj.length;

      for(var i = 0; i < length; i++) {
        string = string.concat(stringifyJSON(obj[i]) + (","));
      }
      //remove comma
      return '[' + string.slice(0, string.length - 1) + ']';

  } else if(typeof obj === 'object') {
      var string = '';
      for(var val in obj) {
        if(obj[val] !== undefined && typeof(obj[val]) !== 'function') {
          string = string.concat(stringifyJSON(val) + ':' + stringifyJSON(obj[val]) + (","));
        }
      }
        //remove comma
        return '{' + string.slice(0, string.length - 1) + '}';
      }
       return obj.toString();
};