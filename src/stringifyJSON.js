// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  //establish base cases
  if(typeof obj==='number' || typeof obj==='boolean'){return obj.toString();}
  if(obj===null){return 'null';}
  if(typeof obj==='string'){return "\"" + obj + "\"";}
  
  //deal with arrays
  if(Array.isArray(obj)){
  	var stringArray = '';
  	_.each(obj, function(el){
  		if(typeof el !=='function' && el !==undefined){
  			var stringified = stringifyJSON(el);
  			stringArray = stringArray.concat(stringified, ",");
  		}
  	});
  	stringArray = stringArray.slice(0, stringArray.length-1);
  	var stringObj = "["+stringArray+"]";
  }

  //deal with objects
  if(!Array.isArray(obj) && typeof obj==='object'){
  	var stringer = '';
  	_.each(obj, function(el, key){
  		if(typeof el !=='function' && typeof key !=='function' && el !==undefined && key !==undefined){
  			var keyValString = stringifyJSON(key).concat(":", stringifyJSON(el));
  			stringer = stringer.concat(keyValString, ",");
  		}	
  	});
  	stringer = stringer.slice(0, stringer.length-1);
  	var stringObj = "{"+stringer+"}";
  }

  return stringObj;
};
