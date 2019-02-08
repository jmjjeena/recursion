// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
// to remove quotes
  function removeQuotes(str) {
    var endIndex = str.length - 1;
    if (str[0] === '"' && str[endIndex] === '"') {
      return str.slice(1, endIndex);
    }
    return str;
  }
  
  if(typeof json === 'null') {
    return null;
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if(typeof json === 'string') {
    return  removeQuotes(json);
  } else if(typeof Number(json) === 'number') {
    return Number(json);
  } else if(Array.isArray(json)) {
     for (var i = 0; i < json.length; i++) {
       removeQuotes(parseJSON(json[i]))
     }
  }
};