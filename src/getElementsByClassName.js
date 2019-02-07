// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// var getElementsByClassName = function(className) {
//   // your code here
//   // create an empty array ---> result
//   var result = [];
//   // if document.body.classList.contains(className)
//   // then push it to result 
//   // else search through childNodes
//   // by iretating over the nodes
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //create placeholder to store result
	var result = [];

  //create function to search for className

	var search = function(element) {
	 	//test if our element param has a classList
	 	//&& if it .contains our desired className
 		if(element.classList && element.classList.contains(className)) {
 			//push matched data into our result
 			result.push(element); 
 		}
	 	//create a for loop to loop through childNodes
	 	//if childNodes contains our className, call our
	 	//recursive statement on that search
 		for(var i = 0; i < element.childNodes.length; i++) {
 			search(element.childNodes[i]);
 		}
  }
 search(document.body);
 return result; 
};

