// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	
	var searchString = className;	
	var $placeToLook;
	var foundElements = [];
	
	if ($placeToLook === undefined){$placeToLook = $(document);}
	if ($placeToLook.hasClass(className)){foundElements.push($placeToLook);}
	if ($placeToLook.children() > 0){
		_.each($placeToLook.children, function(el){
			$placeToLook = el;
			getElementsByClassName(searchString);
		});
	} else if ($placeToLook.next() !== undefined){
		$placeToLook = $placeToLook.next();
		getElementsByClassName(searchString);
	}
	return foundElements;
};