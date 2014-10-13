// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, placeToLook, foundElements){
	
	var searchString = className;	
	foundElements = foundElements || []; 
	placeToLook = placeToLook || document.body;
	classes = [];
	
	if (placeToLook.classList.contains(className)){
		foundElements = Array.prototype.concat.apply(foundElements, placeToLook);
	}
	if (placeToLook.children.length > 0){
		_.each(placeToLook.children, function(el){
			placeToLook = el;
			getElementsByClassName(className, placeToLook, foundElements);
		});
	
	}
	return foundElements;
};