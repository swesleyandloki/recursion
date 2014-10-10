// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var stringer = "\"";
  if(typeof obj==='number' || typeof obj==='boolean'){return obj.toString();}
  if(obj===null){return 'null';}
  if(typeof obj==='string'){return "\"" + obj + "\"";}
  if(obj===undefined || typeof obj==='function'){return undefined;}
  if(Array.isArray(obj)){
  	var stringArray = '';
  	_.each(obj, function(el){
  		var stringified = stringifyJSON(el);
  		stringArray = stringArray.concat(stringified, ",");
  	});
  	stringArray = stringArray.slice(0, stringArray.length-1);
  	var stringObj = "["+stringArray+"]";
  	return stringObj;
  }
  if(!Array.isArray(obj) && typeof obj==='object'){
  	var stringer = '';
  	_.each(obj, function(el, key){
  		var keyValString = stringifyJSON(key).concat(":", stringifyJSON(el));
  		stringer = stringer.concat(keyValString, ",");
  	});
  	stringer = stringer.slice(0, stringer.length-1);
  	var stringObj = "{"+stringer+"}";
  	return stringObj;
  }
  

};
