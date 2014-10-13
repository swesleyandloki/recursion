// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //establish place to look
  var $placeToLook;
  var foundElements = [];
  

  if($placeToLook===undefined){
  	$placeToLook = $(document);
  } else {
  	var $classSelect = $("."+className);
  	foundElements.push($classSelect);
  	if($placeToLook.children().length>0){
  		_.each($placeToLook.children(), function(el){
  			$placeToLook = el;
  			getElementsByClassName(className);
  		});
  	}else{
  		$placeToLook = $placeToLook.next();
  	}
  } return foundElements;	
};
